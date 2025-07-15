// app/components/ProductSlider.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const products = [
  {
    brand: 'AIBRIDGE TEMPLATE',
    name: '스타트업 랜딩 페이지 디자인 v1',
    image: '/img/product01.png',
  },
  {
    brand: 'AIBRIDGE PROMPT KIT',
    name: 'GPT 프롬프트 자동화 키트',
    image: '/img/product02.png',
  },
  {
    brand: 'AIBRIDGE AI TOOL',
    name: 'AI 제안서 생성기 SaaS',
    image: '/img/product03.png',
  },
];

export default function ProductSlider() {
  return (
<Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {products.map((product, index) => (
    <SwiperSlide key={index}>
      <div className="text-white">
        <div className="w-full h-[340px] relative mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sm font-semibold">{product.brand}</div>
        <div className="text-base">{product.name}</div>
        <div className="text-lg font-bold">{product.price}</div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  );
}