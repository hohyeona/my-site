'use client';

import Image from 'next/image';

const logos = [
  '/img/company-logo-1.svg',
  '/img/company-logo-2.svg',
  '/img/company-logo-3.svg',
  '/img/company-logo-4.svg',
  '/img/company-logo-5.svg',
  '/img/company-logo-6.svg',
  '/img/company-logo-7.svg',
  '/img/company-logo-8.svg',
];

export default function AboutPartnerLogoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {logos.map((src, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={150}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
