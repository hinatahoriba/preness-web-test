'use client';

import React, { useState } from 'react';
import { ChevronLeft, Check, CreditCard, Lock, Calendar, AlertCircle } from 'lucide-react';
import { mockUser } from '../services/mockData';

interface BookingFlowProps {
  onBack: () => void;
}

type Step = 'DATE_SELECTION' | 'PAYMENT' | 'CONFIRMATION' | 'SUCCESS';

export const BookingFlow: React.FC<BookingFlowProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>('DATE_SELECTION');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  // Generate next 14 days
  const today = new Date();
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i + 1);
    return d;
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

  const renderDateSelection = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">模擬試験の日程を選択</h2>
      <p className="text-gray-500 mb-6">
        本日から2週間以内の日程で予約が可能です。<br/>
        <span className="text-xs text-gray-400">※マイページから日程変更は1回のみ可能です。</span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {availableDates.map((date, idx) => {
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(date)}
              className={`
                p-4 rounded-xl border text-center transition-all
                ${isSelected
                  ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-200'
                  : 'border-gray-200 hover:border-brand-300 hover:bg-gray-50'}
              `}
            >
              <div className="text-xs text-gray-500 mb-1">
                {date.toLocaleDateString('ja-JP', { weekday: 'short' })}
              </div>
              <div className="text-lg font-bold">
                {date.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric' })}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button
          disabled={!selectedDate}
          onClick={() => setStep('PAYMENT')}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-colors
            ${selectedDate ? 'bg-brand-500 hover:bg-brand-600' : 'bg-gray-300 cursor-not-allowed'}
          `}
        >
          この日程で予約する
        </button>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">お支払い情報の入力</h2>

      {/* Plan Summary */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">購入プラン内容</h3>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <div>
            <div className="font-bold text-gray-900">TOEFL ITP形式 模擬試験（1回分）</div>
            <div className="text-sm text-gray-500 mt-1">
               予約日: {selectedDate?.toLocaleDateString('ja-JP')}
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900">¥1,200</div>
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
                {/* Brand Icons Placeholder */}
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
         <button onClick={() => setStep('DATE_SELECTION')} className="text-gray-500 hover:text-gray-800 font-medium">
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
                <span className="font-medium">¥1,091</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">消費税 (10%)</span>
                <span className="font-medium">¥109</span>
            </div>
        </div>

        <div className="flex justify-between items-end">
            <span className="font-bold text-lg text-gray-900">お支払い合計</span>
            <span className="font-bold text-3xl text-brand-600">¥1,200</span>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
              <p className="font-bold mb-1">予約内容の確認</p>
              <p>日時: {selectedDate?.toLocaleDateString('ja-JP')} (終日アクセス可能)</p>
              <p>科目: TOEFL ITP形式 フルセット模擬試験</p>
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
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ご購入ありがとうございます！</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        予約が完了しました。<br/>
        購入確認メールを <span className="font-bold text-gray-900">{mockUser.email}</span> 宛に送信しましたのでご確認ください。
      </p>

      <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-md mx-auto mb-8 text-left">
          <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">購入プラン概要</h3>
          <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                  <span className="text-gray-500">プラン名</span>
                  <span className="font-medium text-gray-900">模擬試験単発チケット</span>
              </div>
               <div className="flex justify-between">
                  <span className="text-gray-500">料金</span>
                  <span className="font-medium text-gray-900">¥1,200</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-gray-500">試験予定日</span>
                  <span className="font-medium text-gray-900">{selectedDate?.toLocaleDateString('ja-JP')}</span>
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
        ホームに戻る
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Back Button (only for first steps) */}
      {step !== 'SUCCESS' && (
        <button
            onClick={onBack}
            className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
            <ChevronLeft size={16} className="mr-1" />
            キャンセルして戻る
        </button>
      )}

      {/* Progress Indicator */}
      {step !== 'SUCCESS' && (
        <div className="flex items-center justify-center mb-10">
            <div className={`flex flex-col items-center ${step === 'DATE_SELECTION' ? 'text-brand-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${step === 'DATE_SELECTION' || step === 'PAYMENT' || step === 'CONFIRMATION' ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>1</div>
                <span className="text-xs font-medium">日程</span>
            </div>
            <div className={`w-16 h-0.5 mx-2 ${step === 'PAYMENT' || step === 'CONFIRMATION' ? 'bg-brand-500' : 'bg-gray-200'}`}></div>
            <div className={`flex flex-col items-center ${step === 'PAYMENT' ? 'text-brand-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${step === 'PAYMENT' || step === 'CONFIRMATION' ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>2</div>
                <span className="text-xs font-medium">支払い</span>
            </div>
            <div className={`w-16 h-0.5 mx-2 ${step === 'CONFIRMATION' ? 'bg-brand-500' : 'bg-gray-200'}`}></div>
            <div className={`flex flex-col items-center ${step === 'CONFIRMATION' ? 'text-brand-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${step === 'CONFIRMATION' ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>3</div>
                <span className="text-xs font-medium">確認</span>
            </div>
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {step === 'DATE_SELECTION' && renderDateSelection()}
        {step === 'PAYMENT' && renderPayment()}
        {step === 'CONFIRMATION' && renderConfirmation()}
        {step === 'SUCCESS' && renderSuccess()}
      </div>
    </div>
  );
};
