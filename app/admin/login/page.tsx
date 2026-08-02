'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Forgot Password States
  const [showForgot, setShowForgot] = useState(false);
  const [forgotStep, setForgotStep] = useState<1 | 2>(1); // 1: Send OTP, 2: Enter OTP & New Password
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const router = useRouter();

  // ১. লগইন হ্যান্ডলার
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('ইমেইল বা পাসওয়ার্ড ভুল হয়েছে!');
      setLoading(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  // ২. ইমেইলে ৬ সংখ্যার OTP কোড পাঠানো
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    if (!email) {
      setErrorMsg('অনুগ্রহ করে আপনার ইমেইলটি লিখুন!');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setErrorMsg(error.message || 'কোড পাঠাতে ব্যর্থ হয়েছে!');
    } else {
      setSuccessMsg('আপনার ইমেইলে ৬ সংখ্যার ভেরিফিকেশন কোড পাঠানো হয়েছে!');
      setForgotStep(2);
    }
    setLoading(false);
  };

  // ৩. ৬ সংখ্যার OTP কোড ভেরিফাই ও নতুন পাসওয়ার্ড সেট
  const handleVerifyOTPAndReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    // OTP চেক
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: otpCode,
      type: 'recovery',
    });

    if (verifyError) {
      setErrorMsg('ভুল বা মেয়াদোত্তীর্ণ ভেরিফিকেশন কোড!');
      setLoading(false);
      return;
    }

    // নতুন পাসওয়ার্ড সেট
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      setErrorMsg('পাসওয়ার্ড আপডেট করতে সমস্যা হয়েছে!');
    } else {
      setSuccessMsg('পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে! এখন নতুন পাসওয়ার্ড দিয়ে লগইন করুন।');
      setShowForgot(false);
      setForgotStep(1);
      setOtpCode('');
      setNewPassword('');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login 🔐
        </h2>

        {errorMsg && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {successMsg}
          </div>
        )}

        {!showForgot ? (
          /* --- সাধারণ লগইন ফর্ম --- */
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                placeholder="samimjoy222@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? 'লগইন হচ্ছে...' : 'Login'}
            </button>

            {/* --- হালকা রেড কালার এর অপশন বক্স --- */}
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <span className="text-xs text-red-500 block mb-1">
                পাসওয়ার্ড মনে নেই?
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowForgot(true);
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className="text-sm font-semibold text-red-600 hover:text-red-800 underline transition cursor-pointer"
              >
                Forgot Password? (কোড দিয়ে রিকোভার করুন)
              </button>
            </div>
          </form>
        ) : (
          /* --- পাসওয়ার্ড রিকোভারি ফর্ম --- */
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-base font-semibold text-red-700 mb-2 text-center">
                🔑 Password Recovery
              </h3>

              {forgotStep === 1 ? (
                /* ধাপ ১: ইমেইল পাঠাবো */
                <form onSubmit={handleSendOTP} className="space-y-3">
                  <p className="text-xs text-gray-600 text-center">
                    আপনার ইমেইলে <b>৬ সংখ্যার কোড</b> পাঠানো হবে।
                  </p>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-1.5 border rounded focus:outline-none text-black text-sm"
                      placeholder="samimjoy222@gmail.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 rounded text-sm transition"
                  >
                    {loading ? 'পাঠানো হচ্ছে...' : 'Send 6-Digit Code'}
                  </button>
                </form>
              ) : (
                /* ধাপ ২: OTP ও নতুন পাসওয়ার্ড ইনপুট */
                <form onSubmit={handleVerifyOTPAndReset} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      ৬ সংখ্যার ভেরিফিকেশন কোড (OTP)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-full px-3 py-1.5 border rounded focus:outline-none text-black text-sm text-center font-mono tracking-widest text-lg"
                      placeholder="123456"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      নতুন পাসওয়ার্ড
                    </label>
                    <input
                      type="password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 py-1.5 border rounded focus:outline-none text-black text-sm"
                      placeholder="নতুন পাসওয়ার্ড লিখুন"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 rounded text-sm transition"
                  >
                    {loading ? 'পাসওয়ার্ড পরিবর্তন হচ্ছে...' : 'Change Password'}
                  </button>
                </form>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setShowForgot(false);
                setForgotStep(1);
                setErrorMsg('');
                setSuccessMsg('');
              }}
              className="w-full text-xs text-gray-500 hover:text-gray-800 underline text-center block cursor-pointer"
            >
              ← ব্যাক টু লগইন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}