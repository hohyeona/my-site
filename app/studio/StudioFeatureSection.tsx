'use client';

export default function FeatureSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 왼쪽 컬럼 */}
        <div>
          <h2 className="text-3xl font-bold mb-6">제공 서비스</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>AI 내장형 홈페이지 제작</li>
            <li>GPT 기반 제안서 자동화 시스템</li>
            <li>스타트업용 MVP 웹앱 제작</li>
            <li>1인 브랜딩 자동화 패키지</li>
            <li>Notion & Airtable 기반 업무 시스템</li>
            <li>AI 도입 컨설팅 및 실전 적용</li>
          </ul>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">작업 방식</h4>
            <p className="text-gray-600">
              고객 요청 → 기획 → 프로토타입 → 런칭 → 유지보수  
              <br />
              각 단계마다 피드백을 기반으로 구조화된 작업을 진행합니다.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">작업 철학</h4>
            <p className="text-gray-600">
              “속도보다 정확, 툴보다 사람, 결과보다 프로세스”  
              <br />
              기술은 목적이 아닌 수단이며, 고객의 문제를 명확히 해결하는 방식으로 접근합니다.
              <br />표면적인 기능보다, 본질적인 개선에 집중합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
