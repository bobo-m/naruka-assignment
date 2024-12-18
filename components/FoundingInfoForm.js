"use client"
import { Link2 } from "lucide-react"
import TextEditor from "./TextEditor"
import { useState } from "react"
import isURL from "validator/lib/isURL"

const FoundingInfoForm = () => {
  const [organizationType, setOrganizationType] = useState('')
  const [industryType, setIndustrytype] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [website, setWebsite] = useState('')
  const [websiteError, setWebsiteError] = useState(null)
  return (
    <form className="w-full grid md:grid-cols-3 text-sm box-border gap-x-4 gap-y-5">
      <span className="flex flex-col">
        <label htmlFor="organizationType">Organization Type</label>
        <select
          name="organizationType"
          id="organizationType"
          value={organizationType}
          onChange={(e) => setOrganizationType(e.target.value)}
          className="rounded-sm p-2 border border-gray-300 h-10 mt-2"
        >
          <option value="" disabled >Select...</option>
          <option value="corporation">Corporation</option>
          <option value="nonprofit">Nonprofit Organization</option>
          <option value="partnership">Partnership</option>
          <option value="soleProprietorship">Sole Proprietorship</option>
          <option value="governmentAgency">Government Agency</option>
          <option value="educationalInstitution">Educational Institution</option>
        </select>
      </span>
      <span className="flex flex-col">
        <label htmlFor="industryType">Industry Type</label>
        <select
          name="industryType"
          id="industryType"
          value={industryType}
          onChange={(e) => setIndustrytype(e.target.value)}
          className="rounded-sm p-2 border border-gray-300 h-10 mt-2"
        >
          <option value="" disabled>Select...</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="finance">Finance</option>
          <option value="retail">Retail</option>
          <option value="realEstate">Real Estate</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="consulting">Consulting</option>
        </select>
      </span>
      <span className="flex flex-col">
        <label htmlFor="teamSize">Team Size</label>
        <select
          name="teamSize"
          id="teamSize"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="rounded-sm p-2 border border-gray-300 h-10 mt-2"
        >
          <option value="" disabled>Select...</option>
          <option value="1-5">1-5 Members</option>
          <option value="6-10">6-10 Members</option>
          <option value="11-20">11-20 Members</option>
          <option value="21-50">21-50 Members</option>
          <option value="51-100">51-100 Members</option>
          <option value="100+">More than 100 Members</option>
        </select>
      </span>
      <span className="flex flex-col">
        <label htmlFor="yearOfEstablishment">Year Of Establishment</label>
        <input
          type="date"
          name="yearOfEstablishment"
          id="yearOfEstablishment"
          placeholder="dd/mm/yyyy"
          className="border border-gray-300 h-10 mt-2 p-2 rounded-sm placeholder:text-gray-200"
        />
      </span>
      <span className="flex flex-col">
        <label htmlFor="companyWebsite">Company Website</label>
        <span className="flex border border-gray-300 h-10 mt-2 rounded-sm items-center pl-2 focus-within:outline outline-2 outline-black ">
          <Link2 />
          <input
            type="text"
            name="companyWebsite"
            id="companyWebsite"
            placeholder="Website url..."
            className="h-full grow p-2 focus:outline-none"
            value={website}
            onChange={(e) => {
              if (e.target.value && !isURL(e.target.value)) {
                setWebsiteError('Invalid URL')
              } else {
                setWebsiteError(null)
              }
              setWebsite(e.target.value)
            }}
          />
        </span>
        <p className="text-destructive text-sm mt-1">{websiteError}</p>
      </span>
      <span className="col-span-full">
        <label htmlFor="">Company Vision</label>
        <TextEditor placeholder="Tell us about your company vision..." />
      </span>
    </form>
  )
}

export default FoundingInfoForm