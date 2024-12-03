'use client'
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype, FaMapMarkerAlt } from "react-icons/fa";
import { CreateContact } from "./CreateContact";
interface PropsTypes {
  id: string
}
const GetInTouch = ({id}:PropsTypes) => {
  const [error, setError] = useState<string | null>(null);
  const [name , setName]  = useState("")
  const [email , setEmail]  = useState("")
  const [phone , setPhone]  = useState("")
  const [message , setMessage]  = useState("")
  const [subject, setSubject] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await CreateContact({name, email, phone, message, subject})
      if(result.valid) {
        console.log("see result", result)
      alert(result.message)
      }
      else{
        setError(result.message)
        alert(result.message)
      }
  }
  
  return (
    <div className="bg-gray-900 text-gray-200 py-16  min-h-screen md:px-24 sm:px-16 px-8" id={`${id}`}>
      {/* Header */}
      <div className=" mb-12">
        <h1 className="text-4xl font-bold text-purple-500">Get in Touch</h1>
        <p className="text-gray-400 mt-4 max-w-[550px]">
        I&apos;m always excited to take on new projects and collaborate with innovative minds. 
          If you have a project in mind or just want to chat about design, feel free to reach out!
        </p>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            { icon: <FaPhoneAlt />, label: "Phone Number", value: "+251941215837" },
            { icon: <FaEnvelope />, label: "Email", value: "ayfotsega19.27@gmail.com" },
            { icon: <FaSkype />, label: "Telegram", value: "@yrakfA" },
            { icon: <FaMapMarkerAlt />, label: "Address", value: "Addis Ababa, Ethiopia" },
          ].map((info, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 p-4 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-500 text-3xl mr-4">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{info.label}</p>
                <p className="text-lg font-semibold">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"  >
        {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400">
                Your Name *
              </label>
              <input
                id="userName"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400">
                Email Address *
              </label>
              <input
                id="userEmail"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-400">
                Your Phone *
              </label>
              <input
                id="userPhone"
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400">
                Subject *
              </label>
              <input
                id="YourSubject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="I want to contact for..."
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400">
              Message *
            </label>
            <textarea
              id="yourMessage"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here..."
              rows={4}
              className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            // type="submit"
            onClick={(e) => handleSubmit(e)}
            className="w-full bg-purple-500 text-gray-200 py-3 rounded-md hover:bg-purple-600 transition-colors flex items-center justify-center"
          >
            Send Message
            <span className="ml-2 text-lg">&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
