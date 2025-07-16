'use client';

import Image from 'next/image';

export default function SkillSection() {
  return (
    <section className="mt-16 w-full bg-[#f8f9fa] py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* 왼쪽 설명 영역 */}
          <div className="w-full xl:w-1/2">
            <div className="mb-6">
              <span className="text-sm text-gray-500 block mb-2">Tools & Environment</span>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                사용하는 기술과 도구 <br />작업에 적용되는 환경
              </h2>
              <p className="text-gray-800">
                기획, 디자인, 개발, 배포, 자동화까지 전 과정을 스튜디오 체제로 운영합니다.
                <br />
                아래 도구들은 다양한 프로젝트에 직접 적용하며 검증한 실전형 기술 스택입니다.
              </p>
            </div>
          </div>

          {/* 오른쪽 카드 영역 */}
          <div className="w-full xl:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                icon: '/img/studio_a.png',
                title: 'Next.js & Tailwind CSS',
                desc: '반응형 웹사이트, 웹앱, 프론트엔드 SPA를 빠르게 구축하기 위한 핵심 프레임워크 조합입니다.',
                },
                {
                icon: '/img/studio_b.png',
                  title: 'OpenAI API & GPT',
                  desc: '프롬프트 설계, 자동화 시나리오, 고객지원 챗봇 등 다양한 AI 도구를 업무에 통합합니다.',
                },
                {
                icon: '/img/studio_c.png',
                  title: 'Notion & Airtable',
                  desc: '문서 자동화, 데이터베이스 관리, 워크플로우 설계 등 협업 중심의 업무 구조에 활용합니다.',
                },
                {
                icon: '/img/studio_d.png',
                  title: 'Vercel & GitHub',
                  desc: '코드 버전 관리 및 CI/CD 배포 자동화에 사용되며, 유지보수가 쉬운 구조를 갖추고 있습니다.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                  <div className="mb-4">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-800 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
