import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  updatePassword as fbUpdatePassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { getDocumentById, setDocument, COLLECTIONS } from './firestoreService';
import { User, UserRole } from '../types';
import { toEnglishDigits } from '../utils/persian';

/**
 * Converts nationalId or username to a valid Firebase Auth email format
 */
export function formatAuthEmail(identifier: string): string {
  const cleanId = toEnglishDigits(identifier).trim().toLowerCase();
  if (cleanId.includes('@')) {
    return cleanId;
  }
  return `user_${cleanId}@dana.school`;
}

/**
 * Maps Firebase Auth errors to user-friendly Persian messages
 */
export function translateAuthError(code: string): string {
  switch (code) {
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
      return 'کد ملی یا رمز عبور وارد شده نادرست است.';
    case 'auth/user-disabled':
      return 'حساب کاربری شما توسط مدیریت غیرفعال شده است.';
    case 'auth/too-many-requests':
      return 'تعداد تلاش‌های ناموفق بیش از حد مجاز است. لطفاً چند دقیقه بعد تلاش کنید.';
    case 'auth/network-request-failed':
      return 'خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.';
    case 'auth/weak-password':
      return 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    case 'auth/email-already-in-use':
      return 'این حساب کاربری قبلاً در سامانه ثبت شده است.';
    default:
      return 'خطایی در فرآیند احراز هویت رخ داد. لطفاً مجدداً تلاش نمایید.';
  }
}

/**
 * Authenticates user via Firebase Auth and retrieves Firestore profile
 */
export async function loginWithFirebase(
  identifier: string,
  passwordInput: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const email = formatAuthEmail(identifier);
  const password = toEnglishDigits(passwordInput).trim();

  if (!password || password.length < 4) {
    return { success: false, error: 'رمز عبور باید حداقل ۴ کاراکتر باشد.' };
  }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const fbUser = cred.user;

    // Fetch user profile from Firestore users collection
    let profile = await getDocumentById<User>(COLLECTIONS.USERS, fbUser.uid);
    if (!profile) {
      // Fallback: check if document exists under nationalId
      const cleanId = toEnglishDigits(identifier).trim();
      profile = await getDocumentById<User>(COLLECTIONS.USERS, cleanId);
      if (profile) {
        // Associate with UID
        await setDocument(COLLECTIONS.USERS, fbUser.uid, { ...profile, id: fbUser.uid });
      }
    }

    return { success: true, user: profile || undefined };
  } catch (error: any) {
    console.warn('Firebase login attempt:', error.code || error.message);
    return { success: false, error: translateAuthError(error.code || '') };
  }
}

/**
 * Registers or ensures a Firebase Auth user account exists
 */
export async function registerFirebaseAccount(
  identifier: string,
  passwordInput: string,
  userProfile: Partial<User>
): Promise<{ success: boolean; uid?: string; error?: string }> {
  const email = formatAuthEmail(identifier);
  const password = toEnglishDigits(passwordInput).trim();

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    const fullProfile: User = {
      id: uid,
      nationalId: userProfile.nationalId || toEnglishDigits(identifier),
      firstName: userProfile.firstName || '',
      lastName: userProfile.lastName || '',
      role: userProfile.role || 'student',
      email: userProfile.email || email,
      phone: userProfile.phone || '',
      avatarUrl: userProfile.avatarUrl,
      isActive: true,
      firstLogin: false,
      createdAt: userProfile.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDocument(COLLECTIONS.USERS, uid, fullProfile);
    return { success: true, uid };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      // Try signing in
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, uid: cred.user.uid };
      } catch (signInErr: any) {
        return { success: false, error: translateAuthError(signInErr.code || '') };
      }
    }
    return { success: false, error: translateAuthError(error.code || '') };
  }
}

/**
 * Updates current Firebase user password
 */
export async function changeFirebasePassword(newPasswordInput: string): Promise<{ success: boolean; error?: string }> {
  const user = auth.currentUser;
  if (!user) {
    return { success: false, error: 'کاربر لاگین نکرده است.' };
  }

  const newPassword = toEnglishDigits(newPasswordInput).trim();
  if (newPassword.length < 6) {
    return { success: false, error: 'رمز عبور جدید باید حداقل ۶ کاراکتر باشد.' };
  }

  try {
    await fbUpdatePassword(user, newPassword);
    return { success: true };
  } catch (error: any) {
    console.error('Password change error:', error);
    return { success: false, error: translateAuthError(error.code || '') };
  }
}

/**
 * Signs out from Firebase Authentication
 */
export async function logoutFirebase(): Promise<void> {
  try {
    await fbSignOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
  }
}
