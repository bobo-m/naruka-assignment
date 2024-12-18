"use client"
import { CirclePlus, CircleX } from "lucide-react";
import { useState } from "react"
import Dropdown from "./Dropdown";
import platforms from "@/data/platforms";
import isURL from "validator/lib/isURL";

const SocialsForm = () => {
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, identifier: "facebook", platformName: "Facebook", link: '', linkError: "" },
    { id: 2, identifier: "twitter", platformName: "Twitter", link: '', linkError: "" },
    { id: 3, identifier: "instagram", platformName: "Instagram", link: '', linkError: "" },
    { id: 4, identifier: "youtube", platformName: "Youtube", link: '', linkError: "" },
  ]);

  const handlePlatformChange = (id, identifier) => {
    setSocialLinks((prev) => (
      prev.map((item) => (
        item.id === id ? { ...item, identifier, platformName: platforms.find((platform) => platform.identifier === identifier).option } : item
      ))
    ))
  }

  const handleLinkChange = (id, link) => {
    setSocialLinks((prev) => (
      prev.map((item) => (
        item.id === id ? { ...item, link, linkError: (link && !isURL(link)) ? "Invalid URL format" : "" } : item
      ))
    ))
  }



  const addNewSocialLink = (e) => {
    e.preventDefault();
    setSocialLinks((prev) => { return [...prev, { id: prev.length + 1, platform: '', platformName: '', link: '' }] })
  }

  return (
    <form className="w-full text-sm">
      {socialLinks.map((socialLink) => (

        <fieldset key={socialLink.id} className="flex flex-col">
          <legend>Social Link {socialLink.id}</legend>
          <div className="w-full flex items-center h-10 gap-2 mt-2 mb-3">
            <span className="flex items-center h-full grow border border-gray-300 rounded-sm">
              <Dropdown
                data={platforms}
                placeholder={"Select..."}
                defaultValue={socialLink.identifier}
                handleSelect={(identifier) => handlePlatformChange(socialLink.id, identifier)} />
              <hr className="mx-2 w-[1px] h-4/5 bg-gray-300" />
              <span className="h-full grow">
                <input
                  type="url"
                  placeholder="Platform link/url"
                  className="p-2 h-full w-full"
                  value={socialLink.link}
                  onChange={(e) => {
                    handleLinkChange(socialLink.id, e.target.value)
                  }}
                />
                <p className="text-destructive text-sm">{socialLink.linkError}</p>
              </span>
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSocialLinks((prev) => (prev.filter((link) => (link.id !== socialLink.id))))
              }}
              className="bg-gray-200 rounded-sm h-full px-3"
            >
              <CircleX className="w-5" />
            </button>
          </div>

        </fieldset>

      ))}
      <button onClick={(e) => addNewSocialLink(e)} className="w-full flex justify-center items-center bg-gray-200 mt-5 h-8 text-sm gap-2 rounded-sm">
        <CirclePlus className="w-5" />
        Add New Social Link
      </button>
    </form>
  )
}

export default SocialsForm