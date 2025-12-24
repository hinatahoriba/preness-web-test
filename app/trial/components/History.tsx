import React from 'react';
import { ChevronRight, FileCheck, FileClock } from 'lucide-react';
import { mockHistory } from '../services/mockData';
import { SectionType } from '../types';

interface HistoryProps {
  onViewDetails: () => void;
}

export const History: React.FC<HistoryProps> = ({ onViewDetails }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">受験履歴</h2>
        <p className="text-gray-500 mt-1">過去の模擬試験と演習の結果一覧</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {mockHistory.map((exam) => (
            <div key={exam.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* Exam Info */}
                <div className="flex items-start space-x-4">
                  <div className={`
                    p-3 rounded-lg
                    ${exam.type === 'Mock' ? 'bg-brand-100 text-brand-600' : 'bg-blue-100 text-blue-600'}
                  `}>
                    {exam.type === 'Mock' ? <FileClock size={24} /> : <FileCheck size={24} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">
                        {exam.type === 'Mock' ? '模擬試験フルセット' : 'セクション別演習'}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${exam.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {exam.status === 'Completed' ? '完了' : '途中'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{exam.date} • {exam.durationMinutes}分</p>
                  </div>
                </div>

                {/* Scores */}
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Total</p>
                    <p className="text-2xl font-bold text-brand-600">{exam.totalScore}</p>
                  </div>
                  <div className="hidden sm:flex gap-4 border-l border-gray-200 pl-6">
                    <div>
                      <p className="text-xs text-gray-400">List.</p>
                      <p className="font-semibold text-gray-700">{exam.sectionScores[SectionType.LISTENING]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Struc.</p>
                      <p className="font-semibold text-gray-700">{exam.sectionScores[SectionType.STRUCTURE]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Read.</p>
                      <p className="font-semibold text-gray-700">{exam.sectionScores[SectionType.READING]}</p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={onViewDetails}
                  className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:border-brand-300 hover:text-brand-600 transition-all group"
                >
                  詳細レポート
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
