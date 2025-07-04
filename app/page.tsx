export default function Home() {
  return (
    <>
      {/* 메인 이미지 */}
<video
  src="/videos/bg-video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[800px] object-cover"
></video>

      {/* 갤러리 */}
      <div className="max-w-[1111px] mx-auto mt-[60px] mb-[80px] flex flex-wrap gap-[15px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white w-[calc((100%-45px)/4)] h-[200px] rounded-lg shadow-md
              sm:w-[calc((100%-30px)/3)] 
              max-sm:w-[calc((100%-15px)/2)] 
              max-[500px]:w-full"
          />
        ))}
      </div>

      {/* 여백 */}
      <div className="h-[100px]" />
    </>
  );
}
