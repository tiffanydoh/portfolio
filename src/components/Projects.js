import React from "react";
import ProjectLayout from "./ProjectLayout";
import treasurehunt from "../assets/treasurehunt.jpg";
import fruitycounter from "../assets/fruitycounter.jpg";
import barkbuds from "../assets/barkbuds.jpg";
import startunes from "../assets/startunes.jpg";
import wildlife from "../assets/wildlife.jpg";
import StackButton from "./StackButton";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-auto bg-[#88AED0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div>
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-6xl font-extrabold inline text-[#F8F6F0]">
                PROJECTS
              </p>
            </div>
          </div>
          <div>
            <ProjectLayout
              text={"Treasure Hunt"}
              string={
                "Built on React, this treasure hunt game required logic of randomizing the treasure and the bomb. Find the treasure you win, find the bomb you lose."
              }
              stack={"| CSS | JavaScript | HTML |"}
              img={treasurehunt}
            />
          </div>
          <div>
            <ProjectLayout
              text={"Wildlife Tracker"}
              string={
                "The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland, Oregon. Before they give the go-ahead, they need to do an environmental impact study. I've built an API the rangers can use to report wildlife sightings."
              }
              stack={"| Ruby on Rails | Postman API |"}
              img={wildlife}
            />
          </div>
          <div>
            <ProjectLayout
              text={"Barkbuds"}
              string={
                "barkbuds is your friendly neighborhood app where your dog can meet another dog. The perfect website for you to find your dog a buddy. Use the swipe features to swipe right on your favorite dogs, swipe left on other dogs. Use the comment section to leave your thoughts."
              }
              stack={
                "| JavaScript | React | CSS | Ruby on Rails | HTML | Jest | RSpec |"
              }
              img={barkbuds}
            />
          </div>
          <div>
            <ProjectLayout
              text={"StarTunes"}
              string={
                "Is shuffling through the same 10 songs starting to become a buzzkill? With StarTunes, you can discover new music by shuffling through our random song generator to spice up your life. Create new songs, update/delete songs, and sign in/sign up/sign out."
              }
              stack={
                "| JavaScript | React | CSS | Ruby on Rails | React in Rails | HTML | Jest | RSpec |"
              }
              img={startunes}
            />
          </div>
          <div>
            <ProjectLayout
              text={"FruityCounter"}
              string={
                "FruityCounter is an easy and simple counter app. With the display of two counters, FruityCounter easily lets you track multiple values."
              }
              stack={"Redux | React | React Hooks | Tailwind"}
              img={fruitycounter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
