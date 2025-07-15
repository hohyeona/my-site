'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { supabase } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

// React Quill은 SSR 방지 위해 dynamic import
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function WriteInsightPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageFiles, setImageFiles] = useState<(File | null)[]>([null, null, null])
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  const handleImageChange = (index: number, file: File | null) => {
    const newFiles = [...imageFiles]
    newFiles[index] = file
    setImageFiles(newFiles)
  }

  const handleSubmit = async () => {
    setUploading(true)

    // 이미지 업로드 처리
    const imageUrls: string[] = []
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i]
      if (file) {
        const { data, error } = await supabase.storage
          .from('insight-images') // 버킷 이름
          .upload(`public/${Date.now()}_${file.name}`, file)

        if (error) {
          alert(`이미지 ${i + 1} 업로드 실패: ${error.message}`)
          setUploading(false)
          return
        }

        const url = supabase.storage
          .from('insight-images')
          .getPublicUrl(data.path).data.publicUrl

        imageUrls[i] = url
      } else {
        imageUrls[i] = ''
      }
    }

    // DB에 저장
    const { error } = await supabase.from('insight_posts').insert([
      {
        title,
        content,
        image1_url: imageUrls[0],
        image2_url: imageUrls[1],
        image3_url: imageUrls[2],
      },
    ])

    if (error) {
      alert('게시물 저장 실패: ' + error.message)
    } else {
      alert('성공적으로 저장됨')
      router.push('/insight')
    }

    setUploading(false)
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">글 작성하기</h1>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full border px-3 py-2 mb-4 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        className="mb-6"
        placeholder="내용을 작성하세요..."
      />

      <div className="space-y-2 mb-6">
        {[0, 1, 2].map((i) => (
          <input
            key={i}
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(i, e.target.files?.[0] || null)}
            className="block"
          />
        ))}
      </div>

      <button
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={uploading}
      >
        {uploading ? '업로드 중...' : '저장하기'}
      </button>
    </div>
  )
}
