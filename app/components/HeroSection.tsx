'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* 비디오 or 이미지 */}
        {isMobile ? (
          <Image
            src="/img/hero-mobile.png"
            alt="모바일 배경"
            fill
            className="object-cover"
          />
        ) : (
          <video
            src="/videos/bg-video.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}

        {/* 오버레이 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* 텍스트 콘텐츠 */}
        <div className="relative z-20 flex flex-col items-center justify-center text-white h-full text-center px-4 pt-20">
          <h1 className="text-5xl font-bold mb-4">AIBRIDGE</h1>
          <p className="text-xl leading-relaxed">
            AI로 연결하고, 설계하고, 실현합니다.
            <br />
            자동화 · GPT 프롬프트 기획 · 웹사이트 제작
          </p>
          <div className="flex gap-4 mt-6">
            <a href="/portfolio" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
              포트폴리오 보기
            </a>
            <a href="/customer" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
              AI 컨설팅 문의
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
