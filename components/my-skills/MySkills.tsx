import React from "react";
import { SiTypescript, SiExpress, SiGithubactions } from "react-icons/si";
import { RiReactjsLine, RiNextjsFill, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaPython, FaDocker } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiReduxsaga } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiMui } from "react-icons/si";

interface PropsTypes {
  id: string
}
// import { SiMaterialui } from "react-icons/si";

const MySkills = ({id}:PropsTypes) => {
  const skills = [
    { name: "TypeScript", icon: <SiTypescript />, percentage: "98%" },
    { name: "React.js", icon: <RiReactjsLine />, percentage: "96%" },
    { name: "Next.js", icon: <RiNextjsFill />, percentage: "94%" },
    { name: "Node.js", icon: <RiNodejsLine />, percentage: "93%" },
    { name: "Express.js", icon: <SiExpress />, percentage: "93%" },
    { name: "Python", icon: <FaPython />, percentage: "80%" },
    // { name: "Material UI", icon: <SiMaterialui />, percentage: "95%" },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine />, percentage: "94%" },
    { name: "Docker", icon: <FaDocker />, percentage: "85%" },
    { name: "Redux", icon: <TbBrandRedux />, percentage: "95%"},
    { name: "Redux Saga", icon: <SiReduxsaga />, percentage: "90%" },
    { name: "GitHub Actions", icon: <SiGithubactions />, percentage: "85%" },
    { name: "Django", icon: <DiDjango />, percentage: "50%" },
    { name: "MUI", icon: <SiMui />, percentage: "95%" },
  ];

  return (
    <div className="bg-[#272730] text-gray-200 min-h-screen py-16 px-4" id={`${id}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-500">My Skills</h1>
        <p className="text-gray-400 mt-4 mx-auto max-w-[800px]">
          I always strive to transform real-world problems into effective solutions and take great pride in solving people's challenges. Nothing makes me happier than seeing a satisfied customer.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex gap-8 mx-auto max-w-[900px] flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className= " w-28 bg-[#272730] p-6 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl text-purple-500 mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.percentage}</p>
            <p className="text-sm text-gray-400 mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-4 mx-auto max-w-[800px]">
      I am not just a developer; I am also a critical thinker. When faced with a problem, I take the time to analyze it from different perspectives before jumping into coding. 
      I believe that not all problems require code as the solution—sometimes, the best approach lies elsewhere. For me, coding is just one of many tools to solve challenges.
       My ability to think critically and evaluate the most effective solution is one of the key strengths I have developed over time.
        </p>
    </div>
  );
};

export default MySkills;
