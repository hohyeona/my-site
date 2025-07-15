// components/ServiceCards.tsx
'use client';

const cards = [
  {
    id: 1,
    title: 'AI 자동화 솔루션',
    image: '/img/service_a.png',
    desc: '업무 자동화 도구를 기획부터 구현까지 제공합니다.',
    link: '/services/ai-automation',
  },
  {
    id: 2,
    title: '맞춤형 웹사이트',
    image: '/img/service_b.png',
    desc: '브랜드 성격에 맞는 웹사이트를 빠르게 구축합니다.',
    link: '/services/website',
  },
  {
    id: 3,
    title: 'AI 도입 컨설팅',
    image: '/img/service_c.png',
    desc: '어떻게 도입해야 하나? 구조와 전략을 함께 설계합니다.',
    link: '/services/consulting',
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map(card => (
          <a
            key={card.id}
            href={card.link}
            className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <div
              className="h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="bg-black/50 w-full h-full p-6 flex flex-col justify-end text-white">
                <span className="text-lg font-semibold mb-2">0{card.id}.</span>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
