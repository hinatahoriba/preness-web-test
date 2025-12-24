import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1.5 inline-flex items-center justify-center">
                {/* Preness Logo SVG for Footer */}
                <svg className="h-6 w-6 text-brand-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8H20C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32H12C10.8954 32 10 31.1046 10 30V10C10 8.89543 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="4" />
                  <path d="M12 20H24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Preness</span>
            </div>
            <p className="text-sm max-w-xs">
              AIの力で、TOEFL ITP対策を効率化。<br />
              迷わない。無駄にしない。着実に伸ばす。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-brand-500 transition-colors">機能・分析</a></li>
              <li><a href="#flow" className="hover:text-brand-500 transition-colors">学習の流れ</a></li>
              <li><a href="#pricing" className="hover:text-brand-500 transition-colors">料金プラン</a></li>
              <li><a href="#testimonials" className="hover:text-brand-500 transition-colors">学習者の声</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-brand-500 transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-xs text-center space-y-4">
          <p className="opacity-70">
            本サービスは ETS（Educational Testing Service）が提供するTOEFLまたはTOEFL ITPの「公式模擬試験ではありません」。
            TOEFL ITP形式に基づき学習者の英語力向上を目的として独自に問題を生成しているサービスです。
          </p>
          <p>&copy; {new Date().getFullYear()} Preness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;