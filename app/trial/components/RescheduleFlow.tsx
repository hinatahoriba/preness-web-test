'use client';

import React, { useState } from 'react';
import { ChevronLeft, Check, AlertCircle } from 'lucide-react';
import { mockUser } from '../services/mockData';

interface RescheduleFlowProps {
  onBack: () => void;
}

type Step = 'DATE_SELECTION' | 'SUCCESS';

export const RescheduleFlow: React.FC<RescheduleFlowProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>('DATE_SELECTION');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Generate next 14 days
  const today = new Date();
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i + 1);
    return d;
  });

  const renderDateSelection = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">模擬試験の予約変更</h2>
      <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg mb-6 flex items-start text-sm">
        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
        <div>
            2週間以内の日程から選択可能です。<br/>
            <span className="font-bold">※これ以降の日程変更はできませんのでご注意ください。</span>
        </div>
      </div>

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
          onClick={() => setStep('SUCCESS')}
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

  const renderSuccess = () => (
    <div className="animate-fade-in text-center py-12">
      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} strokeWidth={3} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ご予約ありがとうございます</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        予約の変更が完了しました。<br/>
        予約確認メールを <span className="font-bold text-gray-900">{mockUser.email}</span> 宛に送信しました。
      </p>

      <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-sm mx-auto mb-8 text-left">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">変更後の試験日</span>
          </div>
          <div className="text-xl font-bold text-brand-600">
             {selectedDate?.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
          </div>
      </div>

      <button
        onClick={onBack}
        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
      >
        マイページに戻る
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Back Button */}
      {step !== 'SUCCESS' && (
        <button
            onClick={onBack}
            className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
            <ChevronLeft size={16} className="mr-1" />
            キャンセルして戻る
        </button>
      )}

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {step === 'DATE_SELECTION' && renderDateSelection()}
        {step === 'SUCCESS' && renderSuccess()}
      </div>
    </div>
  );
};
