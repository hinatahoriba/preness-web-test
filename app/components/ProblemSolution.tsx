import React from 'react';
import { XCircle, CheckCircle, RefreshCcw, TrendingUp, BrainCircuit, ArrowDown } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">なぜ、スコアが伸び悩むのか？</h2>
          <p className="text-lg text-slate-600">
            従来の対策方法には、効率を妨げる「見えない壁」がありました。
          </p>
        </div>

        <div className="space-y-12">
          {/* Old Way */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute -left-10 -top-10 w-40 h-40 bg-slate-200 rounded-full opacity-20 pointer-events-none"></div>

            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <XCircle className="w-10 h-10 text-slate-500 shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-700">従来の課題</h3>
                </div>
                <ul className="space-y-6 w-full">
                  <li className="flex items-start gap-4">
                    <span className="text-3xl leading-none text-slate-300 select-none">•</span>
                    <p className="text-lg md:text-xl font-bold text-slate-600 leading-snug">
                      試験で間違えた問題が分からないのに、<span className="text-slate-800 bg-slate-200/50 px-1 rounded">どうやって振り返るの？？</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl leading-none text-slate-300 select-none">•</span>
                    <p className="text-lg md:text-xl font-bold text-slate-600 leading-snug">
                      今の参考書だけじゃ正直足りない。<span className="text-slate-800 bg-slate-200/50 px-1 rounded">もっと新しい問題で練習したい！</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl leading-none text-slate-300 select-none">•</span>
                    <p className="text-lg md:text-xl font-bold text-slate-600 leading-snug">
                      オンライン模試や受験料が高く、<span className="text-slate-800 bg-slate-200/50 px-1 rounded">練習頻度を増やせない！</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center -my-6 z-10 relative">
             <div className="bg-brand-500 text-white p-3 rounded-full shadow-lg border-4 border-white">
                <ArrowDown className="w-8 h-8 animate-bounce" strokeWidth={3} />
             </div>
          </div>

          {/* New Way (Preness) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="flex flex-col items-center relative z-10">
              <div className="w-full">
                <div className="flex items-center justify-center gap-3 mb-10">
                  <CheckCircle className="w-10 h-10 text-brand-500 shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-600">Prenessの解決策</h3>
                </div>
                <ul className="space-y-8 w-full">
                  <li className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                      <BrainCircuit className="w-8 h-8 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">高度なAI解析による弱点診断</h4>
                      <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        単なる正誤表示を超えた、<span className="text-brand-600 font-bold border-b-2 border-brand-200">詳細な分析レポートで苦手を可視化。</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                      <RefreshCcw className="w-8 h-8 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">いつでも、何度でも</h4>
                      <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        AIが常に新しい問題を生成。<span className="text-brand-600 font-bold border-b-2 border-brand-200">好きなだけ実戦練習が可能。</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-8 h-8 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">投資は最小、成果は最大</h4>
                      <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        低コストで圧倒的な演習量。<span className="text-brand-600 font-bold border-b-2 border-brand-200">ぶれない自信を手に入れる。</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;