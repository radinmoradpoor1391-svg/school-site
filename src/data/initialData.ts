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
  User,
  SchoolConfig,
} from '../types';

export const INITIAL_ACADEMIC_YEARS: AcademicYear[] = [
  {
    id: 'ay-1404-1405',
    name: 'سال تحصیلی ۱۴۰۴–۱۴۰۵',
    startDate: '۱۴۰۴/۰۷/۰۱',
    endDate: '۱۴۰۵/۰۳/۳۱',
    isCurrent: true,
    isArchived: false,
  },
  {
    id: 'ay-1403-1404',
    name: 'سال تحصیلی ۱۴۰۳–۱۴۰۴',
    startDate: '۱۴۰۳/۰۷/۰۱',
    endDate: '۱۴۰۴/۰۳/۳۱',
    isCurrent: false,
    isArchived: true,
  },
];

export const INITIAL_SUBJECTS: Subject[] = [
  // Middle & High school subjects
  { id: 'sub-math', title: 'ریاضیات تخصصی', code: 'MATH-101', coefficient: 4, gradeLevel: 'متوسطه اول', description: 'حساب، هندسه و جبر استدلالی' },
  { id: 'sub-science', title: 'علوم تجربی (فیزیک و شیمی)', code: 'SCI-102', coefficient: 4, gradeLevel: 'متوسطه اول', description: 'آزمایشگاه و مباحث فیزیک، شیمی و زیست' },
  { id: 'sub-persian', title: 'ادبیات و نگارش فارسی', code: 'LIT-103', coefficient: 3, gradeLevel: 'متوسطه اول', description: 'دستور زبان، آرایه‌های ادبی و نگارش خلاق' },
  { id: 'sub-english', title: 'زبان انگلیسی', code: 'ENG-104', coefficient: 2, gradeLevel: 'متوسطه اول', description: 'مکالمه، درک مطلب و گرامر کاربردی' },
  { id: 'sub-arabic', title: 'زبان و ادبیات عربی', code: 'ARB-105', coefficient: 2, gradeLevel: 'متوسطه اول', description: 'ترجمه، مفاهیم و قواعد زبان عربی' },
  { id: 'sub-quran', title: 'پیام‌های آسمان و قرآن', code: 'REL-106', coefficient: 2, gradeLevel: 'متوسطه اول', description: 'معارف اسلامی، اخلاق و قرائت قرآن' },
  { id: 'sub-social', title: 'مطالعات اجتماعی و تاریخ', code: 'SOC-107', coefficient: 2, gradeLevel: 'متوسطه اول', description: 'جغرافیا، تاریخ و مدنی' },
  { id: 'sub-tech', title: 'کار و فناوری و برنامه‌نویسی', code: 'TECH-108', coefficient: 2, gradeLevel: 'متوسطه اول', description: 'کارگاه عملی و مبانی تفکر الگوریتمی' },
  { id: 'sub-art', title: 'فرهنگ و هنر', code: 'ART-109', coefficient: 1, gradeLevel: 'متوسطه اول', description: 'طراحی، خوشنویسی و هنرهای تجسمی' },
  { id: 'sub-pe', title: 'تربیت بدنی و سلامت', code: 'PE-110', coefficient: 1, gradeLevel: 'متوسطه اول', description: 'آمادگی جسمانی و ورزش‌های تیمی' },
  { id: 'sub-thinking', title: 'تفکر و سبک زندگی', code: 'THK-111', coefficient: 1, gradeLevel: 'متوسطه اول', description: 'مهارت‌های زندگی و تفکر نقادانه' },

  // Elementary school subjects (ابتدایی)
  { id: 'sub-elem-farsi', title: 'فارسی (بخوانیم و بنویسیم)', code: 'ELEM-LIT', coefficient: 3, gradeLevel: 'ابتدایی', description: 'مهارت‌های خوانداری، درک متن و خوشنویسی' },
  { id: 'sub-elem-math', title: 'ریاضیات ابتدایی', code: 'ELEM-MATH', coefficient: 3, gradeLevel: 'ابتدایی', description: 'مفاهیم پایه اعداد، اشکال هندسی و حل مسئله' },
  { id: 'sub-elem-sci', title: 'علوم تجربی ابتدایی', code: 'ELEM-SCI', coefficient: 3, gradeLevel: 'ابتدایی', description: 'آشنایی با طبیعت، مشاهده، آزمایش و کاوشگری' },
  { id: 'sub-elem-social', title: 'مطالعات اجتماعی ابتدایی', code: 'ELEM-SOC', coefficient: 2, gradeLevel: 'ابتدایی', description: 'آشنایی با خانواده، جامعه و محیط زیست' },
  { id: 'sub-elem-quran', title: 'قرآن و هدیه‌های آسمان', code: 'ELEM-REL', coefficient: 2, gradeLevel: 'ابتدایی', description: 'قصه‌های قرآنی، آموزه‌های اخلاقی و روخوانی' },
  { id: 'sub-elem-art', title: 'هنر و خلاقیت', code: 'ELEM-ART', coefficient: 1, gradeLevel: 'ابتدایی', description: 'نقاشی، کاردستی و پرورش خلاقیت' },
  { id: 'sub-elem-pe', title: 'تربیت بدنی و بازی‌های حرکتی', code: 'ELEM-PE', coefficient: 1, gradeLevel: 'ابتدایی', description: 'مهارت‌های بنیادین حرکتی و بازی‌های گروهی' },
  { id: 'sub-elem-ethics', title: 'شایستگی‌های عمومی و اخلاق', code: 'ELEM-ETH', coefficient: 1, gradeLevel: 'ابتدایی', description: 'نظم فردی، همکاری و آداب زندگی' },
];

export const INITIAL_CLASSES: SchoolClass[] = [
  { id: 'cls-701', name: 'کلاس ۱۰۱ (پایه هفتم - الف)', gradeLevel: 'هفتم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۱', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-702', name: 'کلاس ۱۰۲ (پایه هفتم - ب)', gradeLevel: 'هفتم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۲', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-801', name: 'کلاس ۲۰۱ (پایه هشتم - الف)', gradeLevel: 'هشتم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۳', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-802', name: 'کلاس ۲۰۲ (پایه هشتم - ب)', gradeLevel: 'هشتم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۴', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-901', name: 'کلاس ۳۰۱ (پایه نهم - الف)', gradeLevel: 'نهم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۵', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-902', name: 'کلاس ۳۰۲ (پایه نهم - ب)', gradeLevel: 'نهم', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 30, roomNumber: '۲۰۶', fieldOfStudy: 'دوره اول متوسطه' },
  { id: 'cls-elem-1', name: 'کلاس ۱۰ (پایه اول ابتدایی - الف)', gradeLevel: 'اول ابتدایی', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 25, roomNumber: '۱۰۱', fieldOfStudy: 'دوره اول دبستان' },
  { id: 'cls-elem-5', name: 'کلاس ۵۰ (پایه پنجم ابتدایی - الف)', gradeLevel: 'پنجم ابتدایی', academicYearId: 'ay-1404-1405', studentIds: [], capacity: 25, roomNumber: '۱۰۵', fieldOfStudy: 'دوره دوم دبستان' },
];

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: 'tch-demo',
    userId: 'usr-tch-demo',
    nationalId: '2222222222',
    firstName: 'استاد دمو (دبیر نمونه)',
    lastName: 'اکبری',
    specialty: 'ریاضیات و علوم تجربی',
    degree: 'کارشناسی ارشد آموزش ریاضی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801'],
    assignedSubjectIds: ['sub-math', 'sub-science'],
    phone: '۰۹۱۲۲۲۲۲۲۲۲',
    email: 'demo.teacher@dana-school.ir',
    bio: 'حساب کاربری آزمایشی دبیر با دسترسی کامل به ثبت نمرات، حضور و غیاب و تکالیف',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-1',
    userId: 'usr-tch-1',
    nationalId: '0078901234',
    firstName: 'استاد علیرضا',
    lastName: 'رضوانی',
    specialty: 'ریاضیات و المپیاد',
    degree: 'کارشناسی ارشد ریاضی محض - دانشگاه صنعتی شریف',
    assignedClassIds: ['cls-701', 'cls-801', 'cls-901'],
    assignedSubjectIds: ['sub-math'],
    phone: '۰۹۱۲۱۱۱۰۰۰۱',
    email: 'rezvani@dana-school.ir',
    bio: '۱۵ سال سابقه تدریس ریاضیات تیزهوشان و طراح سوالات آزمون‌های نهایی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-2',
    userId: 'usr-tch-2',
    nationalId: '0078901235',
    firstName: 'دکتر مهدی',
    lastName: 'حسینی‌فر',
    specialty: 'فیزیک و علوم تجربی',
    degree: 'دکتری فیزیک هسته‌ای - دانشگاه تهران',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-science'],
    phone: '۰۹۱۲۱۱۱۰۰۰۲',
    email: 'hosseini@dana-school.ir',
    bio: 'مدرس المپیاد نجوم و فیزیک با سابقه ۱۰ سال تدریس در مدارس برتر',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-3',
    userId: 'usr-tch-3',
    nationalId: '0078901236',
    firstName: 'استاد محمدرضا',
    lastName: 'افشار',
    specialty: 'ادبیات فارسی و شاهنامه‌پژوهی',
    degree: 'کارشناسی ارشد زبان و ادبیات فارسی - دانشگاه بهشتی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801'],
    assignedSubjectIds: ['sub-persian'],
    phone: '۰۹۱۲۱۱۱۰۰۰۳',
    email: 'afshar@dana-school.ir',
    bio: 'پژوهشگر متون کهن و مؤلف کتاب‌های کمک‌آموزشی ادبیات',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-4',
    userId: 'usr-tch-4',
    nationalId: '0078901237',
    firstName: 'مهندس کاوه',
    lastName: 'مهرگان',
    specialty: 'زبان انگلیسی و آیلتس',
    degree: 'کارشناسی ارشد آموزش زبان انگلیسی - دانشگاه علامه طباطبایی',
    assignedClassIds: ['cls-701', 'cls-801', 'cls-901'],
    assignedSubjectIds: ['sub-english'],
    phone: '۰۹۱۲۱۱۱۰۰۰۴',
    email: 'mehregan@dana-school.ir',
    bio: 'دارنده مدرک CELTA با شیوه تدریس تعاملی و مکالمه‌محور',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-5',
    userId: 'usr-tch-5',
    nationalId: '0078901238',
    firstName: 'استاد مرتضی',
    lastName: 'صادقی',
    specialty: 'عربی و قواعد تخصصی',
    degree: 'کارشناسی ارشد زبان و ادبیات عربی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-arabic'],
    phone: '۰۹۱۲۱۱۱۰۰۰۵',
    email: 'sadeghi@dana-school.ir',
    bio: 'مدرس برجسته روش‌های نوین یادگیری سریع زبان عربی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-6',
    userId: 'usr-tch-6',
    nationalId: '0078901239',
    firstName: 'حجت‌الاسلام دکتر امیر',
    lastName: 'توکلی',
    specialty: 'پیام‌های آسمان و اخلاق',
    degree: 'دکتری فلسفه و کلام اسلامی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-quran'],
    phone: '۰۹۱۲۱۱۱۰۰۰۶',
    email: 'tavakoli@dana-school.ir',
    bio: 'مشاور تربیتی و مدرس دوره‌های بینش اسلامی نوجوانان',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-7',
    userId: 'usr-tch-7',
    nationalId: '0078901240',
    firstName: 'استاد بهروز',
    lastName: 'صالحی',
    specialty: 'مطالعات اجتماعی و تاریخ معاصر',
    degree: 'کارشناسی ارشد تاریخ ایران باستان',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-social'],
    phone: '۰۹۱۲۱۱۱۰۰۰۷',
    email: 'salehi@dana-school.ir',
    bio: 'مستندساز تاریخی و مدرس دوره‌های تبارشناسی فرهنگی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-8',
    userId: 'usr-tch-8',
    nationalId: '0078901241',
    firstName: 'مهندس آرش',
    lastName: 'کیانی',
    specialty: 'کار و فناوری و هوش مصنوعی',
    degree: 'کارشناسی ارشد مهندسی نرم‌افزار - دانشگاه علم و صنعت',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-tech'],
    phone: '۰۹۱۲۱۱۱۰۰۰۸',
    email: 'kiani@dana-school.ir',
    bio: 'مدرس پایتون، رباتیک و پروژه‌های نوآوری دانش‌آموزی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-9',
    userId: 'usr-tch-9',
    nationalId: '0078901242',
    firstName: 'استاد حمید',
    lastName: 'داوودی',
    specialty: 'فرهنگ، هنر و گرافیک',
    degree: 'کارشناسی ارشد هنرهای تجسمی - دانشگاه هنر',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-art'],
    phone: '۰۹۱۲۱۱۱۰۰۰۹',
    email: 'davoodi@dana-school.ir',
    bio: 'داور جشنواره‌های هنری جوانان و استاد خوشنویسی ممتاز',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-10',
    userId: 'usr-tch-10',
    nationalId: '0078901243',
    firstName: 'کاپیتان پژمان',
    lastName: 'کریمی',
    specialty: 'تربیت بدنی و والیبال',
    degree: 'کارشناسی ارشد فیزیولوژی ورزش',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-pe'],
    phone: '۰۹۱۲۱۱۱۰۰۱۰',
    email: 'karimi@dana-school.ir',
    bio: 'مربی رسمی فدراسیون والیبال و قهرمان سابق دانشجویان کشور',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-11',
    userId: 'usr-tch-11',
    nationalId: '0078901244',
    firstName: 'دکتر هادی',
    lastName: 'روشن‌روان',
    specialty: 'تفکر و مهارت‌های زندگی',
    degree: 'دکتری روانشناسی تربیتی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-thinking'],
    phone: '۰۹۱۲۱۱۱۰۰۱۱',
    email: 'roshan@dana-school.ir',
    bio: 'مشاور ارشد تحصیلی و عضو انجمن روانشناسی ایران',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-12',
    userId: 'usr-tch-12',
    nationalId: '0078901245',
    firstName: 'استاد سامان',
    lastName: 'نیک‌نژاد',
    specialty: 'ریاضیات تکمیلی (کلاس‌های ب)',
    degree: 'کارشناسی ارشد ریاضی کاربردی',
    assignedClassIds: ['cls-702', 'cls-802', 'cls-902'],
    assignedSubjectIds: ['sub-math'],
    phone: '۰۹۱۲۱۱۱۰۰۱۲',
    email: 'niknezhad@dana-school.ir',
    bio: 'متخصص یادگیری بازی‌محور و دست‌سازه‌های ریاضی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-13',
    userId: 'usr-tch-13',
    nationalId: '0078901246',
    firstName: 'استاد فرزاد',
    lastName: 'شجاعی',
    specialty: 'ادبیات و متون کهن (کلاس‌های ب)',
    degree: 'کارشناسی ارشد زبان و ادبیات فارسی',
    assignedClassIds: ['cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-persian'],
    phone: '۰۹۱۲۱۱۱۰۰۱۳',
    email: 'shojaei@dana-school.ir',
    bio: 'ویراستار متون علمی و داور مسابقات مشاعره استانی',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-14',
    userId: 'usr-tch-14',
    nationalId: '0078901247',
    firstName: 'مهندس نیما',
    lastName: 'قاسمی',
    specialty: 'زبان انگلیسی تخصصی (کلاس‌های ب)',
    degree: 'کارشناسی مترجمی زبان انگلیسی',
    assignedClassIds: ['cls-702', 'cls-802', 'cls-902'],
    assignedSubjectIds: ['sub-english'],
    phone: '۰۹۱۲۱۱۱۰۰۱۴',
    email: 'ghasemi@dana-school.ir',
    bio: 'مبتکر روش‌های شنیداری یادگیری زبان و کارگاه‌های فیلم و گفتگو',
    isActive: true,
    firstLogin: false,
  },
  {
    id: 'tch-15',
    userId: 'usr-tch-15',
    nationalId: '0078901248',
    firstName: 'مهندس وحید',
    lastName: 'بهرامی',
    specialty: 'شیمی و آزمایشگاه علوم',
    degree: 'کارشناسی ارشد شیمی کاربردی',
    assignedClassIds: ['cls-701', 'cls-702', 'cls-801', 'cls-802', 'cls-901', 'cls-902'],
    assignedSubjectIds: ['sub-science'],
    phone: '۰۹۱۲۱۱۱۰۰۱۵',
    email: 'bahrami@dana-school.ir',
    bio: 'مدیر آزمایشگاه مرکزی مدرسه و مجری پروژه‌های علمی جشنواره جابربن‌حیان و خوارزمی',
    isActive: true,
    firstLogin: false,
  },
];

// Generate 180 realistic Persian student records distributed evenly across the 6 classes (30 students per class)
const FIRST_NAMES = [
  'علی', 'محمد', 'امیرعلی', 'حسین', 'طاها', 'ابوالفضل', 'امیرحسین', 'محمدطه', 'امیرمحمد', 'علی‌رضا',
  'محمدرضا', 'مهدی', 'ایلیا', 'امیررضا', 'امیرمهدی', 'یاسین', 'آرتین', 'آرین', 'پرهام', 'سامان',
  'کیان', 'سانیار', 'دانیال', 'ماهان', 'متین', 'بردیا', 'امیرعباس', 'شایان', 'آرمان', 'سپهر',
  'پویا', 'سروش', 'نوید', 'سینا', 'پارسا', 'نیما', 'مانی', 'بهراد', 'ارشیا', 'کیارش',
  'آرمین', 'شروین', 'فرزام', 'شهریار', 'فرهاد', 'سهراب', 'کوروش', 'داریوش', 'امید', 'پدرام'
];

const LAST_NAMES = [
  'رضایی', 'احمدی', 'کریمی', 'موسوی', 'جعفری', 'صادقی', 'حیدری', 'مرادی', 'محمدی', 'ابراهیمی',
  'حسینی', 'عسگری', 'نوری', 'طاهری', 'میرزایی', 'قاسمی', 'کاظمی', 'رحیمی', 'خسروی', 'عباسی',
  'صالحی', 'محمودی', 'باقری', 'رجبی', 'شریفی', 'فرهادی', 'اکبری', 'نجفی', 'دهقان', 'فلاح',
  'سلیمانی', 'یزدانی', 'مقدم', 'امانی', 'توکلی', 'جمشیدی', 'مظفری', 'شجاعی', 'غفاری', 'وفایی',
  'محرابی', 'نیک‌نژاد', 'خلیلی', 'سعیدی', 'امینی', 'بیات', 'مهرابی', 'افشار', 'نیک‌زاد', 'شمس'
];

const FATHER_NAMES = ['احمد', 'رضا', 'مهدی', 'حسین', 'علی', 'جعفر', 'محمد', 'سعید', 'امیر', 'داوود', 'فرهاد', 'حمید', 'بهزاد', 'سهراب', 'پرویز'];

export function generateInitialStudents(): Student[] {
  const students: Student[] = [];
  let studentIdx = 1;

  INITIAL_CLASSES.forEach((cls) => {
    for (let i = 1; i <= 30; i++) {
      const fName = FIRST_NAMES[(studentIdx * 7) % FIRST_NAMES.length];
      const lName = LAST_NAMES[(studentIdx * 11) % LAST_NAMES.length];
      const father = FATHER_NAMES[(studentIdx * 3) % FATHER_NAMES.length];
      
      // Set the first demo student to 1111111111 for demo testing, others keep unique sequence
      const nationalId = studentIdx === 1 ? '1111111111' : `008${studentIdx.toString().padStart(7, '0')}`;
      const studentCode = `ST-${cls.gradeLevel === 'هفتم' ? '70' : cls.gradeLevel === 'هشتم' ? '80' : '90'}${i.toString().padStart(2, '0')}`;
      const studentId = `std-${studentIdx}`;

      students.push({
        id: studentId,
        userId: `usr-std-${studentIdx}`,
        nationalId,
        firstName: studentIdx === 1 ? 'علی (دانش‌آموز دمو)' : fName,
        lastName: studentIdx === 1 ? 'رضایی' : lName,
        fatherName: father,
        birthDate: `۱۳۸۹/۰${(studentIdx % 9) + 1}/۱۵`,
        classId: cls.id,
        className: cls.name,
        gradeLevel: cls.gradeLevel,
        fieldOfStudy: cls.fieldOfStudy,
        studentCode,
        address: `تهران، خیابان ولیعصر، کوچه ${studentIdx + 1}، پلاک ${studentIdx * 2}`,
        parentPhone: `۰۹۱۲${(2000000 + studentIdx).toString()}`,
        isActive: true,
        firstLogin: false,
        disciplineScore: 20 - (studentIdx % 3 === 0 ? 0.5 : 0),
      });

      cls.studentIds.push(studentId);
      studentIdx++;
    }
  });

  return students;
}

export const INITIAL_STUDENTS = generateInitialStudents();

// Generate initial sample grades for students
export function generateInitialGrades(): Grade[] {
  const grades: Grade[] = [];
  let gradeId = 1;

  // We seed comprehensive grades for students in class 701, 801, 901 and general grades for others
  INITIAL_STUDENTS.slice(0, 30).forEach((student) => {
    INITIAL_SUBJECTS.forEach((subject) => {
      // October (مهر) grades
      grades.push({
        id: `grd-${gradeId++}`,
        studentId: student.id,
        teacherId: 'tch-1',
        subjectId: subject.id,
        classId: student.classId,
        score: Math.min(20, Math.max(14, 17.5 + ((student.id.charCodeAt(4) + subject.id.charCodeAt(4)) % 5) - 1.5)),
        maxScore: 20,
        gradeType: 'quiz',
        date: '۱۴۰۴/۰۷/۲۵',
        month: 'مهر',
        semester: 'semester1',
        academicYearId: 'ay-1404-1405',
        description: 'آزمونک اول ماه مهر و ارزیابی تشخیصی',
        createdAt: '۱۴۰۴/۰۷/۲۵',
      });

      // November (آبان) continuous / homework grade
      grades.push({
        id: `grd-${gradeId++}`,
        studentId: student.id,
        teacherId: 'tch-2',
        subjectId: subject.id,
        classId: student.classId,
        score: Math.min(20, Math.max(15, 18 + ((student.id.charCodeAt(5) + subject.id.charCodeAt(5)) % 4) - 1)),
        maxScore: 20,
        gradeType: 'homework',
        date: '۱۴۰۴/۰۸/۱۸',
        month: 'آبان',
        semester: 'semester1',
        academicYearId: 'ay-1404-1405',
        description: 'تکالیف دوره‌ای و فعالیت پژوهشی',
        createdAt: '۱۴۰۴/۰۸/۱۸',
      });

      // Midterm (میان‌ترم آذر)
      grades.push({
        id: `grd-${gradeId++}`,
        studentId: student.id,
        teacherId: 'tch-1',
        subjectId: subject.id,
        classId: student.classId,
        score: Math.min(20, Math.max(13.5, 18.5 + ((student.id.charCodeAt(4) * 3) % 4) - 1.5)),
        maxScore: 20,
        gradeType: 'midterm',
        date: '۱۴۰۴/۰۹/۱۰',
        month: 'آذر',
        semester: 'semester1',
        academicYearId: 'ay-1404-1405',
        description: 'آزمون میان‌ترم هماهنگ نوبت اول',
        createdAt: '۱۴۰۴/۰۹/۱۰',
      });
    });
  });

  return grades;
}

export const INITIAL_GRADES = generateInitialGrades();

// Attendance records
export function generateInitialAttendance(): AttendanceRecord[] {
  const records: AttendanceRecord[] = [];
  let attId = 1;
  const dates = ['۱۴۰۴/۰۸/۲۰', '۱۴۰۴/۰۸/۲۱', '۱۴۰۴/۰۸/۲۲', '۱۴۰۴/۰۸/۲۵', '۱۴۰۴/۰۸/۲۶'];

  dates.forEach((date) => {
    INITIAL_STUDENTS.slice(0, 30).forEach((student, idx) => {
      let status: 'present' | 'absent' | 'excused' | 'late' = 'present';
      if ((idx + date.length) % 17 === 0) status = 'late';
      else if ((idx + date.length) % 23 === 0) status = 'excused';

      records.push({
        id: `att-${attId++}`,
        date,
        classId: student.classId,
        studentId: student.id,
        status,
        note: status === 'late' ? '۱۰ دقیقه تأخیر به دلیل ترافیک' : status === 'excused' ? 'گواهی پزشکی ارائه شد' : undefined,
        recordedByTeacherId: 'tch-1',
        createdAt: date,
      });
    });
  });

  return records;
}

export const INITIAL_ATTENDANCE = generateInitialAttendance();

export const INITIAL_HOMEWORKS: Homework[] = [
  {
    id: 'hw-1',
    title: 'حل تمارین فصل دوم ریاضیات (جبر و معادله)',
    description: 'تمارین صفحات ۳۴ تا ۳۸ کتاب درسی در دفتر حل شده و همراه با استدلال خط‌به‌خط آورده شود.',
    subjectId: 'sub-math',
    classId: 'cls-701',
    teacherId: 'tch-1',
    dueDate: '۱۴۰۴/۰۸/۳۰',
    createdAt: '۱۴۰۴/۰۸/۲۴',
    attachmentName: 'تمرینات_تکمیلی_جبر.pdf',
    status: 'active',
  },
  {
    id: 'hw-2',
    title: 'گزارش آزمایشگاه فیزیک: اندازه‌گیری چگالی اجسام جامد',
    description: 'نگارش گزارش کامل آزمایش روز سه‌شنبه به همراه جدول داده‌ها و خطای اندازه‌گیری در قالب فرمت استاندارد.',
    subjectId: 'sub-science',
    classId: 'cls-701',
    teacherId: 'tch-2',
    dueDate: '۱۴۰۴/۰۹/۰۲',
    createdAt: '۱۴۰۴/۰۸/۲۵',
    attachmentName: 'دستورکار_آزمایشگاه.pdf',
    status: 'active',
  },
  {
    id: 'hw-3',
    title: 'انشا و نگارش خلاق: توصیف یک روز بارانی پاییزی',
    description: 'نگارش متنی توصیفی حداقل در ۲ صفحه با رعایت آرایه‌های تشبیه، جان‌بخشی و حس‌آمیزی.',
    subjectId: 'sub-persian',
    classId: 'cls-701',
    teacherId: 'tch-3',
    dueDate: '۱۴۰۴/۰۹/۰۵',
    createdAt: '۱۴۰۴/۰۸/۲۶',
    status: 'active',
  },
  {
    id: 'hw-4',
    title: 'تمرین مکالمه انگلیسی Unit 3: Daily Routines',
    description: 'پاسخ به سوالات Workbook صفحه ۲۲ و آماده‌سازی فایل صوتی ۱ دقیقه‌ای درباره فعالیت‌های روزمره.',
    subjectId: 'sub-english',
    classId: 'cls-801',
    teacherId: 'tch-4',
    dueDate: '۱۴۰۴/۰۹/۰۱',
    createdAt: '۱۴۰۴/۰۸/۲۳',
    attachmentName: 'audio_guide.mp3',
    status: 'active',
  },
  {
    id: 'hw-5',
    title: 'تمرین برنامه‌نویسی پایتون: ساخت بازی حدس عدد',
    description: 'کدنویسی برنامه حدس عدد با استفاده از حلقه while و کتابخانه random به همراه مستندات خطی.',
    subjectId: 'sub-tech',
    classId: 'cls-901',
    teacherId: 'tch-8',
    dueDate: '۱۴۰۴/۰۹/۰۷',
    createdAt: '۱۴۰۴/۰۸/۲۵',
    attachmentName: 'guess_game_starter.py',
    status: 'active',
  },
];

export const INITIAL_SUBMISSIONS: HomeworkSubmission[] = [
  {
    id: 'sub-1',
    homeworkId: 'hw-1',
    studentId: 'std-1',
    submittedAt: '۱۴۰۴/۰۸/۲۷',
    answerText: 'استاد گرامی، تمامی مسائل ۵ گانه به دقت تحلیل و در قالب فایل دست‌نویس ارسال شد.',
    fileName: 'پاسخ_تمرینات_جبر_علی_رضایی.pdf',
    grade: 20,
    feedback: 'بسیار دقیق و با رسم نمودارهای دقیق، آفرین.',
    status: 'graded',
  },
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'anc-1',
    title: 'برگزاری جلسه اولیا و مربیان و تحویل کارنامه‌های ماه آبان',
    content: 'به اطلاع کلیه اولیای گرامی می‌رساند، مجمع عمومی اولیا و مربیان به همراه دیدار چهره‌به‌چهره با دبیران محترم در روز پنجشنبه مورخ ۵ آذرماه از ساعت ۹ الی ۱۲ در سالن همایش‌های مدرسه برگزار خواهد شد.',
    authorName: 'دکتر محمدرضا صادقی (مدیر مدرسه)',
    authorRole: 'مدیریت',
    target: 'all',
    priority: 'high',
    expiryDate: '۱۴۰۴/۰۹/۱۰',
    createdAt: '۱۴۰۴/۰۸/۲۵',
    attachmentName: 'جدول_زمانبندی_دیدار_اولیا.pdf',
    readByUserIds: ['usr-std-1'],
  },
  {
    id: 'anc-2',
    title: 'ثبت‌نام مرحله اول المپیادهای علمی دانش‌آموزی کشوری',
    content: 'دانش‌آموزان علاقه‌مند به شرکت در المپیادهای ریاضی، کامپیوتر، فیزیک، شیمی و نجوم می‌توانند تا پایان هفته با مراجعه به واحد پژوهش و فناوری نسبت به ثبت‌نام نهایی اقدام فرمایند.',
    authorName: 'مهندس کیانی (مسئول پژوهش)',
    authorRole: 'معاونت آموزشی',
    target: 'students',
    priority: 'normal',
    expiryDate: '۱۴۰۴/۰۹/۱۵',
    createdAt: '۱۴۰۴/۰۸/۲۲',
    readByUserIds: ['usr-std-1'],
  },
  {
    id: 'anc-3',
    title: 'شورای معلمان و هماهنگی آزمون‌های نوبت اول',
    content: 'جلسه شورای دبیران جهت تصویب بارم‌بندی و جدول زمان‌بندی امتحانات دی‌ماه روز دوشنبه ساعت ۱۵:۳۰ در اتاق کنفرانس برگزار می‌شود.',
    authorName: 'مدیریت مجتمع آموزشی',
    authorRole: 'مدیریت',
    target: 'teachers',
    priority: 'urgent',
    expiryDate: '۱۴۰۴/۰۹/۰۳',
    createdAt: '۱۴۰۴/۰۸/۲۶',
    readByUserIds: [],
  },
  {
    id: 'anc-4',
    title: 'مسابقات ورزشی بین‌کلاسی جام شهدای دانش‌آموز',
    content: 'مسابقات فوتسال و تنیس روی میز بین پایه‌های هفتم، هشتم و نهم از روز شنبه آینده در سالن ورزشی سرپوشیده آغاز خواهد شد.',
    authorName: 'کاپیتان کریمی (سرپرست تربیت بدنی)',
    authorRole: 'معاونت پرورشی',
    target: 'students',
    priority: 'low',
    expiryDate: '۱۴۰۴/۰۹/۲۰',
    createdAt: '۱۴۰۴/۰۸/۲۴',
    readByUserIds: [],
  },
];

export const INITIAL_TEACHER_NOTES: TeacherNote[] = [
  {
    id: 'note-1',
    studentId: 'std-1',
    teacherId: 'tch-1',
    teacherName: 'استاد علیرضا رضوانی',
    subjectId: 'sub-math',
    subjectName: 'ریاضیات تخصصی',
    category: 'academic',
    content: 'استعداد فوق‌العاده در تحلیل مسائل هندسی و تفکر استدلالی. آمادگی بالایی برای المپیاد ریاضی دارد.',
    date: '۱۴۰۴/۰۸/۲۰',
    isPrivateToAdmin: false,
    createdAt: '۱۴۰۴/۰۸/۲۰',
  },
  {
    id: 'note-2',
    studentId: 'std-1',
    teacherId: 'tch-2',
    teacherName: 'دکتر مهدی حسینی‌فر',
    subjectId: 'sub-science',
    subjectName: 'علوم تجربی',
    category: 'strength',
    content: 'مشارکت فعال و پیگیر در آزمایشگاه فیزیک و انجام کارهای گروهی با مسئولیت‌پذیری بالا.',
    date: '۱۴۰۴/۰۸/۲۲',
    isPrivateToAdmin: false,
    createdAt: '۱۴۰۴/۰۸/۲۲',
  },
  {
    id: 'note-3',
    studentId: 'std-1',
    teacherId: 'tch-11',
    teacherName: 'دکتر هادی روشن‌روان',
    category: 'behavior',
    content: 'اخلاق ستودنی، رعایت نظم کلاسی و رفتار احترام‌آمیز با سایر همکلاسی‌ها.',
    date: '۱۴۰۴/۰۸/۱۵',
    isPrivateToAdmin: false,
    createdAt: '۱۴۰۴/۰۸/۱۵',
  },
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'log-1',
    userId: 'usr-admin-1',
    userName: 'دکتر محمدرضا صادقی',
    userRole: 'admin',
    action: 'تنظیم سال تحصیلی جاری',
    targetType: 'academicYear',
    targetId: 'ay-1404-1405',
    details: 'فعال‌سازی سال تحصیلی ۱۴۰۴–۱۴۰۵ به عنوان دوره آموزشی فعال سیستم',
    timestamp: '۱۴۰۴/۰۷/۰۱ - ۰۸:۳۰',
  },
  {
    id: 'log-2',
    userId: 'usr-admin-1',
    userName: 'دکتر محمدرضا صادقی',
    userRole: 'admin',
    action: 'ورود گروهی دانش‌آموزان',
    targetType: 'student',
    targetId: 'batch-180',
    details: 'بارگذاری ۱۸۰ پرونده تحصیلی دانش‌آموزان پایه‌های هفتم، هشتم و نهم از طریق فایل اکسل',
    timestamp: '۱۴۰۴/۰۷/۰۳ - ۱۰:۱۵',
  },
  {
    id: 'log-3',
    userId: 'usr-tch-1',
    userName: 'استاد علیرضا رضوانی',
    userRole: 'teacher',
    action: 'ثبت نمرات آزمونک مهرماه',
    targetType: 'grade',
    targetId: 'cls-701',
    details: 'ثبت نمرات درس ریاضیات برای ۳۰ دانش‌آموز کلاس ۱۰۱',
    timestamp: '۱۴۰۴/۰۷/۲۵ - ۱۶:۴۰',
  },
  {
    id: 'log-4',
    userId: 'usr-admin-1',
    userName: 'دکتر محمدرضا صادقی',
    userRole: 'admin',
    action: 'صدور کارنامه‌های ماه آبان',
    targetType: 'report',
    targetId: 'rep-cls-701-aban',
    details: 'محاسبه خودکار معدل‌ها و انتشار کارنامه تحصیلی ماه آبان برای پایه هفتم',
    timestamp: '۱۴۰۴/۰۸/۲۶ - ۱۱:۰۰',
  },
];

// Initial pre-generated report card for student 1 (Ali Rezaei) for Aban month
export const INITIAL_REPORT_CARDS: ReportCard[] = [
  {
    id: 'rep-std-1-aban',
    studentId: 'std-1',
    studentName: 'علی رضایی',
    studentCode: 'ST-7001',
    nationalId: '0080000001',
    classId: 'cls-701',
    className: 'کلاس ۱۰۱ (پایه هفتم - الف)',
    gradeLevel: 'پایه هفتم',
    fieldOfStudy: 'دوره اول متوسطه',
    academicYearId: 'ay-1404-1405',
    academicYearName: 'سال تحصیلی ۱۴۰۴–۱۴۰۵',
    type: 'monthly',
    monthName: 'آبان',
    gpa: 19.42,
    totalUnits: 23,
    totalWeightedScore: 446.66,
    rankInClass: 1,
    totalStudentsInClass: 30,
    disciplineScore: 20,
    attendancePresentCount: 22,
    attendanceAbsentCount: 0,
    attendanceLateCount: 0,
    status: 'published',
    generatedAt: '۱۴۰۴/۰۸/۲۶',
    teacherRemarks: 'دانش‌آموز بسیار کوشا، با استعداد و با انضباط عالی. روند پیشرفت در تمامی دروس بسیار رضایت‌بخش است.',
    principalApproval: true,
    items: [
      { subjectId: 'sub-math', subjectName: 'ریاضیات تخصصی', coefficient: 4, score: 20, teacherName: 'استاد رضوانی', classAverage: 16.8, highestGrade: 20, lowestGrade: 12, status: 'passed', description: 'تسلط کامل بر مباحث جبری' },
      { subjectId: 'sub-science', subjectName: 'علوم تجربی', coefficient: 4, score: 19.5, teacherName: 'دکتر حسینی‌فر', classAverage: 17.1, highestGrade: 20, lowestGrade: 13, status: 'passed', description: 'دقت بالا در گزارش‌های آزمایشگاهی' },
      { subjectId: 'sub-persian', subjectName: 'ادبیات و نگارش فارسی', coefficient: 3, score: 19.0, teacherName: 'استاد افشار', classAverage: 16.5, highestGrade: 19.5, lowestGrade: 14, status: 'passed', description: 'نگارش زیبا و روان' },
      { subjectId: 'sub-english', subjectName: 'زبان انگلیسی', coefficient: 2, score: 20, teacherName: 'مهندس مهرگان', classAverage: 17.5, highestGrade: 20, lowestGrade: 11, status: 'passed', description: 'مکالمه عالی' },
      { subjectId: 'sub-arabic', subjectName: 'زبان و ادبیات عربی', coefficient: 2, score: 19.25, teacherName: 'استاد صادقی', classAverage: 16.0, highestGrade: 19.5, lowestGrade: 10, status: 'passed', description: 'تسلط بر قواعد' },
      { subjectId: 'sub-quran', subjectName: 'پیام‌های آسمان و قرآن', coefficient: 2, score: 20, teacherName: 'حجت‌الاسلام توکلی', classAverage: 18.2, highestGrade: 20, lowestGrade: 15, status: 'passed', description: 'قرائت صحیح و التزام عملی' },
      { subjectId: 'sub-social', subjectName: 'مطالعات اجتماعی', coefficient: 2, score: 19.0, teacherName: 'استاد صالحی', classAverage: 16.9, highestGrade: 19.5, lowestGrade: 12, status: 'passed', description: 'تحلیل دقیق رویدادهای تاریخی' },
      { subjectId: 'sub-tech', subjectName: 'کار و فناوری', coefficient: 2, score: 20, teacherName: 'مهندس کیانی', classAverage: 18.0, highestGrade: 20, lowestGrade: 14, status: 'passed', description: 'پروژه‌های خلاقانه الگوریتم' },
      { subjectId: 'sub-art', subjectName: 'فرهنگ و هنر', coefficient: 1, score: 19.0, teacherName: 'استاد داوودی', classAverage: 17.8, highestGrade: 20, lowestGrade: 14, status: 'passed', description: 'خوشنویسی تحسین‌برانگیز' },
      { subjectId: 'sub-pe', subjectName: 'تربیت بدنی و سلامت', coefficient: 1, score: 20, teacherName: 'کاپیتان کریمی', classAverage: 18.5, highestGrade: 20, lowestGrade: 15, status: 'passed', description: 'آمادگی جسمانی عالی' },
    ],
  },
  {
    id: 'rep-std-1-mehr',
    studentId: 'std-1',
    studentName: 'علی رضایی',
    studentCode: 'ST-7001',
    nationalId: '0080000001',
    classId: 'cls-701',
    className: 'کلاس ۱۰۱ (پایه هفتم - الف)',
    gradeLevel: 'پایه هفتم',
    fieldOfStudy: 'دوره اول متوسطه',
    academicYearId: 'ay-1404-1405',
    academicYearName: 'سال تحصیلی ۱۴۰۴–۱۴۰۵',
    type: 'monthly',
    monthName: 'مهر',
    gpa: 19.18,
    totalUnits: 23,
    totalWeightedScore: 441.14,
    rankInClass: 1,
    totalStudentsInClass: 30,
    disciplineScore: 20,
    attendancePresentCount: 20,
    attendanceAbsentCount: 0,
    attendanceLateCount: 0,
    status: 'published',
    generatedAt: '۱۴۰۴/۰۷/۳۰',
    teacherRemarks: 'شروع بسیار پرقدرت در آغاز سال تحصیلی جدید.',
    principalApproval: true,
    items: [
      { subjectId: 'sub-math', subjectName: 'ریاضیات تخصصی', coefficient: 4, score: 19.5, teacherName: 'استاد رضوانی', classAverage: 16.2, highestGrade: 20, lowestGrade: 11, status: 'passed' },
      { subjectId: 'sub-science', subjectName: 'علوم تجربی', coefficient: 4, score: 19.0, teacherName: 'دکتر حسینی‌فر', classAverage: 16.8, highestGrade: 19.5, lowestGrade: 12, status: 'passed' },
      { subjectId: 'sub-persian', subjectName: 'ادبیات و نگارش فارسی', coefficient: 3, score: 19.0, teacherName: 'استاد افشار', classAverage: 16.0, highestGrade: 19.0, lowestGrade: 13, status: 'passed' },
      { subjectId: 'sub-english', subjectName: 'زبان انگلیسی', coefficient: 2, score: 20, teacherName: 'مهندس مهرگان', classAverage: 17.0, highestGrade: 20, lowestGrade: 10, status: 'passed' },
      { subjectId: 'sub-arabic', subjectName: 'زبان و ادبیات عربی', coefficient: 2, score: 18.5, teacherName: 'استاد صادقی', classAverage: 15.8, highestGrade: 19.0, lowestGrade: 9, status: 'passed' },
      { subjectId: 'sub-quran', subjectName: 'پیام‌های آسمان و قرآن', coefficient: 2, score: 20, teacherName: 'حجت‌الاسلام توکلی', classAverage: 18.0, highestGrade: 20, lowestGrade: 14, status: 'passed' },
      { subjectId: 'sub-social', subjectName: 'مطالعات اجتماعی', coefficient: 2, score: 19.0, teacherName: 'استاد صالحی', classAverage: 16.5, highestGrade: 19.5, lowestGrade: 12, status: 'passed' },
      { subjectId: 'sub-tech', subjectName: 'کار و فناوری', coefficient: 2, score: 19.5, teacherName: 'مهندس کیانی', classAverage: 17.5, highestGrade: 20, lowestGrade: 13, status: 'passed' },
      { subjectId: 'sub-art', subjectName: 'فرهنگ و هنر', coefficient: 1, score: 18.5, teacherName: 'استاد داوودی', classAverage: 17.0, highestGrade: 19.5, lowestGrade: 14, status: 'passed' },
      { subjectId: 'sub-pe', subjectName: 'تربیت بدنی و سلامت', coefficient: 1, score: 20, teacherName: 'کاپیتان کریمی', classAverage: 18.0, highestGrade: 20, lowestGrade: 15, status: 'passed' },
    ],
  },
];

export const INITIAL_ADMIN_USER: User = {
  id: 'usr-admin-1',
  nationalId: '3333333333',
  firstName: 'دکتر محمدرضا (مدیر دمو)',
  lastName: 'صادقی',
  role: 'admin',
  email: 'principal@dana-school.ir',
  phone: '۰۹۱۲۰۰۰۰۰۹۹',
  isActive: true,
  firstLogin: false,
  createdAt: '۱۴۰۴/۰۱/۰۱',
};

export const INITIAL_SCHOOL_CONFIG: SchoolConfig = {
  schoolName: 'مجتمع آموزشی و دبیرستان نمونه دانا',
  managerName: 'دکتر محمد رضایی',
  district: 'منطقه ۶ آموزش و پرورش',
  province: 'تهران',
  academicYear: '۱۴۰۴–۱۴۰۵',
  phone: '۰۲۱-۸۸۹۹۰۰۱۱',
  address: 'تهران، خیابان ولیعصر، نرسیده به میدان ونک، مجتمع آموزشی دانا',
  passGrade: 10,
};
