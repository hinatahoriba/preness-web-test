import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      initial: "K.T.",
      role: "大学3年生",
      target: "交換留学",
      goalScore: "目標: 550点",
      before: "公式模試が高くて、本番まで実力を測れないまま不安な日々でした。",
      after: "2ヶ月で500点→560点達成！",
      reason: "とにかく「量」をこなせるのが魅力。毎回新しい問題が出るので、暗記に頼らず実力がつきました。",
    },
    {
      initial: "S.M.",
      role: "社会人（社内公募）",
      target: "昇進試験",
      goalScore: "目標: 530点",
      before: "仕事が忙しく、まとまった勉強時間が取れない。",
      after: "通勤中の隙間時間活用で540点クリア。",
      reason: "自分の弱点が「文法（Structure）」だと明確になり、そこだけ集中対策できたのが効率的でした。",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">学習者の声</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl">
                  {review.initial}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.role}</div>
                  <div className="text-sm text-slate-500">{review.target}</div>
                  <div className="text-xs text-brand-600 font-medium bg-brand-50 px-2 py-0.5 rounded inline-block mt-1">
                    {review.goalScore}
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Before</div>
                  <p className="text-slate-600 text-sm">{review.before}</p>
                </div>
                <div>
                  <div className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-1">After</div>
                  <p className="text-slate-900 font-bold text-lg">{review.after}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Reason</div>
                   <p className="text-slate-600 italic text-sm">"{review.reason}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;