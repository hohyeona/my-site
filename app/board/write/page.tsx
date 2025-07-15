'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { supabase } from '@/lib/supabase-browser'
import { v4 as uuidv4 } from 'uuid'

// 동적 import로 SSR 방지
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false })

export default function WriteInsightPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState<File[]>([])
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3) // 최대 3개 제한
      setImages(selectedFiles)
    }
  }

  const handleSubmit = async () => {
    // 1. 이미지 Supabase Storage에 업로드
    const imageUrls = await Promise.all(
      images.map(async (file) => {
        const filePath = `insight/${uuidv4()}-${file.name}`
        const { error } = await supabase.storage.from('insight-images').upload(filePath, file)
        if (error) return null
        const { data } = supabase.storage.from('insight-images').getPublicUrl(filePath)
        return data.publicUrl
      })
    )

    // 2. 게시글 저장
    const { error } = await supabase.from('insight_posts').insert({
      title,
      content,
      image1_url: imageUrls[0] || null,
      image2_url: imageUrls[1] || null,
      image3_url: imageUrls[2] || null,
    })

    if (!error) {
      router.push('/insight')
    } else {
      alert('등록 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-2xl font-bold">인사이트 글쓰기</h1>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />

      <Editor content={content} onChange={setContent} />

      <div>
        <label className="block mb-1 font-medium">이미지 업로드 (최대 3개)</label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        등록하기
      </button>
    </div>
  )
}
