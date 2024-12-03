import AboutMe from "@/components/main/AboutMe";
import MyServices from "@/components/My-services/MyServices";
import MyRecentWorks from "@/components/portfolio/MyRecentWorks";
import Resume from "@/components/resume/Resume";
import MySkills from "@/components/my-skills/MySkills";
import GetInTouch from "@/components/getIn-touch/GetInTouch";
import Footer from "@/components/footer/Footer";
// import Blog from "@/components/blog/Blog";
export default function Home() {
  return (
    <div>
    <AboutMe id="about" />
    <MyServices id="services" />
    <MyRecentWorks id="works" />
    <Resume id="resume" />
    <MySkills id="skills" />
    {/* <Blog id="blog" /> */}
    <GetInTouch id="contact" />
    <Footer />
  </div>
  ); 
}
