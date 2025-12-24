import React from 'react';
import { Play, Calendar, Zap, ArrowRight } from 'lucide-react';
import { mockUser, mockHistory } from '../services/mockData';
import { AnalysisReport } from './AnalysisReport';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  // Calculate days until exam
  const examDate = mockUser.nextExamDate ? new Date(mockUser.nextExamDate) : null;
  const today = new Date();
  const daysUntilExam = examDate ? Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome & Status Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">こんにちは、{mockUser.name}さん</h2>
          <p className="text-gray-500 mt-1">今日もスコアアップを目指して効率的に学習しましょう。</p>
        </div>
        <div className="flex gap-3">
             {/* Trial Status Badge */}
            <div className="bg-brand-50 text-brand-700 px-4 py-2 rounded-lg text-sm font-semibold border border-brand-100 shadow-sm flex items-center">
              <Zap size={16} className="mr-2" />
              無料トライアル: 残り5日
            </div>
        </div>
      </div>

      {/* Countdown Card (Full Width now) */}
      <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-gray-300 text-sm font-medium uppercase tracking-wider mb-2">次回の試験日</h3>
            <div className="flex items-baseline gap-4">
                {daysUntilExam !== null ? (
                    <>
                    <span className="text-5xl font-bold tracking-tight">あと {daysUntilExam}</span>
                    <span className="text-xl text-gray-400">日</span>
                    </>
                ) : (
                    <span className="text-2xl font-bold">試験日が未設定です</span>
                )}
            </div>
            <p className="text-gray-400 text-sm mt-2">目標: 550点 / 現在: {mockHistory[mockHistory.length-1].totalScore}点</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
               <button
                 onClick={() => onNavigate('booking')}
                 className="bg-white text-gray-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-md text-center"
               >
                  模擬試験を予約
              </button>
               <button
                 onClick={() => onNavigate('reschedule')}
                 className="bg-transparent border border-gray-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors text-center"
               >
                  予約を変更する
              </button>
          </div>
        </div>
        {/* Decor element */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-64 h-64 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
            onClick={() => onNavigate('section-practice')}
            className="group relative bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-300 transition-all text-left"
        >
            <div className="absolute top-6 right-6 p-3 bg-brand-50 text-brand-600 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Play size={24} fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">セクション別演習へ</h3>
            <p className="text-gray-500 text-sm mb-4 pr-12">
                Listening, Structure, Readingの苦手なパートを制限なしの重点的な学習。
                <br /><span className="text-xs text-brand-600 mt-1 inline-block">※AIによる問題生成で出題の重複なし</span>
            </p>
            <span className="text-brand-600 font-semibold text-sm flex items-center">
                学習を開始する <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
            </span>
        </button>

        <button
            onClick={() => onNavigate('analysis')}
            className="group relative bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left"
        >
            <div className="absolute top-6 right-6 p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">模擬試験へ進む</h3>
            <p className="text-gray-500 text-sm mb-4 pr-12">
                本番形式（約2時間）の実戦模試。時間配分と集中力をトレーニング。
                <br /><span className="text-xs text-blue-600 mt-1 inline-block">※AIによる問題生成で出題の重複なし</span>
            </p>
            <span className="text-blue-600 font-semibold text-sm flex items-center">
                試験を開始する <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
            </span>
        </button>
      </div>

      {/* Detailed Analysis Section */}
      <div className="mt-8 border-t border-gray-100 pt-8">
        <AnalysisReport />
      </div>

      {/* Recent History Snippet */}
      <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-900">直近の学習履歴</h3>
            <button
                onClick={() => onNavigate('history')}
                className="text-sm text-brand-600 font-medium hover:text-brand-700"
            >
                すべて見る
            </button>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {mockHistory.slice(-2).reverse().map((h, i) => (
                  <div key={h.id} className={`p-4 flex items-center justify-between ${i !== 0 ? 'border-t border-gray-100' : ''}`}>
                      <div className="flex items-center gap-4">
                          <div className={`w-2 h-12 rounded-full ${h.type === 'Mock' ? 'bg-brand-500' : 'bg-blue-500'}`}></div>
                          <div>
                              <p className="font-bold text-gray-800">{h.type === 'Mock' ? '模擬試験' : 'セクション演習'}</p>
                              <p className="text-xs text-gray-500">{h.date}</p>
                          </div>
                      </div>
                      <div className="text-right">
                          <p className="text-xl font-bold text-gray-900">{h.totalScore}<span className="text-xs text-gray-400 font-normal ml-1">点</span></p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};
