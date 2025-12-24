'use client';

import React, { useState } from 'react';
import { User, Mail, Calendar, CreditCard, Bell, Trash2, GraduationCap, Target, CheckSquare, ChevronLeft, Save, Lock, AlertTriangle } from 'lucide-react';
import { mockUser } from '../services/mockData';

type ProfileView = 'MAIN' | 'EDIT' | 'PASSWORD' | 'DELETE';

export const Profile: React.FC = () => {
  const [view, setView] = useState<ProfileView>('MAIN');
  const [user, setUser] = useState(mockUser);
  const [tempUser, setTempUser] = useState(mockUser);

  // Password state
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const learningPurposeOptions = [
    '大学の授業要件',
    '留学',
    '就職活動',
    '趣味/英語力向上'
  ];

  // Handlers
  const handleEditClick = () => {
    setTempUser(user);
    setView('EDIT');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(tempUser);
    setView('MAIN');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setView('MAIN');
    setPasswordForm({ current: '', new: '', confirm: '' });
    alert('パスワードを変更しました');
  };

  const handleDeleteAccount = () => {
    // Simulate API call
    alert('退会申請を受け付けました。ご利用ありがとうございました。');
    // In a real app, this would redirect to logout or landing page
    window.location.reload();
  };

  const togglePurpose = (purpose: string) => {
    const current = tempUser.learningPurposes;
    if (current.includes(purpose)) {
      setTempUser({ ...tempUser, learningPurposes: current.filter(p => p !== purpose) });
    } else {
      setTempUser({ ...tempUser, learningPurposes: [...current, purpose] });
    }
  };

  // --- RENDER SUB-VIEWS ---

  if (view === 'EDIT') {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <button onClick={() => setView('MAIN')} className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ChevronLeft size={16} className="mr-1" /> プロフィールに戻る
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              プロフィール編集
            </h3>
          </div>

          <form onSubmit={handleSaveProfile} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">氏名</label>
                <input
                  type="text"
                  value={tempUser.name}
                  onChange={e => setTempUser({...tempUser, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input
                  type="email"
                  value={tempUser.email}
                  onChange={e => setTempUser({...tempUser, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">生年月日</label>
                <input
                  type="date"
                  value={tempUser.birthDate}
                  onChange={e => setTempUser({...tempUser, birthDate: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
               <h4 className="text-sm font-bold text-gray-900 mb-4">所属・目標</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">大学名</label>
                    <input
                      type="text"
                      value={tempUser.university || ''}
                      onChange={e => setTempUser({...tempUser, university: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">学部・学科</label>
                    <input
                      type="text"
                      value={tempUser.department || ''}
                      onChange={e => setTempUser({...tempUser, department: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">TOEFL ITP 目標スコア</label>
                    <input
                      type="number"
                      value={tempUser.targetScore}
                      onChange={e => setTempUser({...tempUser, targetScore: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
               <h4 className="text-sm font-bold text-gray-900 mb-4">外部試験スコア（任意）</h4>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">TOEFL ITP</label>
                    <input
                      type="number"
                      value={tempUser.externalScores.toeflItp || ''}
                      onChange={e => setTempUser({...tempUser, externalScores: {...tempUser.externalScores, toeflItp: parseInt(e.target.value)}})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">TOEFL iBT</label>
                    <input
                      type="number"
                      value={tempUser.externalScores.toeflIbt || ''}
                      onChange={e => setTempUser({...tempUser, externalScores: {...tempUser.externalScores, toeflIbt: parseInt(e.target.value)}})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">TOEIC</label>
                    <input
                      type="number"
                      value={tempUser.externalScores.toeic || ''}
                      onChange={e => setTempUser({...tempUser, externalScores: {...tempUser.externalScores, toeic: parseInt(e.target.value)}})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">IELTS</label>
                    <input
                      type="number"
                      value={tempUser.externalScores.ielts || ''}
                      onChange={e => setTempUser({...tempUser, externalScores: {...tempUser.externalScores, ielts: parseInt(e.target.value)}})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                    />
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
               <h4 className="text-sm font-bold text-gray-900 mb-4">学習目的</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {learningPurposeOptions.map(purpose => (
                    <label key={purpose} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempUser.learningPurposes.includes(purpose)}
                        onChange={() => togglePurpose(purpose)}
                        className="h-4 w-4 text-brand-500 rounded border-gray-300 focus:ring-brand-500"
                      />
                      <span className="text-sm text-gray-700">{purpose}</span>
                    </label>
                  ))}
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setView('MAIN')}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                保存する
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (view === 'PASSWORD') {
    return (
      <div className="max-w-md mx-auto animate-fade-in">
        <button onClick={() => setView('MAIN')} className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ChevronLeft size={16} className="mr-1" /> 設定に戻る
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-gray-500" />
              パスワード変更
            </h3>
          </div>
          <form onSubmit={handleChangePassword} className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">現在のパスワード</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">新しいパスワード</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">新しいパスワード（確認）</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors"
            >
              パスワードを更新する
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (view === 'DELETE') {
    return (
      <div className="max-w-xl mx-auto animate-fade-in mt-10">
        <button onClick={() => setView('MAIN')} className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ChevronLeft size={16} className="mr-1" /> 設定に戻る
        </button>

        <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
           <div className="bg-red-50 p-6 border-b border-red-100 flex items-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                 <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700">退会・データ削除の申請</h3>
                <p className="text-red-600 text-sm mt-1">この操作は取り消すことができません。</p>
              </div>
           </div>

           <div className="p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                退会すると、以下のデータがすべて<span className="font-bold text-red-600">完全に削除</span>されます。
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>これまでの模擬試験スコア履歴</li>
                <li>セクション別演習の進捗データ</li>
                <li>苦手分野の分析レポート</li>
                <li>アカウント登録情報</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">退会理由（任意）</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 outline-none h-24 resize-none"
                  placeholder="今後のサービス改善のため、よろしければ理由をお聞かせください。"
                />
              </div>

              <div className="flex gap-4 pt-4">
                 <button
                   onClick={() => setView('MAIN')}
                   className="flex-1 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                 >
                   キャンセル
                 </button>
                 <button
                   onClick={handleDeleteAccount}
                   className="flex-1 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-md"
                 >
                   退会してデータを削除
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // --- MAIN RENDER ---

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">アカウント設定</h2>
        <p className="text-gray-500 mt-1">登録情報とプランの管理</p>
      </div>

      {/* Basic Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <User className="w-5 h-5 mr-2 text-gray-500" />
            基本プロフィール
          </h3>
          <button
            onClick={handleEditClick}
            className="text-sm text-brand-600 font-medium hover:text-brand-700 flex items-center"
          >
            編集する
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 border-b border-gray-100 pb-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase mb-1">氏名</label>
              <div className="text-gray-900 font-medium">{user.name}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase mb-1">メールアドレス</label>
              <div className="text-gray-900 font-medium flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                {user.email}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase mb-1">生年月日</label>
              <div className="text-gray-900 font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {user.birthDate}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase mb-1">パスワード</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">••••••••</span>
                <button
                  onClick={() => setView('PASSWORD')}
                  className="text-xs text-gray-500 hover:text-brand-600 underline"
                >
                  変更
                </button>
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">所属</label>
                <div className="text-gray-900 font-medium flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
                  {user.university || '-'} {user.department}
                </div>
            </div>
            <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">TOEFL ITP 目標スコア</label>
                <div className="text-gray-900 font-medium flex items-center text-lg">
                  <Target className="w-4 h-4 mr-2 text-brand-500" />
                  {user.targetScore} 点
                </div>
            </div>

            <div className="md:col-span-2">
               <label className="block text-xs font-medium text-gray-400 uppercase mb-2">現在の保有スコア</label>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                    <span className="text-xs text-gray-500 block">TOEFL ITP</span>
                    <span className="font-bold text-gray-800">{user.externalScores.toeflItp || '-'}</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                    <span className="text-xs text-gray-500 block">TOEFL iBT</span>
                    <span className="font-bold text-gray-800">{user.externalScores.toeflIbt || '-'}</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                    <span className="text-xs text-gray-500 block">TOEIC</span>
                    <span className="font-bold text-gray-800">{user.externalScores.toeic || '-'}</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                    <span className="text-xs text-gray-500 block">IELTS</span>
                    <span className="font-bold text-gray-800">{user.externalScores.ielts || '-'}</span>
                 </div>
               </div>
            </div>

            <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-400 uppercase mb-3 flex items-center">
                  <CheckSquare className="w-3 h-3 mr-1" />
                  学習目的
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {learningPurposeOptions.map(purpose => (
                    <label key={purpose} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                      <input
                        type="checkbox"
                        disabled
                        checked={user.learningPurposes.includes(purpose)}
                        className="h-4 w-4 text-brand-500 rounded border-gray-300 bg-white"
                      />
                      <span className={`text-sm ${user.learningPurposes.includes(purpose) ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                        {purpose}
                      </span>
                    </label>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
            プラン情報
          </h3>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between p-4 bg-brand-50 rounded-lg border border-brand-100 mb-4">
            <div>
              <p className="text-sm text-brand-800 font-bold">{user.plan}</p>
              <p className="text-xs text-brand-600 mt-1">
                トライアル終了まで: <span className="font-bold text-lg ml-1">5日</span>
              </p>
            </div>
            <button className="px-4 py-2 bg-brand-500 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-brand-600 transition-colors">
              プランをアップグレード
            </button>
          </div>
          <div className="space-y-3">
             <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
               <span className="text-gray-600">次回請求日</span>
               <span className="font-medium text-gray-900">-</span>
             </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 flex items-center mb-4">
            <Bell className="w-5 h-5 mr-2 text-gray-500" />
            通知設定
          </h3>
          <div className="space-y-4">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-brand-500 rounded border-gray-300 focus:ring-brand-500" />
              <span className="ml-3 text-sm text-gray-700">模擬試験受験リマインド（前日と当日）</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-brand-500 rounded border-gray-300 focus:ring-brand-500" />
              <span className="ml-3 text-sm text-gray-700">学習リマインダー</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center items-start">
           <button
             onClick={() => setView('DELETE')}
             className="flex items-center text-sm text-gray-500 hover:text-red-600 transition-colors group"
           >
             <Trash2 className="w-4 h-4 mr-2 group-hover:text-red-600" />
             退会・データ削除を申請する
           </button>
        </div>
      </div>
    </div>
  );
};
