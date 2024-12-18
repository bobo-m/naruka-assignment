"use client"
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Dropdown = ({ placeholder, data, defaultValue, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue ? data.find((item) => defaultValue === item.identifier) : null)

  return (
    <div className={`w-full h-10 border border-r-0 rounded-e-none border-gray-300 relative rounded-sm ${isOpen ? 'z-20' : 'z-10'} dropdown`}>
      <span
        className='w-full h-full flex items-center gap-4 justify-center cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ?
          <li className='h-full w-full flex items-center gap-4 cursor-pointer'>
            {selectedOption.imgUrl && <img src={selectedOption.imgUrl} alt={selectedOption.option} className='w-5 p-0 ml-4' />}
            {selectedOption.option}
          </li> : placeholder}
        <ChevronDown />
      </span>
      {
        isOpen &&
        <ul className='list-none m-0 border border-gray-300 rounded-sm max-h-64 overflow-auto'>
          <li
            className='w-full block hover:bg-gray-500 bg-white cursor-pointer'
            onClick={() => {
              setSelectedOption(null)
              setIsOpen(false)
            }}
          >{placeholder}</li>
          {data.map((item) => (
            <li
              key={item.option}
              className='w-full hover:bg-gray-500 bg-white cursor-pointer flex items-center pl-4 gap-2 py-1'
              onClick={() => {
                setSelectedOption(item);
                handleSelect(item.identifier)
                setIsOpen(false);
              }}
            >
              {item.imgUrl && <img src={item.imgUrl} alt={item.option} className='w-5' />}
              {item.option}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Dropdown