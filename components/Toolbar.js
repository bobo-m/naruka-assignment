"use client"
import { Bold, Italic, Link, List, ListOrdered, Strikethrough, Underline } from 'lucide-react'
import React from 'react'

const Toolbar = ({ editor }) => {
  //console.log(editor.chain.focus)
  if (!editor) {
    return null
  }
  return (
    <div className='flex gap-3 px-3 items-center'>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`${editor.isActive('bold') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <Bold className='w-4' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run()
        }}
        className={`${editor.isActive('italic') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <Italic className='w-4' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run()
        }}
        className={`${editor.isActive('underline') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <Underline className='w-4' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        className={`${editor.isActive('strike') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <Strikethrough className='w-4' />
      </button>
      <hr className='w-[1px] h-4 bg-black' />
      <button onClick={(e) => {
        e.preventDefault();
        editor.chain().focus().toggleLink().run()
      }}>
        <Link className='w-4' />
      </button>
      <hr className='w-[1px] h-4 bg-black' />
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run()
        }}
        className={`${editor.isActive('bulletList') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <List className='w-4' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run()
        }}
        className={`${editor.isActive('orderedList') ? 'bg-gray-500' : ''} py-1 px-2 rounded-sm`}
      >
        <ListOrdered className='w-4' />
      </button>

    </div>
  )
}

export default Toolbar