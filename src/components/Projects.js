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
    <div name="projects" className="w-full h-auto">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div>
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-6xl font-extrabold inline text-[#F8F6F0]">
                PROJECTS
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <ProjectLayout
                text={"Treasure Hunt"}
                string={
                  "Built on React, this treasure hunt game required logic of randomizing the treasure and the bomb. Find the treasure you win, find the bomb you lose."
                }
                img={treasurehunt}
              />
              <div className="p-3 flex space-x-4 ">
                <StackButton text={"CSS"} />
                <StackButton text={"Javascript"} />
                <StackButton text={"HTML"} />
              </div>

              <ProjectLayout
                text={"Wildlife Tracker"}
                string={
                  "The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland, Oregon. Before they give the go-ahead, they need to do an environmental impact study. I've built an API the rangers can use to report wildlife sightings."
                }
                img={wildlife}
              />
              <div className="p-3 flex space-x-4 ">
                <StackButton text={"Ruby on Rails"} />
                <StackButton text={"Postman API"} />
              </div>
              <ProjectLayout
                text={"Barkbuds"}
                string={
                  "barkbuds is your friendly neighborhood app where your dog can meet another dog. The perfect website for you to find your dog a buddy. Use the swipe features to swipe right on your favorite dogs, swipe left on other dogs. Use the comment section to leave your thoughts."
                }
                img={barkbuds}
              />
              <div className="p-3 flex space-x-4 ">
                <StackButton text={"CSS"} />
                <StackButton text={"Javascript"} />
                <StackButton text={"HTML"} />
                <StackButton text={"React"} />
                <StackButton text={"Ruby on Rails"} />
                <StackButton text={"Jest"} />
                <StackButton text={"RSpec"} />
              </div>
              <ProjectLayout
                text={"StarTunes"}
                string={
                  "Is shuffling through the same 10 songs starting to become a buzzkill? With StarTunes, you can discover new music by shuffling through our random song generator to spice up your life. Create new songs, update/delete songs, and sign in/sign up/sign out."
                }
                img={startunes}
              />
              <div className="p-3 flex space-x-4 ">
                <StackButton text={"CSS"} />
                <StackButton text={"Javascript"} />
                <StackButton text={"HTML"} />
                <StackButton text={"React"} />
                <StackButton text={"Ruby on Rails"} />
                <StackButton text={"React in Rails"} />
                <StackButton text={"Jest"} />
                <StackButton text={"RSpec"} />
              </div>
              <ProjectLayout
                text={"FruityCounter"}
                string={
                  "FruityCounter is an easy and simple counter app. With the display of two counters, FruityCounter easily lets you track multiple values."
                }
                stack={"Redux | React | React Hooks | Tailwind"}
                img={fruitycounter}
              />
              <div className="p-3 flex space-x-4 ">
                <StackButton text={"Redux"} />
                <StackButton text={"React"} />
                <StackButton text={"React Hooks"} />
                <StackButton text={"Tailwind"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
