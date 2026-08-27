import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';
import {
  X,
  GraduationCap,
  Briefcase,
  Shield,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { toPersianDigits } from '../../utils/persian';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole;
  onSuccess?: (requiresPasswordChange?: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'student',
  onSuccess,
}) => {
  const { login } = useAuth();

  const [activeTab, setActiveTab] = useState<UserRole>(initialRole);
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialRole && initialRole !== 'guest') {
        setActiveTab(initialRole);
      }
      setErrorMsg(null);
    }
  }, [isOpen, initialRole]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!nationalId.trim()) {
      setErrorMsg('لطفاً کد ملی را وارد نمایید.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('لطفاً کلمه عبور را وارد نمایید.');
      return;
    }

    try {
      setLoading(true);
      const res = await login(nationalId, password, activeTab);
      if (res.success) {
        onSuccess?.(res.requiresPasswordChange);
        onClose();
      } else {
        setErrorMsg(res.error || 'اطلاعات ورود نادرست است.');
      }
    } catch {
      setErrorMsg('خطایی در برقراری ارتباط با سرور رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickFill = async (nId: string, pass: string, role: UserRole) => {
    setActiveTab(role);
    setNationalId(nId);
    setPassword(pass);
    setErrorMsg(null);
    try {
      setLoading(true);
      const res = await login(nId, pass, role);
      if (res.success) {
        onSuccess?.(res.requiresPasswordChange);
        onClose();
      } else {
        setErrorMsg(res.error || 'اطلاعات ورود نادرست است.');
      }
    } catch {
      setErrorMsg('خطایی رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-right animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-3 shadow-inner">
            {activeTab === 'student' ? (
              <GraduationCap className="w-7 h-7" />
            ) : activeTab === 'teacher' ? (
              <Briefcase className="w-7 h-7" />
            ) : (
              <Shield className="w-7 h-7" />
            )}
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
            ورود به سامانه هوشمند دانا
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            لطفاً مشخصات حساب کاربری خود را وارد فرمایید
          </p>
        </div>

        {/* Role Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab('student');
              setErrorMsg(null);
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'student'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            دانش‌آموز
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('teacher');
              setErrorMsg(null);
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'teacher'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            دبیران
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('admin');
              setErrorMsg(null);
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            مدیریت
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {activeTab === 'admin' ? 'نام کاربری / کد ملی مدیر' : 'کد ملی (۱۰ رقم)'}
            </label>
            <input
              type="text"
              dir="ltr"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              placeholder={activeTab === 'admin' ? '0010020030 یا admin' : 'مثال: 0080000001'}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono text-left transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                کلمه عبور
              </label>
              <span className="text-[11px] text-slate-400">
                (پیش‌فرض: همان کد ملی)
              </span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono text-left transition-all pl-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] transition-all shadow-md shadow-indigo-600/25 cursor-pointer disabled:opacity-50 mt-2"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>ورود به حساب</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Test Demo Helpers */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            حساب‌های آزمایشی دمو (تست سریع با یک کلیک):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            <button
              type="button"
              onClick={() => handleQuickFill('1111111111', '1111111111', 'student')}
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-all text-center cursor-pointer shadow-xs"
            >
              🎓 دانش‌آموز (۱۱۱۱۱۱۱۱۱۱)
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('2222222222', '2222222222', 'teacher')}
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 transition-all text-center cursor-pointer shadow-xs"
            >
              👨‍🏫 دبیر (۲۲۲۲۲۲۲۲۲۲)
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('3333333333', '3333333333', 'admin')}
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 transition-all text-center cursor-pointer shadow-xs"
            >
              👤 مدیر (۳۳۳۳۳۳۳۳۳۳)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
