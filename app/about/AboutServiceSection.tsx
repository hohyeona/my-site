'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full bg-white mt-32 py-16">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row gap-28 items-start">
        
        {/* 좌측 이미지 */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/hero_left.png"
            alt="Hero Left"
            width={520}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* 우측 텍스트 및 이미지 */}
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-sm uppercase tracking-wider text-gray-500">Welcome</span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-black">
            누구나 손쉽게 AI를 활용할 수 있도록 돕는 크리에이티브 스튜디오입니다.
          </h1>
          <p className="text-gray-600">
            우리는 일상적인 워크플로에 AI를 자연스럽게 통합할 수 있도록 직관적인 도구와 서비스를 제공합니다.
            기획부터 실행까지, 창작자와 기업 모두가 AI를 효과적으로 활용할 수 있도록 지원합니다.
            AIBridge는 자동화, 디자인 사고, 사람 중심의 혁신을 통해 더 나은 내일을 만들어갑니다.
          </p>
          <div>
            <Image
              src="/img/hero_right.png"
              alt="Hero Right"
              width={520}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* 하단 설명 텍스트 */}
      <div className="mt-16 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          AIBridge는 AI를 창작의 도구로 삼는 이들을 위한 플랫폼입니다.
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          창의적인 작업을 보다 빠르고 효과적으로 수행할 수 있도록, AIBridge는 다양한 자동화 도구와 교육, 맞춤형 솔루션을 제공합니다.
          누구나 쉽게 접근할 수 있도록 설계된 우리의 시스템은 창작자의 상상력을 현실로 옮기는 데 최적화되어 있습니다.
        </p>
      </div>
    </section>
  );
}
