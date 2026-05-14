'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-bone flex flex-row-reverse">
      {/* Left Column: Form (Reversed layout for visual variety) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-sm w-full mx-auto">
          <Link href="/" className="font-noto-serif font-bold text-2xl tracking-tight text-forest mb-12 block">
            Atelier.
          </Link>
          
          <h1 className="text-2xl font-bold mb-2 text-forest">無料で始める</h1>
          <p className="text-sm text-slate-sub mb-8">
            14 日間の無料トライアル。クレジットカードは不要です。
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate">Email address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="hello@example.com" 
                defaultValue="valid@example.com"
                className="w-full px-4 py-2 bg-bone border-2 border-forest/30 rounded-md focus:outline-none focus:ring-0 focus:border-forest transition-all"
              />
              <p className="text-[10px] text-success">Looks good!</p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate">Password</label>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-2 bg-bone-sub border border-line rounded-md focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all placeholder:text-slate-sub/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password-confirm" className="text-sm font-medium text-slate">Confirm Password</label>
              <input 
                id="password-confirm" 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-2 bg-error/5 border border-error/50 rounded-md focus:outline-none focus:ring-2 focus:ring-error focus:border-transparent transition-all placeholder:text-slate-sub/50 text-error"
              />
              <p className="text-[10px] text-error">Passwords do not match.</p>
            </div>

            <div className="flex items-start gap-3 mt-6">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 rounded border-line text-forest focus:ring-forest bg-bone-sub w-4 h-4"
              />
              <label htmlFor="terms" className="text-xs text-slate-sub leading-relaxed">
                <Link href="#" className="underline hover:text-forest">利用規約</Link> および <Link href="#" className="underline hover:text-forest">プライバシーポリシー</Link> に同意します。
              </label>
            </div>

            <Button type="submit" className="w-full mt-4">
              アカウントを作成
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">
            <span className="text-xs text-slate-sub font-medium uppercase tracking-wider">or sign up with</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-bone hover:bg-bone-sub border-line text-slate">
              Google
            </Button>
            <Button variant="outline" className="bg-bone hover:bg-bone-sub border-line text-slate">
              GitHub
            </Button>
          </div>

          <p className="mt-12 text-center text-sm text-slate-sub">
            すでにアカウントをお持ちの方は{' '}
            <Link href="/login" className="text-forest font-semibold hover:text-brass transition-colors">ログイン</Link>
          </p>
        </div>
      </div>

      {/* Right Column: Visual */}
      <div className="hidden lg:flex w-1/2 bg-bone-sub border-l border-line flex-col justify-center items-center p-16 relative overflow-hidden">
        <div className="w-full max-w-md relative">
          <div className="absolute -inset-4 bg-brass/10 blur-xl rounded-full" />
          <div className="bg-bone border border-line rounded-xl p-8 shadow-2xl relative z-10">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-line">
              <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center text-bone font-mono font-bold text-xl">A</div>
              <div>
                <div className="font-bold text-lg text-forest">Atelier Solo</div>
                <div className="text-sm text-slate-sub">Free forever</div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
                同時 5 案件まで
              </li>
              <li className="flex items-center gap-3 text-sm text-slate">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
                クライアント共有ボード
              </li>
              <li className="flex items-center gap-3 text-sm text-slate">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
                直近 3 つのバージョン管理
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
