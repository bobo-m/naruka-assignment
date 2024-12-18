"use client"
import React, { useState } from "react";
import CompanyInfoForm from "@/components/CompanyInfoForm.js"
import FoundingInfoForm from "@/components/FoundingInfoForm";
import SocialsForm from "@/components/SocialsForm";
import ContactForm from "@/components/ContactForm";
import { AtSign, CheckCheck, CircleUserRound, Globe, MoveRight, UserRound } from "lucide-react";
import Header from "@/components/Header";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      tag: "companyInfo",
      label: "Company Info",
      image: (isActive) => <UserRound className="w-5" color={`${isActive ? "#0B6BBF" : "black"}`} />
    },
    {
      id: 2,
      tag: "foundingInfo",
      label: "Founding Info",
      image: (isActive) => <CircleUserRound className="w-5" color={`${isActive ? "#0B6BBF" : "black"}`} />
    },
    {
      id: 3,
      tag: "socialInfo",
      label: "Social Media Info",
      image: (isActive) => <Globe className="w-5" color={`${isActive ? "#0B6BBF" : "black"}`} />
    },
    {
      id: 4,
      tag: "contact",
      label: "Contact",
      image: (isActive) => <AtSign className="w-5" color={`${isActive ? "#0B6BBF" : "black"}`} />
    },
  ]

  if (activeStep === 5) {
    return (
      <>
        <Header activeStep={activeStep} />
        <main className='md:w-4/5 mt-10 flex justify-center grow'>
          <div className="flex flex-col items-center md:w-1/2 gap-5 h-full justify-center -translate-y-20">
            <span className="bg-[#E6EFF9] w-24 h-24 rounded-full flex items-center justify-center">
              <CheckCheck color="#0B6BBF" size={36} />
            </span>
            <h2 className="font-medium text-xl">🎉 Congratulations, Your profile is 100% complete!</h2>
            <p className="text-sm text-slate-400 text-center">
              Donec hendrerit, ante mattis pellentesque eleifend, tortor urna
              malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc
              mauris arcu, mattis sed sem vitae.
            </p>
            <span className="flex items-center text-sm space-x-2 h-12">
              <button className="text-blue-500 px-5 rounded-sm bg-[#E6EFF9] h-full">View Dashboard</button>
              <button className="bg-blue-500 px-5 rounded-sm text-white flex items-center gap-2 h-full">
                Post Job {<MoveRight className="w-4" />}
              </button>
            </span>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header activeStep={activeStep} />
      <main className='w-full md:w-4/5 mt-10'>
        <nav className='w-full flex justify-center gap-1 md:gap-2'>
          {steps.map((step) => (
            <button
              key={step.id}
              disabled={step.id > activeStep}
              className="md:w-1/6 flex justify-center items-center disabled:opacity-50 relative"
              onClick={() => setActiveStep(step.id)}
            >
              <span className={`flex items-center after:absolute after:content-[''] after:left-0 after:bottom-[-10px]
              after:h-1 after:w-full after:rounded-sm ${activeStep === step.id ? "after:bg-blue-500" : "after:bg-transparent"}`}
              >
                {step.image(activeStep == step.id)}
                <h5 className={`ml-2 text-sm ${activeStep === step.id ? "text-blue-500" : ""}`}>{step.label}</h5>
              </span>
            </button>
          ))}
        </nav>
        <hr className="h-[1px] mt-2 mb-5" />
        <div className="w-full">
          {activeStep === 1 && <CompanyInfoForm />}
          {activeStep === 2 && <FoundingInfoForm />}
          {activeStep === 3 && <SocialsForm />}
          {activeStep === 4 && <ContactForm />}

        </div>
        <div className="mt-8 mb-12 space-x-3 flex">
          {
            activeStep > 1 &&
            <button
              onClick={() => setActiveStep((prev) => (prev - 1))}
              className="px-5 py-3 rounded-sm bg-gray-200"
            >
              Previous
            </button>
          }
          <button
            onClick={() => setActiveStep((prev) => (prev + 1))}
            className="bg-blue-500 px-5 py-3 rounded-sm text-white flex items-center">
            {activeStep === 4 ? "Finish Editing" : 'Save and Next'} <MoveRight className="w-5 ml-2" />
          </button>
        </div>
      </main>
    </>
  )
}

export default MultiStepForm