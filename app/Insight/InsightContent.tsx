'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  thumbnail_url?: string;
};

// 정적 예시 데이터
const staticPosts: Post[] = [
  {
    id: 'post1',
    title: 'GPT로 만든 AI 제안서 키트 공개!',
    content: 'AIBRIDGE의 자동화 제안서 템플릿을 통해 클라이언트 응답률 200% 증가!',
    created_at: '2025-07-10',
    thumbnail_url: '/img/index01.png',
  },
  {
    id: 'post2',
    title: '클라이언트가 감탄한 프롬프트 자동화',
    content: '단 10분 만에 브랜딩 콘텐츠 자동 제작하는 기술 공개',
    created_at: '2025-07-08',
    thumbnail_url: '/img/index02.png',
  },
  {
    id: 'post3',
    title: 'AI 미니 SaaS 3종 런칭 완료',
    content: '노코드 시대, 자동화 시대를 여는 마이크로 웹앱 사례 공개',
    created_at: '2025-07-05',
    thumbnail_url: '/img/index03.png',
  },
  {
    id: 'post4',
    title: 'AIBRIDGE는 어떻게 일하는가?',
    content: '기획부터 실행까지, AI 기반 1인 프로덕션의 실제 업무 공개',
    created_at: '2025-07-01',
    thumbnail_url: '/img/index04.png',
  },
];

export default function InsightContent() {
  const [posts, setPosts] = useState<Post[]>(staticPosts);

  useEffect(() => {
    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (SUPABASE_URL && SUPABASE_KEY) {
        const { createClient } = require('@supabase/supabase-js');
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

        const fetchPosts = async () => {
          const { data, error } = await supabase
            .from('insight_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (!error && data) {
            setPosts(data);
          }
        };

        fetchPosts();
      }
    } catch (error) {
      // Supabase 모듈 없음 or env 누락 시 무시
      console.warn('Supabase 비활성 상태:', error);
    }
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-30 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: 게시글 리스트 */}
      <div className="md:col-span-2 space-y-8">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-col md:flex-row gap-5 bg-[#f8f9fa] p-4 rounded-md shadow-sm"
            >
              <div className="w-full md:w-80 h-52 md:h-60 flex-shrink-0 bg-gray-200 overflow-hidden rounded">
                <Image
                  src={post.thumbnail_url || '/img/default.png'}
                  alt={post.title}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mt-2 mb-3">Insight</div>
                <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-4">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="text-base text-gray-600 mb-4">{post.content}</p>
                <div className="text-base text-gray-400">
                  {new Date(post.created_at).toLocaleDateString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: 사이드바 */}
      <aside className="bg-gray-50 space-y-6 p-8 hidden md:block rounded-lg shadow-sm">
        <div>
          <h5 className="font-bold mb-2">🔍 Search</h5>
          <form className="flex">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full border px-3 py-2 text-sm rounded-l border-gray-300"
            />
            <button type="submit" className="bg-black text-white px-4 rounded-r text-sm">
              Go
            </button>
          </form>
        </div>

        <div>
          <h5 className="font-bold mb-2">📂 Categories</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Ideas <span className="text-gray-400">(9)</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Technology <span className="text-gray-400">(3)</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Web <span className="text-gray-400">(5)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">🏷️ Tags</h5>
          <div className="flex flex-wrap gap-2 text-sm">
            {['AI', 'chatbot', 'design', 'web', 'automation'].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}