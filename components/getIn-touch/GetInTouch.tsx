'use client'
import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype, FaMapMarkerAlt } from "react-icons/fa";
import { CreateContact } from "./CreateContact";
import { useActionState } from "react";
// import { Notification } from "../notification/Notification";
interface PropsTypes {
  id: string
}
const GetInTouch = ({id}:PropsTypes) => {
  const [state, action, isPending]   = useActionState(CreateContact, null, "/event")
  // const [notificationContent, setNotificationContent] = useState<null | { message: string; Status: string }>(null);

  console.log("see the state state :", state)
  console.log("state.valide", state?.valid)
  useEffect(() => {
    if (state && state.valid !== undefined) {
      if (state.valid) {
        // setNotificationContent({ message: state.message, Status: 'success' });
        alert(state.message)
      } else {
        // setNotificationContent({ message: state.message || 'Something happened', Status: 'error' });
        alert(state.message)
      }
      // Clear the notification after showing it
      setTimeout(() => {
        // setNotificationContent(null);
      }, 5000);
    }
  }, [state]);

  return (
    <div
    className="bg-gray-900 text-gray-200 py-16 min-h-screen md:px-24 sm:px-16 px-8" 
    id={`${id}`}    
    >
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

        {/* Contact Form  */}
        <form action={action}  className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"  >
        {/* {state?.message && <p className="text-red-500">{state.message}</p>} */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400">
                Your Name *
              </label>
              <input
                id="userName"
                type="text"
                name="name"
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
              placeholder="Your message here..."
              rows={4}
              className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled = {isPending}
            // onClick={(e) => handleSubmit(e)}
            className="w-full bg-purple-500 text-gray-200 py-3 rounded-md hover:bg-purple-600 transition-colors flex items-center justify-center"
          >
            Send Message
            <span className="ml-2 text-lg">&rarr;</span>
          </button>
        </form>
      </div>
         {/* Notification Component */}
         {/* {notificationContent && <Notification content={notificationContent} />} */}
    </div>
  );
};

export default GetInTouch;
