import React from 'react';
import Button from '../../components/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            あなたの学習スタイルに合わせて選べます。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Subscription Plan */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-500 shadow-xl relative flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              サブスク
            </div>
            <h3 className="text-lg font-bold text-brand-600 mb-2">セクション別解き放題プラン</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-slate-900">¥980</span>
              <span className="text-slate-500">/月</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm">
              Listening / Structure / Reading の対策問題が解き放題。<br />
              毎日の習慣化に最適です。
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-brand-500 shrink-0" /> 全セクション対策問題 解き放題
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-brand-500 shrink-0" /> 問題数調整可能
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-brand-500 shrink-0" /> 弱点分析機能
              </li>
            </ul>
            <Button variant="primary" fullWidth>7日間無料で試す</Button>
          </div>

          {/* Mock Exam Plan */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
               <h3 className="text-lg font-bold text-slate-600">本番形式 模擬試験</h3>
               <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded">
                単発購入
              </span>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-slate-900">¥1,200</span>
              <span className="text-slate-500">/回</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm">
              TOEFL ITP形式のフルセット模擬試験。<br />
              本番同様の構成で実力を測定できます。
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-slate-400 shrink-0" /> 本番同様の構成（Listening/Structure/Reading）
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-slate-400 shrink-0" /> 総合スコア・セクションスコア即時表示
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-5 h-5 text-slate-400 shrink-0" /> 日程調整可能（変更1回のみ）
              </li>
            </ul>
            <Button variant="secondary" fullWidth>模試を購入する</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
