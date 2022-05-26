import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#88AED0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-extrabold inline text-[#F8F6F0]">
              ABOUT ME
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full sm:grid grid-row-2 gap-8 px-4">
            <div className="text-[#F8F6F0] text-lg">
              <p>
                My name is Tiffany Do. I am currently a student at LEARN
                academy. LEARN Academy is a 4 month full stack web development
                bootcamp that prepares a diverse set of people for entry into
                the tech industry.
              </p>
              <p>
                As the first in my family to go to college and being low income
                with a full ride, I really value education and prided myself in
                exploring different majors in hopes of finding what I was
                passionate in. After having graduated from UCSD in 2021, I was
                still very confused about my path and goals in life. I quickly
                rediscovered my love for coding and the tech world when I
                recalled my years in First Lego League and Robotics club
                throughout middle and high school. First Lego League and
                Robotics inspired the youth to be hands-on with technology and
                to focus on design and coding. I was actually one of the few
                girls to join as it was mostly male dominated at school.
              </p>
              <p>
                With rediscovering my passion in coding and tech, I want to
                transfer my acquired skills at LEARN academy to real world
                situations and further expand my knowledge and love for
                learning. I want to inspire and empower other girls to join the
                tech world and create a difference not only in their lives, but
                the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
