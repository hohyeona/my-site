'use client';

import Image from 'next/image';

const stories = [
  {
    date: '2025. 6. 10.',
    title: '게임 토크노믹스의 진화: 레전드 오브 이미르의 2세대 위믹스 경제',
    image: 'https://framerusercontent.com/images/72GwBNnVS1ttvu88pCnvIR7zk.png',
    href: './stories/news-20250610',
  },
  {
    date: '2025. 4. 25.',
    title: '거버넌스를 담은 플랫폼, 위퍼블릭 - 블록체인으로 사회 문제에 답하다',
    image: 'https://framerusercontent.com/images/5mNyrcP7y4Dym3POlE19mkEfJLQ.png',
    href: './stories/news-20250422',
  },
  {
    date: '2025. 4. 25.',
    title: '인피니티 플레이: 게임의 경계를 허무는 위메이드의 담대한 도전',
    image: 'https://framerusercontent.com/images/0bZxQ6xGSC2Vg5E5HcMY5D1Jmu0.jpg',
    href: './stories/infinity-play-wemade-s-bold-challenge-to-redefine-gaming',
  },
  {
    date: '2025. 3. 31.',
    title: "위메이드 x 엔비디아: AI 보스 몬스터 '아스테리온'으로 미르5의 게임 혁신을 이끌다",
    image: 'https://framerusercontent.com/images/80dVJTnizExYk8gwEcnOGjvLY.png',
    href: './stories/news-20250331',
  },
];

export default function StoriesSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-[100px]">
      <h2 className="text-3xl font-bold text-center mb-12">STORIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {stories.map((story, idx) => (
          <a
            key={idx}
            href={story.href}
            className="group block overflow-hidden rounded-[32px] bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
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
