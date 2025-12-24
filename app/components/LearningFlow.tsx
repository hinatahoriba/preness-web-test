'use client';

import React, { useState } from 'react';
import { Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const LearningFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A');

  const personas = {
    A: {
      title: "基礎定着を目指す方",
      icon: <Target className="w-5 h-5" />,
      desc: "まずは実力を知り、じっくり基礎を固めたい方へ",
      steps: [
        { title: "模擬試験を解く", desc: "まずは現状の実力を測定。" },
        { title: "AI解析で重点把握", desc: "重点的に勉強すべきセクションやパートを知る。" },
        { title: "弱点練習＋感覚維持", desc: "弱みのセクションを練習しつつ、他セクションも感覚を維持。" },
        { title: "セクション別プラン", desc: "一か月間、個人の能力に合わせて集中学習。" },
        { title: "再度、模擬試験", desc: "基礎が定着したかを確認。" }
      ]
    },
    B: {
      title: "試験に慣れたい方",
      icon: <Zap className="w-5 h-5" />,
      desc: "時間配分やスピードに課題がある方へ",
      steps: [
        { title: "模擬試験を解く", desc: "本番形式でタイムマネジメントを確認。" },
        { title: "時間配分・スピード把握", desc: "AI解析を活用して「時間のかかりすぎ」を特定。" },
        { title: "スピード演習", desc: "時間を意識しながらセクション別サブスクで演習。" },
        { title: "再度、模擬試験", desc: "改善されたリズムで高得点を狙う。" }
      ]
    },
    C: {
      title: "弱点を知り、克服したい方",
      icon: <TrendingUp className="w-5 h-5" />,
      desc: "特定のセクションだけ極端に苦手な方へ",
      steps: [
        { title: "模擬試験を解く", desc: "全体のスコアバランスを確認。" },
        { title: "重点エリア特定", desc: "AI解析で重点的に勉強すべきセクションを知る。" },
        { title: "弱点集中練習", desc: "分析レポートから、間違えた問題を徹底復習。" },
        { title: "再度、模擬試験", desc: "弱点が克服できたか最終確認。" }
      ]
    }
  };

  return (
    <section id="flow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">あなたに合った学習の流れ</h2>
          <p className="text-slate-600">Prenessなら、目的やレベルに合わせて柔軟に活用できます。</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1 rounded-xl flex-wrap justify-center">
            {(Object.keys(personas) as Array<'A'|'B'|'C'>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === key
                    ? 'bg-white text-brand-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {personas[key].icon}
                <span className="hidden md:inline">{personas[key].title}</span>
                <span className="md:hidden">{personas[key].title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-50/50 rounded-2xl p-8 md:p-12 border border-brand-100">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{personas[activeTab].title}</h3>
              <p className="text-slate-600">{personas[activeTab].desc}</p>
            </div>

            <div className="space-y-6 relative">
               {/* Vertical Line for Mobile/Desktop consistency */}
               <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-brand-200 -z-10"></div>

              {personas[activeTab].steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="w-10 h-10 rounded-full bg-brand-100 border-4 border-white flex items-center justify-center shrink-0 text-brand-600 font-bold shadow-sm z-10">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
               <div className="inline-flex items-center gap-2 text-brand-600 font-medium">
                  <ArrowRight className="w-4 h-4" />
                  サイクルを回して確実にスコアアップ
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFlow;
