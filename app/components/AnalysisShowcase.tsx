'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AlertCircle, Clock } from 'lucide-react';

// TOEFL ITP sections: Listening, Structure/Written Expression, Reading
const weaknessData = [
  { name: 'Listening', score: 62, fill: '#cbd5e1' },
  { name: 'Structure', score: 45, fill: '#f97316' }, // Highlighted weakness
  { name: 'Reading', score: 68, fill: '#cbd5e1' },
];

const scoreHistoryData = [
  { month: '4月', score: 430 },
  { month: '5月', score: 455 },
  { month: '6月', score: 490 },
  { month: '7月', score: 515 },
  { month: '8月', score: 550 },
];

const AnalysisShowcase: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            「詳細な分析レポート」で<br />
            弱点をピンポイント攻略
          </h2>
          <p className="text-slate-600">
            あなたの失点の癖や時間をかけすぎている問題を指摘します。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Weakness Analysis */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="font-bold text-lg text-slate-900">セクション別正答率</h3>
              <p className="text-xs text-slate-500">Structureセクションに課題あり</p>
            </div>
            <div className="h-64 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weaknessData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" width={70} tick={{fontSize: 12}} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg text-sm text-brand-800 flex gap-2 items-start">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>「S/Vの一致」問題の正答率が30%です。重点的な復習を推奨します。</span>
            </div>
          </div>

          {/* Card 2: Score History */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="font-bold text-lg text-slate-900">スコア推移グラフ</h3>
              <p className="text-xs text-slate-500">過去から現在への成長を可視化</p>
            </div>
            <div className="h-64 w-full mt-auto">
               <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{fontSize: 12}} />
                  <YAxis domain={[400, 600]} tick={{fontSize: 12}} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <span className="text-3xl font-bold text-slate-900">550</span>
              <span className="text-sm text-slate-500 ml-2">Current Estimated Score</span>
            </div>
          </div>

          {/* Card 3: Time Management */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="font-bold text-lg text-slate-900">解答時間分析</h3>
              <p className="text-xs text-slate-500">「時間かけすぎ」を赤色で警告</p>
            </div>

            <div className="space-y-3 mt-auto">
              {/* Normal Item */}
              <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500">Q.12</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">正解</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>0:25</span>
                </div>
              </div>

              {/* Warning Item */}
              <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg relative overflow-hidden animate-pulse">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-800">Q.13</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-xs rounded">不正解</span>
                </div>
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>2:45</span>
                  <span className="text-xs ml-1">(Over)</span>
                </div>
              </div>
               {/* Normal Item */}
               <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500">Q.14</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">正解</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>0:32</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
               <p>Reading Part Bでの時間配分に注意が必要です。</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalysisShowcase;
