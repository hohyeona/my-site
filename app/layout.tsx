// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'AIBridge',
  description: 'AI 기반 크리에이티브 스튜디오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSans.className}>
      <head>
        {/* ✅ 여기다 넣으면 됨 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>      
      <body className="bg-white text-black">
        <Header />
        <div className="pt-[80px] min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}
