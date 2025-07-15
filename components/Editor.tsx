'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

export default function Editor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    autofocus: true,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
    // 🔥 이 줄 추가
    immediatelyRender: false,
  });

  return (
    <div className="border rounded p-4 bg-white">
      <EditorContent editor={editor} />
    </div>
  );
}
