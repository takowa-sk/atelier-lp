import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-forest text-bone py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-noto-serif font-bold text-2xl tracking-tight mb-4 inline-block">
              Atelier.
            </Link>
            <p className="text-bone-sub/80 text-sm max-w-xs">
              A client work OS for independent creators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase text-brass">Product</h4>
            <ul className="space-y-4 text-sm text-bone-sub/80">
              <li><Link href="/#features" className="hover:text-bone transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-bone transition-colors">Pricing</Link></li>
              <li><Link href="/login" className="hover:text-bone transition-colors">Log in</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase text-brass">Company</h4>
            <ul className="space-y-4 text-sm text-bone-sub/80">
              <li><Link href="/case-studies" className="hover:text-bone transition-colors">In Practice</Link></li>
              <li><Link href="#" className="hover:text-bone transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-bone transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase text-brass">Legal</h4>
            <ul className="space-y-4 text-sm text-bone-sub/80">
              <li><Link href="#" className="hover:text-bone transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-bone transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-forest-sub pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-bone-sub/50">
          <p>© 2026 Atelier Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-noto-serif italic">Crafted for independent creators.</p>
        </div>
      </Container>
    </footer>
  );
}
