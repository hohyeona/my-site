'use client';

import ProductSlider from './ProductSlider';

export default function RecommendationSection() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto flex items-center h-full px-6 gap-10">
        <div className="w-1/3 text-white text-3xl font-bold leading-snug">
          맞춤 추천 상품을  
          <br />
          확인해 보세요!
        </div>
        <div className="w-2/3">
          <ProductSlider />
        </div>
      </div>
    </section>
  );
}
