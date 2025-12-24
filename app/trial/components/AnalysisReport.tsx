import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label
} from 'recharts';
import { mockHistory, mockWeaknesses, mockUser } from '../services/mockData';
import { TrendingUp, FileText, ChevronRight, AlertTriangle } from 'lucide-react';

export const AnalysisReport: React.FC = () => {
  // Process data for charts
  const trendData = mockHistory.map(h => ({
    date: h.date.substring(5), // MM-DD
    score: h.totalScore,
    listening: h.sectionScores.Listening,
    structure: h.sectionScores.Structure,
    reading: h.sectionScores.Reading,
  }));

  // Sort weaknesses by accuracy ascending (Lowest accuracy = Highest priority)
  const sortedWeaknesses = [...mockWeaknesses].sort((a, b) => a.accuracy - b.accuracy);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{mockUser.name}さんの成果分析</h2>
          <p className="text-gray-500 mt-1">過去から現在までの学習データと分析レポート</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Score Trend Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-brand-500" />
              総合スコア推移
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
                  <CartesianGrid stroke="#f3f4f6" vertical={false} />
                  <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[300, 677]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  
                  {/* Target Score Line */}
                  <ReferenceLine y={mockUser.targetScore} stroke="#10b981" strokeDasharray="3 3">
                    <Label 
                      value={`目標: ${mockUser.targetScore}`} 
                      position="right" 
                      fill="#10b981" 
                      fontSize={12} 
                      offset={10}
                    />
                  </ReferenceLine>

                  <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-end text-xs text-gray-500 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-1 bg-brand-500 rounded-full mr-2"></div>
                実績スコア
              </div>
              <div className="flex items-center">
                <div className="w-3 h-1 bg-emerald-500 border-t border-dashed border-emerald-500 mr-2"></div>
                目標スコア
              </div>
            </div>
          </div>

          {/* Priority Training Areas (Ranking Style) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
              優先的に特訓が必要な分野
            </h3>
            <p className="text-xs text-gray-500 mb-4">正答率が低い順に表示されています。上位の項目を重点的に対策しましょう。</p>
            
            <div className="space-y-3">
              {sortedWeaknesses.map((w, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-sm transition-all">
                  {/* Rank Indicator */}
                  <div className={`
                    flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4 shadow-sm z-10
                    ${idx === 0 ? 'bg-red-500 text-white ring-4 ring-red-100' : ''}
                    ${idx === 1 ? 'bg-red-400 text-white ring-2 ring-red-50' : ''}
                    ${idx === 2 ? 'bg-red-300 text-white' : ''}
                    ${idx > 2 ? 'bg-white border border-gray-200 text-gray-500' : ''}
                  `}>
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 z-10">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-bold text-gray-800">{w.category}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-500 mt-1 sm:mt-0 w-fit">
                        {w.section}
                      </span>
                    </div>
                  </div>

                  {/* Visual Background Accent for top 3 */}
                  {idx < 3 && (
                     <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-400 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Reports List */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
             <div className="p-4 border-b border-gray-100 bg-gray-50">
               <h3 className="font-semibold text-gray-800">過去の分析結果</h3>
               <p className="text-xs text-gray-500 mt-1">受験ごとの詳細レポート一覧</p>
             </div>
             <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
               {mockHistory.slice().reverse().map((exam) => (
                 <button key={exam.id} className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="font-bold text-gray-800 text-sm">{exam.date} 実施分</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">
                        {exam.type === 'Mock' ? '模擬試験' : '演習'} • スコア: {exam.totalScore}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500" />
                 </button>
               ))}
               <div className="p-4 text-center">
                 <button className="text-xs text-brand-600 font-medium hover:underline">
                   さらに古いレポートを表示
                 </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};