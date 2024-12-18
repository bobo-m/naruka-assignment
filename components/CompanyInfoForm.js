"use client"

import { useState } from 'react'
import Dropzone from './Dropzone'
import TextEditor from './TextEditor'

const CompanyInfoForm = () => {
  const [companyName, setCompanyName] = useState('');
  return (
    <form className='w-full'>
      <h3 className='font-md text-md'>Logo & Banner Image</h3>
      <div className='w-full flex gap-2 h-64 box-border'>
        <span className='w-1/4'>
          <Dropzone maxSizeMB={5} dimensions={400} label="Upload Document" />
        </span>
        <span className='grow max-w-3/4 max-h-full'>
          <Dropzone maxSizeMB={5} dimensions={400} label="Banner Image" />
        </span>
      </div>
      <hr className='my-7' />
      <label htmlFor='companyName'>Company Name
        <input
          type="text"
          name='companyForm'
          className='w-full h-10 border border-gray-300 rounded-sm mb-4 mt-2 box-border p-2'
          placeholder='Company name...'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>

      <label htmlFor="aboutUs">About Us
        <TextEditor placeholder="Write down about your company here. Let the candidate know who you are..." />
      </label>
    </form>
  )
}

export default CompanyInfoForm