"use client"
import countries from "@/data/countries"
import { Mail } from "lucide-react"
import Dropdown from "./Dropdown"
import { useState } from "react"
import { isNumeric, isEmail } from "validator"
const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialCode, setDialCode] = useState('bd')
  const [phoneError, setPhoneError] = useState(null);
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(null)
  return (
    <form>
      <label htmlFor="mapLocation">
        Map Location
        <input type="text" className="w-full border border-gray-300 h-10 rounded-sm mb-4 mt-2" />
      </label>
      <label htmlFor="phone">
        Phone
        <div className="h-10 w-full flex items-center border border-gray-300 rounded-sm mt-2">
          <Dropdown placeholder="Select..." data={countries} defaultValue={dialCode} handleSelect={setDialCode} />
          <hr className="w-[1px] h-4/5 bg-gray-300" />
          <input
            type="text"
            className="grow h-full p-2"
            placeholder="Phone number..."
            value={phoneNumber}
            onChange={(e) => {
              if (e.target.value && !isNumeric(e.target.value)) {
                setPhoneError('Phone number must contain only digits')
              } else {
                setPhoneError(null)
              }
              setPhoneNumber(e.target.value)
            }}
          />
        </div>
      </label>
      <p className="text-destructive mb-4 text-sm">{phoneError}</p>
      <label htmlFor="email">
        Email
        <div className="w-full flex items-center border border-gray-300 h-10 rounded-sm pl-2 mt-2">
          <Mail className="w-5" color="#0B6BBF" />
          <input
            type="email"
            className="h-full p-2 grow focus:outline-none"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              if (e.target.value && !isEmail(e.target.value)) {
                setEmailError('Invalid email format');
              } else {
                setEmailError(null)
              }
              setEmail(e.target.value)
            }}
          />
        </div>
      </label>
      <p className="text-destructive mb-4 text-sm">{emailError}</p>
    </form >
  )
}

export default ContactForm