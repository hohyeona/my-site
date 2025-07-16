'use client';

import Image from 'next/image';

const stories = [
  {
    date: '2025. 6. 30.',
    title: 'AI 기반 자동화 웹사이트 제작기',
    image: '/img/index01.png',
    href: './stories/ai-automation-website-case-study',
  },
  {
    date: '2025. 5. 22.',
    title: 'Midjourney 활용기와 노하우',
    image: '/img/index02.png',
    href: './stories/midjourney-workflow-and-philosophy',
  },
  {
    date: '2025. 4. 18.',
    title: 'AI 프로덕션이란 무엇인가',
    image: '/img/index03.png',
    href: './stories/ai-solo-production-strategy',
  },
  {
    date: '2025. 3. 05.',
    title: '제작→판매까지 전 과정 공유',
    image: '/img/index04.png',
    href: './stories/template-business-journey',
  },
];

export default function NewsStoriesSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-[100px] bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">INSIGHT & WORKLOG</h2>
      <p className="text-center text-gray-500 text-base mb-12">
        AI, 창작, 그리고 프로덕션 작업의 모든 과정과 관점을 기록합니다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {stories.map((story, idx) => (
          <a key={idx} href={story.href} className="group block overflow-hidden rounded-[32px] bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[300px]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-[32px]"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{story.date}</p>
              <h3 className="text-base font-semibold leading-snug group-hover:text-blue-600 transition-colors">
                {story.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
