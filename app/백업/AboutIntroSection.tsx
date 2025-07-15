'use client';

import Image from 'next/image';

export default function AboutIntroSection() {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center h-[412px]"
      style={{ backgroundImage: "url('/img/about.png')" }}
    >
      {/* ✅ 오버레이 제거됨 */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 h-full flex items-center">
        <div className="w-full lg:w-1/2 text-white">
          <span className="text-sm text-gray-300 mb-2 block">ABOUT US</span>
          <h1 className="text-4xl font-bold leading-snug mb-4 whitespace-pre-line">
            사람과 AI,
            <br />
            그 사이를 잇는 다리가 되다.
          </h1>
          <p className="text-base text-gray-200 mb-6">
            우리는 연결합니다. 아이디어를, 세상을.
          </p>
          <a
            href="/project"
            className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-transparent hover:text-white border border-white transition"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
