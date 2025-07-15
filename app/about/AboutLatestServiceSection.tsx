'use client';

import Image from 'next/image';

const services = [
  {
    title: 'A Portfolio of Creativity',
    description:
      'Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency',
  },
  {
    title: 'My Portfolio of Innovation',
    description:
      'My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses',
  },
  {
    title: 'A Showcase of My Projects',
    description:
      'In this portfolio, you’ll find a curated selection of projects that highlight my skills in responsive web design',
  },
];

export default function AboutLatestServiceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* 타이틀 영역 */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold">Latest Service</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Inspiring The World One <br /> Project
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto">
            Business consulting consultants provide expert advice and guida businesses to help them improve their performance,
            efficiency, and organizational
          </p>
        </div>

        {/* 서비스 카드 + 이미지 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 서비스 카드 */}
          <div className="space-y-8">
            {services.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-blue-600 mr-2">{`0${i + 1}.`}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 오른쪽 이미지 */}
          <div className="flex justify-center">
            <Image
              src="/img/latest-user-image.png" // 실제 경로에 맞게 조정
              alt="latest-user-image"
              width={500}
              height={600}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
