'use client';

export default function CustomerContact() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white">
      {/* Left: 텍스트 + 이미지 */}
      <div className="space-y-10">
        {/* 텍스트 */}
        <div>
          <p className="text-sm text-gray-500">Contact Us</p>
          <h2 className="text-4xl font-bold leading-tight">
            멋진 아이디어를 <span className="text-gradient">함께 실현해보시겠어요?</span><br />
            지금 연락 주세요!
          </h2>
        </div>

        {/* 이미지 */}
        <div
          className="w-full h-[500px] bg-gray-200 shadow-md"
          style={{
            backgroundImage: "url('/img/contact.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Right: Contact Form */}
      <form
        action="https://formspree.io/f/mgvzeyky"
        method="POST"
        className="space-y-6 bg-[#f8f9fa] p-8 shadow-lg"
      >
        <div className="grid grid-cols-1 gap-4">
          {/* 이름 */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              <i className="fas fa-user" />
            </span>
            <input
              type="text"
              name="name"
              placeholder="이름"
              required
              className="w-full pl-10 bg-[#f8f9fa] px-4 py-3 border-0 border-b border-gray-300 appearance-none outline-none focus:outline-none focus:border-black"
            />
          </div>

          {/* 전화 */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              <i className="fas fa-phone" />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="전화번호"
              required
              className="w-full pl-10 bg-[#f8f9fa] px-4 py-3 border-0 border-b border-gray-300 appearance-none outline-none focus:outline-none focus:border-black"
            />
          </div>

          {/* 이메일 */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              required
              className="w-full pl-10 bg-[#f8f9fa] px-4 py-3 border-0 border-b border-gray-300 appearance-none outline-none focus:outline-none focus:border-black"
            />
          </div>

          {/* 제목 */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              <i className="fas fa-pen" />
            </span>
            <input
              type="text"
              name="subject"
              placeholder="제목"
              required
              className="w-full pl-10 bg-[#f8f9fa] px-4 py-3 border-0 border-b border-gray-300 appearance-none outline-none focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* 메시지 */}
        <div className="relative">
          <span className="absolute left-3 top-4 text-gray-400 text-sm">
            <i className="fas fa-comment-dots" />
          </span>
          <textarea
            name="message"
            placeholder="이곳에 내용을 적어주세요"
            rows={6}
            required
            className="w-full pl-10 bg-[#f8f9fa] px-4 py-3 border-0 border-b border-gray-300 appearance-none outline-none focus:outline-none focus:border-black"
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 hover:bg-gray-800 cursor-pointer"
        >
          전송
        </button>
      </form>
    </section>
  );
}
