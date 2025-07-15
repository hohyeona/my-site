'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase-browser';

type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  thumbnail_url?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-30 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: 게시글 리스트 */}
      <div className="md:col-span-2 space-y-8">
        <ul className="space-y-6">
          <li className="flex flex-col md:flex-row gap-5 bg-[#f8f9fa] p-4">
            <div className="w-full md:w-80 h-52 md:h-60 flex-shrink-0 bg-gray-200">
              <img
                src="/img/index01.png"
                alt="포스트 썸네일"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mt-2 mb-3">Ideas</div>
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-4">
                <a href="#">AI를 활용한 웹사이트 자동화 제작기</a>
              </h3>
              <p className="text-base text-gray-600 mb-4">
                반복적인 퍼블리싱 업무를 줄이고, 고객 맞춤형 콘텐츠를 손쉽게 업데이트할 수 있는 구조를 어떻게 설계했는지에 대한 구체적인 사례 중심 소개입니다.
              </p>
              <div className="text-base text-gray-400">2025.7.10</div>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-5 bg-[#f8f9fa] p-4">
            <div className="w-full md:w-80 h-52 md:h-60 flex-shrink-0 bg-gray-200">
              <img
                src="/img/index02.png"
                alt="포스트 썸네일"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mt-2 mb-3">Ideas</div>
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-4">
                <a href="#">Midjourney를 활용하여 콘텐츠 작업기</a>
              </h3>
              <p className="text-base text-gray-600 mb-4">
                프롬프트 설계 방법부터 반복 학습을 통해 얻은 실전 노하우까지. 디자이너가 아니더라도 누구나 쓸 수 있는 접근법과 예시들을 포함합니다.
              </p>
              <div className="text-base text-gray-400">2025.7.5</div>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-5 bg-[#f8f9fa] p-4">
            <div className="w-full md:w-80 h-52 md:h-60 flex-shrink-0 bg-gray-200">
              <img
                src="/img/index03.png"
                alt="포스트 썸네일"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mt-2 mb-3">Technology</div>
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-4">
                <a href="#">프로덕션이라는 개념은</a>
              </h3>
              <p className="text-base text-gray-600 mb-4">
                프로덕션이라는 개념은 무엇이고, 왜 지금이 그 시작점인지에 대한 철학적 배경과 실행 로드맵을 함께 담았습니다. GPT, 이미지 생성 AI, 자동화 툴을 통합하는 관점에서의 생산 구조를 다룹니다.
              </p>
              <div className="text-base text-gray-400">2025.6.30</div>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-5 bg-[#f8f9fa] p-4">
            <div className="w-full md:w-80 h-52 md:h-60 flex-shrink-0 bg-gray-200">
              <img
                src="/img/index04.png"
                alt="포스트 썸네일"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mt-2 mb-3">Technology</div>
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-4">
                <a href="#">AI 템플릿 개발부터 실제 판매까지의 과정</a>
              </h3>
              <p className="text-base text-gray-600 mb-4">
                어떤 기술 스택을 사용했고, 마케팅은 어떻게 했으며, 고객 피드백을 어떻게 반영했는지 전 과정을 투명하게 공유하는 실전 사례입니다.
              </p>
              <div className="text-base text-gray-400">2025.6.19</div>
            </div>
          </li>                  

        </ul>
      </div>

      {/* Right: Sidebar */}
      <aside className="bg-gray-50 space-y-6 p-8 hidden md:block">
        {/* Search */}
        <div>
          <h5 className="font-bold mb-2">Search</h5>
          <form className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-3 py-2 text-sm rounded-l"
            />
            <button type="submit" className="bg-black text-white px-4 rounded-r text-sm">
              Go
            </button>
          </form>
        </div>

        {/* Recent Posts */}
        <div>
          <h5 className="font-bold mb-2">Recent Posts</h5>
          <div className="space-y-3">
            {posts.slice(0, 3).map((p) => (
              <div key={p.id} className="flex gap-3">
                <Image
                  src={p.thumbnail_url || '/img/index01.png'}
                  width={60}
                  height={60}
                  className="rounded object-cover"
                  alt="Recent post"
                />
                <div className="text-sm">
                  <p className="font-medium">
                    <Link href={`/insight/${p.id}`}>{p.title}</Link>
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(p.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h5 className="font-bold mb-2">Categories</h5>
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

        {/* Tags */}
        <div>
          <h5 className="font-bold mb-2">Tags</h5>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="#" className="bg-gray-200 px-2 py-1 rounded">
              AI
            </Link>
            <Link href="#" className="bg-gray-200 px-2 py-1 rounded">
              chatbot
            </Link>
            <Link href="#" className="bg-gray-200 px-2 py-1 rounded">
              design
            </Link>
            <Link href="#" className="bg-gray-200 px-2 py-1 rounded">
              web
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
