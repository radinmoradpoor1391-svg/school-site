import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './config';

export interface UploadProgressCallback {
  (progress: number): void;
}

/**
 * Validates image format and file size
 */
export function validateImageFile(file: File, maxSizeBytes = 4 * 1024 * 1024): { valid: boolean; error?: string } {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'فرمت تصویر مجاز نمی‌باشد. لطفاً از JPG، PNG یا WEBP استفاده کنید.' };
  }
  if (file.size > maxSizeBytes) {
    return { valid: false, error: `حجم فایل بیشتر از حد مجاز (${Math.round(maxSizeBytes / (1024 * 1024))} مگابایت) است.` };
  }
  return { valid: true };
}

/**
 * Converts File to Base64 (fallback or instant preview)
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Uploads a profile image to Firebase Storage
 */
export async function uploadProfileImage(
  userId: string,
  file: File,
  onProgress?: UploadProgressCallback
): Promise<string> {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const extension = file.name.split('.').pop() || 'jpg';
  const path = `avatars/${userId}_${Date.now()}.${extension}`;
  const storageRef = ref(storage, path);

  try {
    const uploadTask = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
      customMetadata: { userId, uploadedAt: new Date().toISOString() },
    });

    return await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          if (onProgress && snapshot.totalBytes > 0) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress(Math.round(progress));
          }
        },
        (error) => {
          console.warn('Storage upload error, falling back to base64 data URL:', error);
          fileToBase64(file).then(resolve).catch(reject);
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadUrl);
          } catch (err) {
            console.warn('Failed to retrieve download URL, using base64:', err);
            const base64 = await fileToBase64(file);
            resolve(base64);
          }
        }
      );
    });
  } catch (error) {
    console.warn('Storage upload caught error, using base64 fallback:', error);
    return await fileToBase64(file);
  }
}

/**
 * Uploads homework submission attachment
 */
export async function uploadHomeworkAttachment(
  homeworkId: string,
  studentId: string,
  file: File,
  onProgress?: UploadProgressCallback
): Promise<string> {
  const validation = validateImageFile(file, 8 * 1024 * 1024);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const extension = file.name.split('.').pop() || 'jpg';
  const path = `homework_submissions/${homeworkId}/${studentId}_${Date.now()}.${extension}`;
  const storageRef = ref(storage, path);

  try {
    const uploadTask = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
      customMetadata: { homeworkId, studentId, uploadedAt: new Date().toISOString() },
    });

    return await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          if (onProgress && snapshot.totalBytes > 0) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress(Math.round(progress));
          }
        },
        (error) => {
          console.warn('Storage upload error, falling back to base64 data URL:', error);
          fileToBase64(file).then(resolve).catch(reject);
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadUrl);
          } catch (err) {
            const base64 = await fileToBase64(file);
            resolve(base64);
          }
        }
      );
    });
  } catch (error) {
    return await fileToBase64(file);
  }
}
