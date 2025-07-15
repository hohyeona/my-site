'use client';

import Image from 'next/image';

export default function AboutIntroSection() {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center h-[412px]"
      style={{ backgroundImage: "url('/img/portfolio.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 h-full flex justify-center items-center">
        <div className="text-white text-center">
          <span className="text-sm text-gray-300 mb-2 block">PORTFOLIO</span>
          <h1 className="text-4xl font-bold leading-snug mb-4 whitespace-pre-line">
            결과로 증명하는 감각,
            <br />
            기획부터 실행까지. 
          </h1>
          <p className="text-base text-gray-200">
            AIBRIDGE의 실제 사례를 소개합니다.
          </p>
        </div>
      </div>
    </section>
  );
}     