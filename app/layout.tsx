// layout.tsx (수정본)

import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'My Gallery',
  description: 'Next.js + Tailwind 기반 갤러리',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
