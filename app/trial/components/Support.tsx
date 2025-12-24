'use client';

import React, { useState } from 'react';
import { Mail, Send, FileText, ExternalLink } from 'lucide-react';

interface SupportProps {
  onNavigate?: (tab: string) => void;
}

export const Support: React.FC<SupportProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '一般のお問い合わせ',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSent(true);
      // Reset after showing success
      setTimeout(() => setIsSent(false), 5000);
      setFormState({ name: '', email: '', subject: '一般のお問い合わせ', message: '' });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">お問い合わせ・規約</h2>
        <p className="text-gray-500 mt-1">ご不明な点やサポートが必要な場合はこちらからご連絡ください。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-brand-500" />
                    お問い合わせフォーム
                </h3>

                {isSent ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                        <p className="font-bold text-lg mb-2">送信完了</p>
                        <p>お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡いたします。</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="Preness 太郎"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({...formState, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="your-email@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">件名</label>
                            <select
                                value={formState.subject}
                                onChange={e => setFormState({...formState, subject: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                            >
                                <option>一般のお問い合わせ</option>
                                <option>模擬試験の不具合について</option>
                                <option>お支払い・プランについて</option>
                                <option>その他</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
                            <textarea
                                required
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none h-32 resize-none"
                                placeholder="詳細な内容をご記入ください"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            送信する
                        </button>
                    </form>
                )}
            </div>
        </div>

        {/* Links & Info */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-gray-500" />
                    規約・ポリシー
                </h3>
                <div className="space-y-2">
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-brand-600 transition-colors group">
                        <span className="text-sm font-medium">利用規約</span>
                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-500" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-brand-600 transition-colors group">
                        <span className="text-sm font-medium">プライバシーポリシー</span>
                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-500" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-brand-600 transition-colors group">
                        <span className="text-sm font-medium">特定商取引法に基づく表記</span>
                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-500" />
                    </a>
                </div>
            </div>

            <div className="bg-brand-50 rounded-xl border border-brand-100 p-6">
                <h4 className="font-bold text-brand-800 mb-2">よくある質問</h4>
                <p className="text-xs text-brand-600 mb-4">
                    お問い合わせの前に、FAQをご確認いただくと解決が早い場合があります。
                </p>
                <button
                    onClick={() => onNavigate?.('faq')}
                    className="text-sm font-bold text-brand-600 hover:underline flex items-center"
                >
                    FAQページへ移動 →
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
