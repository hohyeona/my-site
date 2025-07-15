'use client';

import Image from 'next/image';

const portfolioItems = [
  {
    name: '신한은행 VML',
    role: 'Frontend Development',
    image: '/img/portfolio_01.png',
    link: '#',
  },
  {
    name: '안랩애드',
    role: 'From Planning to Launch',
    image: '/img/portfolio_02.png',
    link: '#',
  },
  {
    name: '분당서울대학병원',
    role: 'Project Lead',
    image: '/img/portfolio_03.png',
    link: '#',
  },
  {
    name: '성남시의료원',
    role: 'Project Lead',
    image: '/img/portfolio_04.png',
    link: '#',
  },
  {
    name: '새마을운동중앙회',
    role: 'Frontend Development',
    image: '/img/portfolio_05.png',
    link: '#',
  },
  {
    name: '서울시 아리수',
    role: 'Frontend Development',
    image: '/img/portfolio_06.png',
    link: '#',
  },
  {
    name: '스카우트연맹 잼버리',
    role: 'Fullstack Manager',
    image: '/img/portfolio_07.png',
    link: '#',
  },
  {
    name: '인천가족지원센터',
    role: 'Fullstack Development',
    image: '/img/portfolio_08.png',
    link: '#',
  },
  {
    name: '한국 모바일 산업협회',
    role: 'Fullstack Development',
    image: '/img/portfolio_09.png',
    link: '#',
  },
  {
    name: '서울 사회복지 대학원',
    role: 'Fullstack Development',
    image: '/img/portfolio_10.png',
    link: '#',
  },
  {
    name: '안양시 자동배차 시스템',
    role: 'Project Lead',
    image: '/img/portfolio_11.png',
    link: '#',
  },
  {
    name: 'VV-ENTER 아포키',
    role: 'Fullstack Development',
    image: '/img/portfolio_12.png',
    link: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 인트로 텍스트 */}
        <div className="text-center mb-16"> 
          <span className="block text-sm text-gray-500 uppercase tracking-widest mb-2">
            Selected Works
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            다양한 클라이언트를 위한 <br />
            <span className="inline-block text-indigo-600">실행 중심의 결과물</span>
          </h1>
        </div>

        {/* 포트폴리오 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="block border border-gray-300 bg-[#f8f9fa] overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-[360px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
