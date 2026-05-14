'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bone flex">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-sm w-full mx-auto">
          <Link href="/" className="font-noto-serif font-bold text-2xl tracking-tight text-forest mb-12 block">
            Atelier.
          </Link>
          
          <h1 className="text-2xl font-bold mb-2 text-forest">おかえりなさい</h1>
          <p className="text-sm text-slate-sub mb-8">
            ログインして、続きを始めましょう。
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate">Email address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full px-4 py-2 bg-bone-sub border border-line rounded-md focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all placeholder:text-slate-sub/50"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-slate">Password</label>
                <Link href="#" className="text-xs text-forest hover:text-brass transition-colors">Forgot password?</Link>
              </div>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-2 bg-bone-sub border border-line rounded-md focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all placeholder:text-slate-sub/50"
              />
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="rounded border-line text-forest focus:ring-forest bg-bone-sub w-4 h-4"
              />
              <label htmlFor="remember" className="text-sm text-slate-sub select-none">ログイン状態を保持する</label>
            </div>

            <Button type="submit" className="w-full mt-2">
              Log in
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">
            <span className="text-xs text-slate-sub font-medium uppercase tracking-wider">or continue with</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-bone hover:bg-bone-sub border-line text-slate">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="bg-bone hover:bg-bone-sub border-line text-slate">
              <svg className="w-4 h-4 mr-2 text-[#181717]" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </Button>
          </div>

          <p className="mt-12 text-center text-sm text-slate-sub">
            アカウントをお持ちでない方は{' '}
            <Link href="/signup" className="text-forest font-semibold hover:text-brass transition-colors">新規登録</Link>
          </p>
        </div>
      </div>

      {/* Right Column: Visual */}
      <div className="hidden lg:flex w-1/2 bg-forest text-bone flex-col justify-between p-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-brass" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="100" y1="500" x2="900" y2="500" />
            <circle cx="500" cy="500" r="300" strokeDasharray="4 4" />
            <circle cx="500" cy="500" r="100" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-lg mt-auto mb-auto">
          <h2 className="text-4xl font-noto-serif mb-6 leading-tight">
            散らかった連絡、見失うファイル。それらを手放す時間です。
          </h2>
          <p className="text-bone-sub/70 text-lg leading-relaxed">
            Atelier は、個人クリエイターが本来の「作る」時間に集中するためのクライアントワーク OS です。
          </p>
        </div>
        
        <div className="relative z-10 flex justify-between items-center text-sm text-bone-sub/50">
          <span>© 2026 Atelier Inc.</span>
          <span className="font-mono">atelier.studio</span>
        </div>
      </div>
    </div>
  );
}
