'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // 스크롤 감지해서 헤더 스타일 변경
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0); // 바꿔줌
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <>
      {/* 헤더 */}
      <header
                className={`fixed top-0 left-0 w-full z-50 h-[80px] transition-all duration-300 
    border-b ${scrolled ? 'bg-white/80 text-black border-gray-200' : 'bg-transparent text-black border-white/10'}`}
      >
        <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between h-full">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="AIBRIDGE Logo"
                width={150}
                height={50}
                className="object-contain cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex space-x-[80px] font-[500] text-[15px] font-sans">
            <Link href="/about" className="hover:text-gray-400">회사소개</Link>
            <Link href="/studio" className="hover:text-gray-400">스튜디오</Link>
            <Link href="/service" className="hover:text-gray-400">서비스</Link>
            <Link href="/portfolio" className="hover:text-gray-400">포트폴리오</Link>
            <Link href="/Insight" className="hover:text-gray-400">인사이트</Link>
            <Link href="/customer" className="hover:text-gray-400">고객지원</Link>
          </nav>

          {/* 모바일 햄버거 메뉴 */}
          <div
            className="hamburger flex flex-col gap-[5px] cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-[25px] h-[3px] bg-current block" />
            <span className="w-[25px] h-[3px] bg-current block" />
            <span className="w-[25px] h-[3px] bg-current block" />
          </div>
        </div>
      </header>

      {/* 모바일 사이드 메뉴 */}
<div
  className={`fixed inset-0 bg-white z-40 p-6 transition-transform duration-300 transform ${
    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
        <nav className="flex flex-col gap-4">
          <Link href="/about" onClick={() => setMenuOpen(false)}>회사소개</Link>
          <Link href="/studio" onClick={() => setMenuOpen(false)}>스튜디오</Link>
          <Link href="/service" onClick={() => setMenuOpen(false)}>서비스</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>포트폴리오</Link>
          <Link href="/Insight" onClick={() => setMenuOpen(false)}>인사이트</Link>
          <Link href="/customer" onClick={() => setMenuOpen(false)}>고객지원</Link>
        </nav>
      </div>
    </>
  );
}




