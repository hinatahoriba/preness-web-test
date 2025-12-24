'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';

interface FAQProps {
  onBack: () => void;
}

const faqData = [
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

export const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft size={16} className="mr-1" />
        お問い合わせに戻る
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">よくある質問</h2>
        <p className="text-gray-500">サービスに関する頻出の質問をまとめました。</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className={`font-bold pr-4 transition-colors ${openIndex === index ? 'text-brand-600' : 'text-gray-900'}`}>
                {item.q}
              </span>
              {openIndex === index ? <ChevronUp className="text-gray-400 flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-100 animate-fade-in">
                <div className="pt-4 text-sm md:text-base">
                  {item.a}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
