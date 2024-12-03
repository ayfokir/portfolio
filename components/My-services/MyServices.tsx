'use client'
import React, { useState } from 'react'
import { HiOutlineArrowUpRight, HiOutlineArrowDownRight } from "react-icons/hi2";
// import { useMediaQuery } from 'react-responsive';

interface PropsTypes {
  id: string
}
const MyServices = ({id}:PropsTypes) => {
  // Define services as an array of objects
  const services = [
    {
      title: "Back end Development ",
      description: "I am a skilled backend developer with expertise in building robust and scalable web applications using Node.js with Express and Django.",
      backgroundColor: "bg-transparent",
      textColor: "#FFFFFF",
    },
    {
      title: "Front End Development",
      description: "I am a proficient front-end developer specializing in creating dynamic and responsive user interfaces with Next.js and React. My expertise includes state management, component-based architecture, and integrating APIs for full-stack functionality.",
      backgroundColor: "bg-transparent",
      textColor: "#FFFFFF",
    },
    {
      title: "SEO ",
      description: "I am an SEO expert with a proven track record of optimizing websites to improve search engine rankings and drive organic traffic.",
      backgroundColor: "bg-transparent",
      textColor: "#FFFFFF",
    },
    {
      title: "UI/UX Designer",
      description: "I am a creative UX/UI designer with a passion for crafting intuitive and visually compelling digital experiences.",
      backgroundColor: "bg-transparent",
      textColor: "#FFFFFF",
    }
  ];

  // const isSmall = useMediaQuery({ query: '(max-width: 640px)' });
  // const isMedium = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });

  // const size = isSmall ? 25 : isMedium ? 30 : 35;
  const [hoverIndex, setHoverIndex] = useState<number | null>(0); // Track hovered service
  
  return (
    <div className="bg-[#1F1F24] text-white pt-14 md:px-24 sm:px-16 px-8 scroll-mt-20" id={`${id}`}>
      <h2 className="text-4xl font-bold  text-purple-400">What do i offer</h2>
      <p className="mt-2 mb-8 text-white max-w-[630px]">
        We put your ideas and thus your wishes in the form of a unique web project that
        inspires you and your customers.
      </p>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`cursor-pointer border-b border-purple-950 ${service.backgroundColor} hover:bg-[#7846DD]  transition-colors duration-300 group`}
            onMouseEnter={() => setHoverIndex(index)} // Set hover index
            onMouseLeave={() => setHoverIndex(null)} // Reset hover index
          >
            <div className="flex flex-col gap-4 md:flex-row  p-4">
              <h3 className={`grow-[3] basis-[30%] xl:text-2xl lg:text-xl md:text-[18px] sm:text-[20px]  text-left font-bold  ${service.textColor} group-hover:text-white transition-colors duration-300`} >
                {service.title}
              </h3>
              <p className="flex-grow basis-full text-white md:text-[15px] lg:text-[18px] text-[14px] group-hover:text-gray-200 text-lg flex gap-2 transition-colors duration-300">
                {service.description}
                 {/* Conditionally render arrow icon based on hover */}
              </p>
              <div className='hidden md:block'> 
              {hoverIndex === index ? (
                <HiOutlineArrowUpRight 
                className="text-white opacity-100 transform translate-y-0 transition-all duration-700 ease-in-out "
                size={32}   // Increased size for better visibility
                
                />
              ) : (
                <HiOutlineArrowDownRight 
                className="text-purple-500 opacity-80 group-hover:text-white transform translate-y-2 transition-all duration-700 ease-in-out"
                size={32} // Increased size for better visibility
                />
              )}
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyServices;
