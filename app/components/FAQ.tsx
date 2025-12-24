'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "本番のTOEFLにどれくらい近い形式ですか？",
      a: "本サービスは、TOEFLの問題構造・出題形式・語彙レベルを学習したAIが、独自に模擬問題を生成しています。ただし、ETS（TOEFL運営団体）とは提携していないため、「公式問題と完全に同一」ではありません。難易度・形式の近さを追求した“本番に近い実戦練習” として使用いただけます。"
    },
    {
      q: "ETS公式の模試や書籍との違いは何ですか？",
      a: "公式模試は ETS が直接作成しており、本試験と同等のクオリティで実力を測ることができます。一方、本サービスでは 知的財産権を遵守しつつ、TOEFL の問題構造・出題形式・語彙レベルを学習した AI が 独自に模擬問題を生成 しています。そのため、低価格で、何度でも新しい問題に取り組める “無限の模試練習” が可能です。"
    },
    {
      q: "スピーキングとライティングも利用できますか？",
      a: "いいえ。本サービスは TOEFL ITP に特化した模試生成サービス のため、スピーキングおよびライティングの問題・解説には対応していません。"
    },
    {
      q: "スコアはどれくらい上がりますか？",
      a: "学習頻度によって異なりますが、週5回 × 30分のセクション練習 + 週1回の模試 を継続した場合、平均 +30〜50点のスコア改善 が見られた例があります（個人差あり）。"
    },
    {
      q: "スマートフォンでも利用できますか？",
      a: "いいえ。本サービスは PC専用 です。TOEFL ITPの長文・音声・解答操作を正確に再現するため、スマートフォン・タブレットには対応していません。"
    },
    {
      q: "AIが生成する問題の質は信頼できますか？",
      a: "はい。本番のスコアデータ・受験者の解答傾向・TOEFLの構造を学習し、文法・語彙レベル・出題意図が一貫した問題 を生成するよう設計しています。また、運営側が責任を持って、問題の正当性を判断しています。"
    },
    {
      q: "どのくらいの頻度で新しい模試が生成されますか？",
      a: "1回ごとに毎回異なる模試が生成されます。同じ問題が何度も出ることはありません。"
    },
    {
      q: "解答のデータは保存されますか？",
      a: "はい。各模試の スコア・回答履歴・分析レポート が自動保存され、マイページからいつでも確認できます。スコア推移の振り返りにもご利用いただけます。"
    },
    {
      q: "返金はできますか？",
      a: "購入日から5日以内であれば返金対応可能です。"
    },
    {
      q: "契約の自動更新はありますか？",
      a: "はい。自動更新の場合、更新日前にメールで通知をお送りします。"
    },
    {
      q: "生成された問題を他の用途に利用できますか？",
      a: "模擬試験として個人利用の範囲のみ可能です。無断転載・二次配布・商用利用はご遠慮ください。"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div
        className={`px-6 text-slate-600 text-sm leading-relaxed bg-slate-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
