import React from "react";
import selfie from "./images/selfie.jpg";
import WindowTemplate from "./component/WindowTemplate.tsx";

export default function Home() {
  return (
    <WindowTemplate>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={selfie}
            alt="Me"
            className="border-2 border-black rounded-md w-full h-auto"
          />
        </div>
        <div>
          <p className="text-4xl font-bold mb-4">
            Hello world,
            <br />
            I'm Tiffany!
          </p>
          <p className="text-2xl">Welcome to my portfolio</p>
          <hr className="my-4 border-t-2 border-black" />
          <p>
            My name is Tiffany Do, and I'm dedicated to leveraging technology to
            drive impactful change. I graduated from LEARN Academy, a dynamic
            4-month full stack web development bootcamp that provided me with
            extensive skills in web development and prepared me for a rewarding
            career in tech. As a first-generation college graduate with a full
            scholarship, I've always valued education and the opportunities it
            brings. After completing my studies at UCSD in 2021, I explored
            various fields in search of my true passion. Rediscovering my love
            for coding and technology, inspired by my involvement in First Lego
            League and Robotics clubs during my formative years, was a pivotal
            moment. Fast forward to today, I've expanded on my knowledge gained
            at LEARN Academy through valuable experience at a startup that has
            grown into a significant player in the industry. This opportunity
            allowed me to apply my skills in real-world scenarios, contributing
            to the evolution and success of the company. My journey has
            reinforced my commitment to empowering women in technology and
            advocating for diversity and inclusion. I'm eager to continue
            growing professionally, tackling new challenges, and making a
            positive impact in the tech community and beyond.
          </p>
        </div>
      </div>
    </WindowTemplate>
  );
}
