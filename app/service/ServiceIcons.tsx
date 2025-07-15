'use client';

export default function ServiceIcons() {
  const items = [
    {
      iconClass: 'fa-solid fa-robot',
      title: 'AI 기반 자동화',
      desc: '반복 업무를 GPT와 연동해 자동화합니다.',
    },
    {
      iconClass: 'fa-solid fa-laptop-code',
      title: '빠른 웹사이트 제작',
      desc: '반응형 + 브랜드 맞춤형 웹사이트 구축.',
    },
    {
      iconClass: 'fa-solid fa-user-gear',
      title: '브랜드 솔루션',
      desc: '포트폴리오 블로그 콘텐츠 구조 설계',
    },
    {
      iconClass: 'fa-solid fa-lightbulb',
      title: '실전형 컨설팅',
      desc: '도입 가능성과 워크플로우 컨설팅.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <HoverIconCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function HoverIconCard({ item }: { item: any }) {
  return (
    <div className="group space-y-4 transition-all duration-300 cursor-pointer p-6 rounded-lg hover:bg-[#4eccf2]">
      <div className="text-5xl text-[#4eccf2] transition-colors duration-300 group-hover:text-[#ffffff]">
        <i className={item.iconClass}></i>
      </div>
      <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#ffffff]">
        {item.title}
      </h4>
      <p className="text-gray-500 text-sm transition-opacity duration-300 group-hover:text-[#ffffff]">
        {item.desc}
      </p>
    </div>
  );
}
