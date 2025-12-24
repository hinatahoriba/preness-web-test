'use client';

import React, { useState } from 'react';
import { ChevronLeft, Check, CreditCard, Lock, Zap, Infinity as InfinityIcon, BookOpen, Headphones, PenTool, Calendar, Clock, FileText } from 'lucide-react';
import { mockUser } from '../services/mockData';

interface SectionPracticeFlowProps {
  onBack: () => void;
}

type Step = 'DETAILS' | 'TRIAL_CONFIRM' | 'PAYMENT' | 'CONFIRMATION' | 'SUCCESS';

export const SectionPracticeFlow: React.FC<SectionPracticeFlowProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>('DETAILS');
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    setCardInfo({ ...cardInfo, number: value });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formatted = value;
    if (value.length >= 3) {
      formatted = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setCardInfo({ ...cardInfo, expiry: formatted.slice(0, 5) });
  };

  const renderDetails = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">セクション別演習へようこそ</h2>
      <p className="text-gray-500 mb-8">
        AIが生成する重複のない問題で、苦手分野を効率的に克服しましょう。<br/>
        学習スタイルに合わせてプランをお選びください。
      </p>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        {/* Header */}
        <div className="grid grid-cols-3">
          <div className="p-4 flex items-center justify-center bg-gray-50 border-b border-gray-200">
             <span className="font-bold text-gray-500 text-sm">比較項目</span>
          </div>

          {/* Free Trial Header */}
          <div className="p-4 bg-blue-500 text-white text-center border-l border-blue-400 relative">
            <div className="flex flex-col items-center relative z-10 py-2">
               <Zap className="w-6 h-6 mb-2 text-blue-100" />
               <span className="font-bold text-lg">無料トライアル</span>
            </div>
          </div>

          {/* Subscription Header */}
          <div className="p-4 bg-brand-500 text-white text-center border-l border-brand-400 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-12 h-12 bg-white opacity-10 rotate-45 transform translate-x-6 -translate-y-6"></div>
             <div className="flex flex-col items-center relative z-10 py-2">
               <InfinityIcon className="w-6 h-6 mb-2 text-brand-100" />
               <span className="font-bold text-xl drop-shadow-sm">サブスクリプション</span>
             </div>
          </div>
        </div>

        {/* Usage Limits */}
        <div className="grid grid-cols-3 border-b border-gray-100">
          <div className="p-5 text-sm font-bold text-gray-700 flex items-center bg-gray-50">
             <Clock className="w-5 h-5 mr-2 text-gray-400" />
             演習回数
          </div>
          <div className="p-5 text-center bg-blue-50 border-l border-blue-100 flex items-center justify-center">
            <span className="font-bold text-blue-700 text-lg">1日2回まで</span>
          </div>
          <div className="p-5 text-center bg-brand-50 border-l border-brand-100 relative">
            <div className="inline-block bg-gradient-to-r from-brand-500 to-brand-600 text-white text-lg font-bold px-6 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform cursor-default">
               ✨ 無制限
            </div>
          </div>
        </div>

        {/* Listening */}
        <div className="grid grid-cols-3 border-b border-gray-100">
          <div className="p-5 text-sm font-bold text-gray-700 flex items-center bg-gray-50">
             <Headphones className="w-5 h-5 mr-2 text-gray-400" />
             Listening
          </div>
          <div className="p-5 text-base text-gray-600 border-l border-blue-100 bg-blue-50">
            <ul className="space-y-2 text-center">
              <li>パートA: <span className="font-bold">5問</span></li>
              <li>パートB: <span className="font-bold">1題</span></li>
              <li>パートC: <span className="font-bold">1題</span></li>
            </ul>
          </div>
          <div className="p-5 text-base text-gray-900 font-medium border-l border-brand-100 bg-brand-50">
            <ul className="space-y-2 text-center">
              <li>パートA: <span className="text-brand-600 font-bold text-lg">10問</span></li>
              <li>パートB: <span className="text-brand-600 font-bold text-lg">2題</span></li>
              <li>パートC: <span className="text-brand-600 font-bold text-lg">2題</span></li>
            </ul>
          </div>
        </div>

        {/* Structure */}
        <div className="grid grid-cols-3 border-b border-gray-100">
          <div className="p-5 text-sm font-bold text-gray-700 flex items-center bg-gray-50">
             <PenTool className="w-5 h-5 mr-2 text-gray-400" />
             Structure
          </div>
          <div className="p-5 text-base text-gray-600 border-l border-blue-100 bg-blue-50">
             <ul className="space-y-2 text-center">
              <li>パートA: <span className="font-bold">10問</span></li>
              <li>パートB: <span className="font-bold">10問</span></li>
            </ul>
          </div>
          <div className="p-5 text-base text-gray-900 font-medium border-l border-brand-100 bg-brand-50">
            <ul className="space-y-2 text-center">
              <li>パートA: <span className="text-brand-600 font-bold text-lg">15問</span></li>
              <li>パートB: <span className="text-brand-600 font-bold text-lg">15問</span></li>
            </ul>
          </div>
        </div>

        {/* Reading */}
        <div className="grid grid-cols-3 border-b border-gray-100">
          <div className="p-5 text-sm font-bold text-gray-700 flex items-center bg-gray-50">
             <BookOpen className="w-5 h-5 mr-2 text-gray-400" />
             Reading
          </div>
          <div className="p-5 text-base text-gray-600 border-l border-blue-100 bg-blue-50">
             <ul className="space-y-2 text-center">
              <li>パッセージ: <span className="font-bold">1題</span></li>
            </ul>
          </div>
          <div className="p-5 text-base text-gray-900 font-medium border-l border-brand-100 bg-brand-50">
            <ul className="space-y-2 text-center">
              <li>パッセージ: <span className="text-brand-600 font-bold text-lg">3題</span></li>
            </ul>
          </div>
        </div>

        {/* Analysis & Review Feature - NEW */}
        <div className="grid grid-cols-3">
          <div className="p-5 text-sm font-bold text-gray-700 flex items-center bg-gray-50">
             <FileText className="w-5 h-5 mr-2 text-gray-400" />
             分析・復習機能
          </div>
          <div className="p-5 text-sm text-gray-600 border-l border-blue-100 bg-blue-50 text-center">
             <div className="mb-2"><span className="font-bold text-blue-600 mr-1">✓</span> 演習後の解説表示</div>
             <div className="opacity-50 text-gray-400"><span className="font-bold mr-1">✕</span> 履歴保存・復習</div>
          </div>
          <div className="p-5 text-sm text-gray-900 border-l border-brand-100 bg-brand-50 text-center">
             <div className="mb-2 font-bold text-brand-800"><span className="text-brand-600 mr-1">✓</span> 演習後の解説表示</div>
             <div className="font-bold text-brand-800"><span className="text-brand-600 mr-1">✓</span> 履歴保存・復習</div>
             <p className="text-xs text-brand-600 mt-1 bg-white inline-block px-2 py-1 rounded border border-brand-200">
               間違えた問題を記録して<br/>マイページから再演習可能
             </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
             onClick={() => setStep('TRIAL_CONFIRM')}
             className="w-full py-4 bg-white border-2 border-blue-500 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm flex flex-col items-center justify-center group"
        >
             <span className="text-lg group-hover:scale-105 transition-transform">無料トライアルで開始</span>
             <span className="text-xs font-medium text-blue-400 mt-1">まずはお試し（7日間）</span>
        </button>

        <button
             onClick={() => setStep('PAYMENT')}
             className="w-full py-4 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg flex flex-col items-center justify-center group"
        >
             <span className="text-lg group-hover:scale-105 transition-transform">サブスク購入へ進む</span>
             <span className="text-xs font-medium text-brand-100 mt-1">月額980円 / 無制限アクセス</span>
        </button>
      </div>
    </div>
  );

  const renderTrialConfirm = () => {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);

    return (
      <div className="animate-fade-in text-center py-8">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">無料トライアルを開始しますか？</h2>
        <p className="text-gray-500 mb-8">
          以下の期間で、一部の演習機能が無料で利用可能です。
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-sm mx-auto mb-8">
            <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-500">開始日</span>
                <span className="font-bold text-gray-900">{today.toLocaleDateString('ja-JP')} (本日)</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">終了日</span>
                <span className="font-bold text-gray-900">{endDate.toLocaleDateString('ja-JP')} (7日後)</span>
            </div>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <button
                onClick={onBack}
                className="w-full py-3 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors"
            >
                本日からスタートする
            </button>
            <button
                onClick={() => setStep('DETAILS')}
                className="w-full py-3 text-gray-500 hover:text-gray-700 font-medium"
            >
                キャンセル
            </button>
        </div>
      </div>
    );
  };

  const renderPayment = () => (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">お支払い情報の入力</h2>

      {/* Plan Summary */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">購入プラン内容</h3>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <div>
            <div className="font-bold text-gray-900">セクション別演習サブスク</div>
            <div className="text-sm text-gray-500 mt-1">
               月額プラン (自動更新)
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900">¥980<span className="text-sm font-normal text-gray-500">/月</span></div>
        </div>
        <div className="text-xs text-gray-400 text-right">
          <a href="#" className="underline hover:text-brand-600 mr-4">利用規約</a>
          <a href="#" className="underline hover:text-brand-600">プライバシーポリシー</a>
        </div>
      </div>

      {/* Card Form */}
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">カード番号</label>
          <div className="relative">
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              value={cardInfo.number}
              onChange={handleCardNumberChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            />
            <CreditCard className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <div className="absolute right-4 top-3.5 flex gap-2">
                <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center text-gray-500 font-bold">VISA</div>
                <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center text-gray-500 font-bold">MC</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">有効期限 (MM/YY)</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={cardInfo.expiry}
              onChange={handleExpiryChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">セキュリティコード (CVC)</label>
            <div className="relative">
                <input
                type="text"
                placeholder="123"
                maxLength={4}
                value={cardInfo.cvc}
                onChange={(e) => setCardInfo({ ...cardInfo, cvc: e.target.value.replace(/\D/g, '') })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
                <Lock className="absolute right-4 top-3.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">カード名義</label>
          <input
            type="text"
            placeholder="TARO YAMADA"
            value={cardInfo.name}
            onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value.toUpperCase() })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-6 text-gray-400 text-sm">
        <Lock className="w-3 h-3 mr-1" />
        <span className="mr-1">Powered by Stripe</span>
        <span className="text-xs border-l border-gray-300 pl-2 ml-2">カード情報は当社では保持しません</span>
      </div>

      <div className="flex justify-between items-center">
         <button onClick={() => setStep('DETAILS')} className="text-gray-500 hover:text-gray-800 font-medium">
             戻る
         </button>
        <button
          onClick={() => setStep('CONFIRMATION')}
          disabled={cardInfo.number.length < 16}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-colors
            ${cardInfo.number.length >= 16 ? 'bg-brand-500 hover:bg-brand-600' : 'bg-gray-300 cursor-not-allowed'}
          `}
        >
          確認画面へ進む
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="animate-fade-in max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">購入内容の確認</h2>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">請求明細</h3>

        <div className="space-y-3 mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between">
                <span className="text-gray-600">小計</span>
                <span className="font-medium">¥891</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">消費税 (10%)</span>
                <span className="font-medium">¥89</span>
            </div>
        </div>

        <div className="flex justify-between items-end">
            <span className="font-bold text-lg text-gray-900">お支払い合計</span>
            <span className="font-bold text-3xl text-brand-600">¥980</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
         <button onClick={() => setStep('PAYMENT')} className="text-gray-500 hover:text-gray-800 font-medium">
             修正する
         </button>
        <button
          onClick={() => setStep('SUCCESS')}
          className="px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
        >
          購入を確定する
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="animate-fade-in text-center py-12">
      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} strokeWidth={3} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ご利用ありがとうございます！</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        サブスクリプションの購入が完了しました。<br/>
        購入確認メールを <span className="font-bold text-gray-900">{mockUser.email}</span> 宛に送信しました。
      </p>

      <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-md mx-auto mb-8 text-left">
          <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">購入プラン概要</h3>
          <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                  <span className="text-gray-500">プラン名</span>
                  <span className="font-medium text-gray-900">セクション別演習サブスク</span>
              </div>
               <div className="flex justify-between">
                  <span className="text-gray-500">料金</span>
                  <span className="font-medium text-gray-900">¥980/月</span>
              </div>
          </div>
      </div>

      <div className="text-sm text-gray-500 mb-8">
          ご不明点は <a href="#" className="text-brand-600 underline">サポートセンター</a> までご連絡ください。
      </div>

      <button
        onClick={onBack}
        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
      >
        演習を開始する
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Back Button */}
      {step !== 'SUCCESS' && step !== 'TRIAL_CONFIRM' && (
        <button
            onClick={onBack}
            className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
            <ChevronLeft size={16} className="mr-1" />
            戻る
        </button>
      )}

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {step === 'DETAILS' && renderDetails()}
        {step === 'TRIAL_CONFIRM' && renderTrialConfirm()}
        {step === 'PAYMENT' && renderPayment()}
        {step === 'CONFIRMATION' && renderConfirmation()}
        {step === 'SUCCESS' && renderSuccess()}
      </div>
    </div>
  );
};
