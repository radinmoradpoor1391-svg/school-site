import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  query,
  where,
  orderBy,
  onSnapshot,
  QueryConstraint,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const COLLECTIONS = {
  USERS: 'users',
  STUDENTS: 'students',
  TEACHERS: 'teachers',
  CLASSES: 'classes',
  SUBJECTS: 'subjects',
  GRADES: 'grades',
  ATTENDANCE: 'attendance',
  HOMEWORKS: 'homeworks',
  SUBMISSIONS: 'submissions',
  ANNOUNCEMENTS: 'announcements',
  REPORT_CARDS: 'reportCards',
  TEACHER_NOTES: 'teacherNotes',
  AUDIT_LOGS: 'auditLogs',
  ACADEMIC_YEARS: 'academicYears',
  SCHOOL_CONFIG: 'schoolConfig',
} as const;

/**
 * Fetch all documents from a Firestore collection
 */
export async function getCollectionDocs<T>(collectionName: string, ...constraints: QueryConstraint[]): Promise<T[]> {
  try {
    const colRef = collection(db, collectionName);
    const q = constraints.length > 0 ? query(colRef, ...constraints) : query(colRef);
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as any) })) as T[];
  } catch (error) {
    console.error(`Error fetching collection ${collectionName}:`, error);
    return [];
  }
}

/**
 * Fetch a single document by ID
 */
export async function getDocumentById<T>(collectionName: string, id: string): Promise<T | null> {
  try {
    const docRef = doc(db, collectionName, id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...(snap.data() as any) } as T;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching doc ${collectionName}/${id}:`, error);
    return null;
  }
}

/**
 * Set or overwrite a document
 */
export async function setDocument<T extends { id?: string }>(collectionName: string, id: string, data: T): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, { ...data, id }, { merge: true });
  } catch (error) {
    console.error(`Error saving document ${collectionName}/${id}:`, error);
    throw error;
  }
}

/**
 * Update specific fields of a document
 */
export async function updateDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data as any);
  } catch (error) {
    console.error(`Error updating document ${collectionName}/${id}:`, error);
    throw error;
  }
}

/**
 * Delete a document
 */
export async function deleteDocument(collectionName: string, id: string): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Error deleting document ${collectionName}/${id}:`, error);
    throw error;
  }
}

/**
 * Write a batch of documents
 */
export async function batchSetDocuments<T extends { id: string }>(collectionName: string, items: T[]): Promise<void> {
  if (items.length === 0) return;
  // Firestore batches are limited to 500 operations
  const chunkSize = 450;
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    const batch = writeBatch(db);
    for (const item of chunk) {
      const docRef = doc(db, collectionName, item.id);
      batch.set(docRef, item, { merge: true });
    }
    await batch.commit();
  }
}

/**
 * Listen to a Firestore collection with real-time updates
 */
export function subscribeToCollection<T>(
  collectionName: string,
  onData: (data: T[]) => void,
  onError?: (error: Error) => void,
  ...constraints: QueryConstraint[]
): Unsubscribe {
  const colRef = collection(db, collectionName);
  const q = constraints.length > 0 ? query(colRef, ...constraints) : query(colRef);

  return onSnapshot(
    q,
    (snapshot) => {
      const docs = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as any) })) as T[];
      onData(docs);
    },
    (error) => {
      console.warn(`Firestore subscription notice on ${collectionName}:`, error.message);
      if (onError) onError(error);
    }
  );
}
