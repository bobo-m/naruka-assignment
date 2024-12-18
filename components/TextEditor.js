'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { BulletList } from '@tiptap/extension-bullet-list'
import { ListItem } from '@tiptap/extension-list-item'
import { Document } from '@tiptap/extension-document'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
import { Bold } from '@tiptap/extension-bold'
import { Italic } from '@tiptap/extension-italic'
import { Strike } from '@tiptap/extension-strike'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { OrderedList } from '@tiptap/extension-ordered-list'
import Toolbar from './Toolbar'

const TextEditor = ({ placeholder }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Placeholder.configure({
        placeholder: placeholder
      }),
      Paragraph,
      Text,
      BulletList,
      ListItem,
      OrderedList,
      Bold,
      Italic,
      Strike,
      Underline
    ],
    editorProps: {
      attributes: {
        class: 'w-full h-24 overflow-auto focus-within:outline-none p-2 placeholder:text-gray-300'
      }
    },
    content: '',
    immediatelyRender: false
  })

  return (
    <div className='w-full border border-gray-300 rounded-sm mt-2 focus-within:outline outline-2`'>
      <EditorContent editor={editor} />
      <Toolbar editor={editor} />
    </div>)
}

export default TextEditor
