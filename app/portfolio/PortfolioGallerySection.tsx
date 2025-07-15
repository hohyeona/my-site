'use client';

import Image from 'next/image';

const portfolioItems = [
  {
    name: 'John Lewis',
    role: 'Game Developer',
    image: '/img/portfolio/team-1.jpg',
    link: '#',
  },
  {
    name: 'Angie Foster',
    role: 'Graphic Designer',
    image: '/img/portfolio/team-2.jpg',
    link: '#',
  },
  {
    name: 'Kate Barnes',
    role: 'Web Designer',
    image: '/img/portfolio/team-3.jpg',
    link: '#',
  },
  {
    name: 'Daisy Roberts',
    role: 'AI Artist',
    image: '/img/portfolio/team-4.jpg',
    link: '#',
  },
  {
    name: 'Lucy Gilmore',
    role: 'Project Manager',
    image: '/img/portfolio/team-5.jpg',
    link: '#',
  },
  {
    name: 'Evan Erickson',
    role: 'Web Engineer',
    image: '/img/portfolio/team-6.jpg',
    link: '#',
  },
];

export default function PortfolioGridSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item, idx) => (
          <a
            href={item.link}
            key={idx}
            className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
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
    </section>
  );
}
