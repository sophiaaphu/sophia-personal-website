"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { hello } from "./fonts";
import EventList from "@/components/eventList";
import {
  RxInstagramLogo,
  RxGithubLogo,
  RxLinkedinLogo,
  RxArrowRight,
} from "react-icons/rx";
import { motion } from "framer-motion";

export default function Home() {
  const typingText =
    "Hi I'm Sophia, I'm a software developer and computer engineer";

  const textContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.1, // Controls the typing speed
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const paragraphVariants = {
    hidden: { x: -100, opacity: 0 }, // Start from the left
    visible: { x: 0, opacity: 1 }, // Slide to its original position
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3, // Delay before starting staggerChildren
        staggerChildren: 0.3, // Controls delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex flex-col py-12 gap-16">
      <div className="flex flex-col md:flex-row lg:items-center gap-4 lg:gap-0  ">
        <div className="flex flex-col gap-6">
          <div className=" text-3xl lg:text-4xl font-bold">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textContainerVariants}
            >
              {typingText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  style={
                    word === "Sophia,"
                      ? { ...hello.style, fontWeight: "400" } // Normal font weight
                      : {}
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            transition={{ duration: 1, delay: 1.5 }} // Adjust duration for the animation
          >
            <p className="text-sm lg:text-base">
              I enjoy creating projects that are aesthetic, user-centered, and
              positively impact my community.
            </p>
          </motion.div>
          <div className="flex items-center gap-6">
            <Link href="/about">
              <Button className=" bg-[#FEEDF5] text-black drop-shadow-md hover:bg-[#FCBACB] hover:-translate-y-1 duration-200">
                Learn more about me
              </Button>
            </Link>
            <div className="flex space-x-4 text-pink-500">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex space-x-4">
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <a
                      href="https://www.instagram.com/sophiaaphu._/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RxInstagramLogo className="w-5 h-5" />
                    </a>
                  </motion.div>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <a
                      href="https://github.com/sophiaaphu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RxGithubLogo className="w-5 h-5" />
                    </a>
                  </motion.div>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <a
                      href="https://www.linkedin.com/in/sophiaphu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RxLinkedinLogo className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/homepage-pic.png"
            alt="homepage pic"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <p className="text-3xl lg:text-4xl font-bold">Featured</p>
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col bg-[#FEEDF5] p-4 md:p-8 rounded-lg lg:w-1/3 justify-between shadow-md">
            <div className=" space-y-4">
              <p className="text-lg font-semibold">AggieSeek</p>
              <p className=" text-sm">
                AggieSeek is an application that notifies Texas A&M students
                when classes open up. It allows students to get into classes
                that may be extremely difficult to get into otherwise and has
                1000+ users.
              </p>
            </div>
            <div className=" flex items-center gap-4 mt-8 lg:mt-0">
              <a
                href="https://new.aggieseek.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6 ">
                  <p>Visit AggieSeek</p>
                  <RxArrowRight />
                </Button>
              </a>
              <a
                href="https://github.com/aggieseek/aggieseek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 bg-[#DAB6BC] sm:px-4 md:px-8 rounded-lg lg:w-2/3 shadow-md pt-4 md:pt-8 group overflow-hidden">
            <div className="flex -ml-4 sm:-ml-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aggie-seek-new-1.png"
                alt="aggie seek 1"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex -mr-4 sm:-mr-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aggie-seek-new-2.png"
                alt="aggie seek 2"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col-reverse lg:flex-row gap-2">
          <div className="flex gap-4 md:gap-8 bg-[#FEB1BE] sm:px-4 md:px-8 rounded-lg lg:w-2/3 shadow-md pt-4 md:pt-8 group overflow-hidden">
            <div className="flex -ml-4 sm:-ml-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/tao-website-1.png"
                alt="tao website 1"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex -mr-4 sm:-mr-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/tao-website-2.png"
                alt="tao website 2"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="flex flex-col bg-[#FEEDF5] p-4 md:p-8 rounded-lg lg:w-1/3 justify-between shadow-md">
            <div className="space-y-4">
              <p className="text-lg font-semibold">TAO Website</p>
              <p className=" text-sm ">
                The TAO website displays essential resources for 4000+ freshman
                engineers going through intro engineering coursework. It
                displays TAO events and announcements, TAO social media links,
                and review materials.
              </p>
            </div>
            <div className=" flex items-center gap-4 mt-8 lg:mt-0">
              <a
                href="https://engrtao.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6">
                  <p>Visit TAO Website</p>
                  <RxArrowRight />
                </Button>
              </a>
              <a
                href="https://github.com/TAO-ENGR/club-website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <p className="text-3xl lg:text-4xl font-bold mb-4">Updates</p>
        <EventList />
      </div>
    </main>
  );
}
