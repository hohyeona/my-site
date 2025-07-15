'use client';

import Image from 'next/image';

export default function AboutIntroSection() {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center h-[412px]"
      style={{ backgroundImage: "url('/img/customer.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 h-full flex justify-center items-center">
        <div className="text-white text-center">
          <span className="text-sm text-gray-300 mb-2 block">SUPPORT</span>
          <h1 className="text-4xl font-bold leading-snug mb-4 whitespace-pre-line">
            언제나 빠르게,
            <br />
            무엇보다 정확하게. 
          </h1>
          <p className="text-base text-gray-200">
           실질적인 해결을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}         