'use client';
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { RxGithubLogo } from "react-icons/rx";
import { useState } from "react";

export default function Projects() {
  const swipetern = 
    {
      title: "Swipetern",
      description: "SwipeTern is an app that matches students and recruiters to facilitate the internship recruitment process. Finding an internship can be a challenge, so we wanted to make this process easier. My team and I utilized React Native, as we thought that a mobile app would be effective for our app’s objective. We utilized Firebase for authentication and user data storage. This app was created during the TamuHack X Hackathon. I helped design and implement the UI/Frontend and set up the firebase authentication.",
      imagePath: "/swipetern.png",
      alt:"swipetern",
      badges: ["React Native", "Cross Platform", "Expo", "Firebase"],
      link:"https://github.com/obinnanprogrammed/tamuhack2024"
    };
  const jkss =
    {
      title: "JKSS Grade Distributions",
      description: "JKSS Grade Dristibutions is a webapp that allows Texas A&M students to view grade distributions for professors they are considering taking classes with. My teammates and I knew the importance of selecting good professors, and we thought that this app would benefit many students. This project was created during the HowdyHack hackathon. I worked on the frontend of the project, utilizing React and Material-UI to create a user friendly interface. I also worked on the backend, utilizing Flask and PyMuPDF to extract data from the TAMU grade distribution PDFs.",
      imagePath: "/jkss.png",
      alt:"jkss",
      badges: ["React", "Web Application", "Flask", "PymuPDF"],
      link:"https://github.com/sohilgoswami/jkss"
    };
  const aggieSeek =
    {
      title: "AggieSeek",
      description: "AggieSeek is a webapp that notifies students when courses at TAMU have open seats. My team and I had many struggles with our desired classes getting filled, so we wanted to create a solution. This project was part of the Aggie Coding Club project system. I worked on the frontend of the project, utilizing React, TailwindCSS, HeadlessUI, and ShadCN to create an aesthetic user interface. We utilized Flask, Beautiful Soup, and the Twilio API for the backend to scrape data from the TAMU course catalog and notify students through email, text, and discord. Firebase was used dor authentification and data storage.",
      imagePath: "/aggie_seek.png",
      alt:"aggieSeek",
      badges: ["React", "Web Application", "Flask", "Beautiful Soup"],
      link:"https://github.com/peterphann/aggieseek"
    };
  const split =
    {
      title: "Sp/it",
      description: "Split is a roomate companion application that allows roomates to split bills and keep track of expenses, create tasks through a task calender, chat, and track roomate locations. My team and I wanted to create an app that would make it easier for roomates to be able to have an easier time staying organized and managing expenses. This project was also part of the Aggie Coding Club project system. I worked on the frontend of the project, utilizing React Native to create a user centered cross platform application. I also leveraged Firebase to store user data and manage user authentification.",
      imagePath: "/split.png",
      alt:"split",
      badges: ["React Native", "Cross Platform", "Expo", "Firebase"],
      link:"https://github.com/Split-Project"
    };
const [selectedProject, setSelectedProject] = useState(swipetern);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-12  px-8 lg:px-24 bg-[#FBD0DE]">
      <Header/>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">
          My Projects :)
        </h1>
        <p>
        View the work I created/contributed to! These projects include hackathon projects, Aggie Coding Club projects, and personal projects I was interested in creating. 
        </p>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className=" bg-[#FEEDF5] rounded-2xl lg:w-1/2">
            <Image src={selectedProject.imagePath} alt={selectedProject.alt} width={2000} height={200} className=" rounded-t-2xl"/>
            <div className="p-8 flex flex-col gap-2">
              <h2 className=" font-bold text-2xl">
                {selectedProject.title}
              </h2>
              <div className="flex flex-col md:flex-row gap-2">
                <div>
                  <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{selectedProject.badges[0]}</Badge>
                </div>
                <div>
                  <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{selectedProject.badges[1]}</Badge>
                </div>
                <div>
                  <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{selectedProject.badges[2]}</Badge>
                </div>
                <div>
                  <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{selectedProject.badges[3]}</Badge>
                </div>
              </div>
              <div>
                <p>
                  {selectedProject.description}
                </p>
              </div>
              <div className="text-pink-500 hover:translate-y-2 duration-200">
                <a href={selectedProject.link} target="_blank">
                  <RxGithubLogo className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:w-1/2 flex-col gap-4">
          <div className="flex gap-4">
            <div>
              <div onClick={() => setSelectedProject(swipetern)} className=" bg-[#FEEDF5] rounded-2xl">
                <Image src={swipetern.imagePath} alt={swipetern.alt} width={2000} height={200} className=" rounded-t-2xl"/>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-bold text-xl">
                    {swipetern.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{swipetern.badges[0]}</Badge>
                    </div>
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{swipetern.badges[1]}</Badge>
                    </div>
                  </div>
                  <div className="text-pink-500 hover:translate-y-2 duration-200">
                    <a href={swipetern.link} target="_blank">
                      <RxGithubLogo className="w-6 h-6"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div onClick={() => setSelectedProject(jkss)} className="bg-[#FEEDF5] rounded-2xl">
                <Image src={jkss.imagePath} alt={jkss.alt} width={2000} height={200} className=" rounded-t-2xl"/>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-bold text-xl">
                    {jkss.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{jkss.badges[0]}</Badge>
                    </div>
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{jkss.badges[1]}</Badge>
                    </div>
                  </div>
                  <div className="text-pink-500 hover:translate-y-2 duration-200">
                  <a href={jkss.link} target="_blank">
                    <RxGithubLogo className="w-6 h-6"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div onClick={() => setSelectedProject(aggieSeek)} className=" bg-[#FEEDF5] rounded-2xl">
                <Image src={aggieSeek.imagePath} alt={aggieSeek.alt} width={2000} height={200} className=" rounded-t-2xl"/>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-bold text-xl">
                    {aggieSeek.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{aggieSeek.badges[0]}</Badge>
                    </div>
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{aggieSeek.badges[1]}</Badge>
                    </div>
                  </div>
                  <div className="text-pink-500 hover:translate-y-2 duration-200">
                    <a href={aggieSeek.link} target="_blank">
                      <RxGithubLogo className="w-6 h-6"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div onClick={() => setSelectedProject(split)} className="bg-[#FEEDF5] rounded-2xl">
                <Image src={split.imagePath} alt={split.imagePath} width={2000} height={200} className=" rounded-t-2xl"/>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-bold text-xl">
                    {split.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{split.badges[0]}</Badge>
                    </div>
                    <div>
                      <Badge variant={'outline'} className="bg-[#FCBACB] border-[#DD3C87]">{split.badges[1]}</Badge>
                    </div>
                  </div>
                  <div className="text-pink-500 hover:translate-y-2 duration-200">
                  <a href={split.link} target="_blank">
                    <RxGithubLogo className="w-6 h-6"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}