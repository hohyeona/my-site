'use client';

export default function SubscribeSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* 왼쪽 텍스트 */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            궁금한 점이 있다면 <span className="text-[#4eccf2]">메일 주세요!</span>
          </h2>
        </div>

        {/* 오른쪽 폼 */}
        <form
          className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: 구독 처리 로직 연결
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4eccf2]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#4eccf2] hover:bg-[#3dbddf] text-white font-semibold rounded-md text-sm transition-all"
          >
            Subscribe
          </button>
          <label className="flex items-center text-xs text-gray-600 mt-2 sm:mt-0">
            <input type="checkbox" required className="mr-2" />
            I agree to the{' '}
            <a href="/privacy-policy" target="_blank" className="underline ml-1 text-[#4eccf2]">
              Privacy Policy
            </a>
          </label>
        </form>
      </div>
    </section>
  );
}
