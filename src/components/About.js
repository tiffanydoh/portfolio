import React from "react";
import selfie from "../assets/self-pic.jpg";
import css from "../assets/css-logo.png";
import html from "../assets/html-logo.png";
import rails from "../assets/rails-logo.jpeg";
import react from "../assets/react-logo2.png";
import ruby from "../assets/ruby-logo.png";
import sql from "../assets/sql-logo.jpeg";
import js from "../assets/js.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#88AED0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-6xl font-extrabold inline text-[#F8F6F0]">
              ABOUT ME
            </p>
          </div>
          <div className="flex flex-column">
            <div className="scale-[70%]">
              <img src={selfie} alt="pic of tiffany" />
            </div>
            <div className="max-w-[1000px] w-full sm:grid grid-row-2 gap-8 px-4">
              <div className="text-[#F8F6F0] text-lg">
                <p>
                  My name is Tiffany Do. I am currently a student at LEARN
                  academy. LEARN Academy is a 4 month full stack web development
                  bootcamp that prepares a diverse set of people for entry into
                  the tech industry.
                </p>
                <p>
                  As the first in my family to go to college and being low
                  income with a full ride, I really value education and prided
                  myself in exploring different majors in hopes of finding what
                  I was passionate in. After having graduated from UCSD in 2021,
                  I was still very confused about my path and goals in life. I
                  quickly rediscovered my love for coding and the tech world
                  when I recalled my years in First Lego League and Robotics
                  club throughout middle and high school. First Lego League and
                  Robotics inspired the youth to be hands-on with technology and
                  to focus on design and coding. I was actually one of the few
                  girls to join as it was mostly male dominated at school.
                </p>
                <p>
                  With rediscovering my passion in coding and tech, I want to
                  transfer my acquired skills at LEARN academy to real world
                  situations and further expand my knowledge and love for
                  learning. I want to inspire and empower other girls to join
                  the tech world and create a difference not only in their
                  lives, but the world.
                </p>
              </div>

              <div>
                <a
                  href="https://c531d473-88db-49bc-98ad-e8002210d97c.filesusr.com/ugd/b912f6_714ce08163844193892792b3af7ea684.pdf"
                  target="_blank"
                >
                  <button class="bg-black hover:bg-sky-500 text-white py-2 px-4 rounded">
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <h1 className="font-semibold text-[35px] p-5">Languages:</h1>
          <img className="scale-[60%]" src={css} alt="css icon" />
          <img className="scale-[60%]" src={html} alt="html icon" />
          <img className="scale-[60%]" src={sql} alt="sql icon" />
          <img className="scale-[60%]" src={ruby} alt="ruby icon" />
          <img className="scale-[60%]" src={js} alt="js icon" />
        </div>
        <div className="flex flex-row">
          <h1 className="font-semibold text-[35px] p-5">Backend:</h1>
          <img className="scale-[45%]" src={rails} alt="css icon" />
        </div>
        <div className="flex flex-row">
          <h1 className="font-semibold text-[35px] p-5">Frontend:</h1>
          <img className="scale-[54%]" src={react} alt="css icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
