import {
  Student,
  Teacher,
  SchoolClass,
  Subject,
  Grade,
  AttendanceRecord,
  Homework,
  HomeworkSubmission,
  Announcement,
  ReportCard,
  TeacherNote,
  AuditLog,
  AcademicYear,
  SchoolConfig,
  CSVImportPreviewRow,
} from '../types';
import {
  COLLECTIONS,
  getCollectionDocs,
  setDocument,
  updateDocument,
  deleteDocument,
  batchSetDocuments,
} from './firestoreService';
import {
  INITIAL_STUDENTS,
  INITIAL_TEACHERS,
  INITIAL_CLASSES,
  INITIAL_SUBJECTS,
  INITIAL_GRADES,
  INITIAL_ATTENDANCE,
  INITIAL_HOMEWORKS,
  INITIAL_SUBMISSIONS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_TEACHER_NOTES,
  INITIAL_AUDIT_LOGS,
  INITIAL_REPORT_CARDS,
  INITIAL_ACADEMIC_YEARS,
  INITIAL_SCHOOL_CONFIG,
  INITIAL_ADMIN_USER,
} from '../data/initialData';

/**
 * Checks if Firestore is initialized and seeds default data if collections are empty.
 */
export async function seedInitialDataIfEmpty(): Promise<boolean> {
  try {
    const existingClasses = await getCollectionDocs<SchoolClass>(COLLECTIONS.CLASSES);
    if (existingClasses.length > 0) {
      return false; // Already populated
    }

    console.log('Seeding initial school dataset to Cloud Firestore...');

    await Promise.all([
      batchSetDocuments(COLLECTIONS.ACADEMIC_YEARS, INITIAL_ACADEMIC_YEARS),
      batchSetDocuments(COLLECTIONS.SUBJECTS, INITIAL_SUBJECTS),
      batchSetDocuments(COLLECTIONS.CLASSES, INITIAL_CLASSES),
      batchSetDocuments(COLLECTIONS.TEACHERS, INITIAL_TEACHERS),
      batchSetDocuments(COLLECTIONS.STUDENTS, INITIAL_STUDENTS),
      batchSetDocuments(COLLECTIONS.GRADES, INITIAL_GRADES),
      batchSetDocuments(COLLECTIONS.ATTENDANCE, INITIAL_ATTENDANCE),
      batchSetDocuments(COLLECTIONS.HOMEWORKS, INITIAL_HOMEWORKS),
      batchSetDocuments(COLLECTIONS.SUBMISSIONS, INITIAL_SUBMISSIONS),
      batchSetDocuments(COLLECTIONS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS),
      batchSetDocuments(COLLECTIONS.TEACHER_NOTES, INITIAL_TEACHER_NOTES),
      batchSetDocuments(COLLECTIONS.REPORT_CARDS, INITIAL_REPORT_CARDS),
      batchSetDocuments(COLLECTIONS.AUDIT_LOGS, INITIAL_AUDIT_LOGS),
      setDocument(COLLECTIONS.SCHOOL_CONFIG, 'default', { ...INITIAL_SCHOOL_CONFIG, id: 'default' }),
      setDocument(COLLECTIONS.USERS, INITIAL_ADMIN_USER.id, INITIAL_ADMIN_USER),
    ]);

    console.log('Firestore seed completed successfully.');
    return true;
  } catch (error) {
    console.error('Error seeding Firestore:', error);
    return false;
  }
}

/**
 * Reset Firestore to initial state
 */
export async function resetFirestoreToInitial(): Promise<void> {
  await Promise.all([
    batchSetDocuments(COLLECTIONS.ACADEMIC_YEARS, INITIAL_ACADEMIC_YEARS),
    batchSetDocuments(COLLECTIONS.SUBJECTS, INITIAL_SUBJECTS),
    batchSetDocuments(COLLECTIONS.CLASSES, INITIAL_CLASSES),
    batchSetDocuments(COLLECTIONS.TEACHERS, INITIAL_TEACHERS),
    batchSetDocuments(COLLECTIONS.STUDENTS, INITIAL_STUDENTS),
    batchSetDocuments(COLLECTIONS.GRADES, INITIAL_GRADES),
    batchSetDocuments(COLLECTIONS.ATTENDANCE, INITIAL_ATTENDANCE),
    batchSetDocuments(COLLECTIONS.HOMEWORKS, INITIAL_HOMEWORKS),
    batchSetDocuments(COLLECTIONS.SUBMISSIONS, INITIAL_SUBMISSIONS),
    batchSetDocuments(COLLECTIONS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS),
    batchSetDocuments(COLLECTIONS.TEACHER_NOTES, INITIAL_TEACHER_NOTES),
    batchSetDocuments(COLLECTIONS.REPORT_CARDS, INITIAL_REPORT_CARDS),
    batchSetDocuments(COLLECTIONS.AUDIT_LOGS, INITIAL_AUDIT_LOGS),
    setDocument(COLLECTIONS.SCHOOL_CONFIG, 'default', { ...INITIAL_SCHOOL_CONFIG, id: 'default' }),
  ]);
}
