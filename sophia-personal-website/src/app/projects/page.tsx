import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RxGithubLogo } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { RxArrowRight } from "react-icons/rx";

export default function Projects() {
  return (
    <main className="flex flex-col py-12 gap-4">
      <div className=" flex flex-col gap-8 ">
        <h1 className="font-bold text-3xl lg:text-4xl">Projects</h1>
        <div className="bg-[#B07689] md:h-[23.5rem] -mx-8 lg:-mx-24 pl-8 lg:pl-24 gap-4 flex justify-between overflow-hidden">
          <div>
            <h1 className="mt-8 lg:mt-16 font-bold text-4xl lg:text-5xl text-white">Featured Work</h1>
            <div className="mt-4 lg:mt-8 text-white">
              <p className=" text-base lg:text-lg">View the work I created/contributed to!</p>
              <p className=" text-base lg:text-lg hidden lg:block">
                Hackathon projects, Aggie Coding Club Projects, personal projects,
                and more!
              </p>
            </div>
            <Badge className=" lg:px-6 mt-4 mb-8 lg:mt-8 bg-[#FFDCE8] text-black font-normal space-x-2 hover:space-x-6 hover:bg-[#FEEDF5] shadow-md">
              <p className=" text-sm md:text-base lg:text-lg">My Github</p>
              <RxArrowRight className=" size-5"/>
            </Badge>
          </div>
          <Image
            src="/aggie-seek-banner.png"
            alt="aggie seek 1"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col bg-[#FEEDF5] p-4 md:p-8 rounded-lg lg:w-1/3 justify-between shadow-md">
            <div className=" space-y-4">
              <p className="text-lg font-semibold">AggieSeek</p>
              <p className=" text-sm">
                AggieSeek is a full stack web application that notifies Texas
                A&M students when classes open up. It allows students to get
                into classes that may be extremely difficult to get into
                otherwise and has 1000+ users.
              </p>
            </div>
            <div className=" flex items-center gap-4 mt-8 lg:mt-0">
              <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6 ">
                <p>Visit AggieSeek</p>
                <RxArrowRight />
              </Button>
              <a
                href="https://github.com/sophiaaphu"
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
        <div className="mt-2 flex flex-col lg:flex-row gap-2">
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
              <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6">
                <p>Visit TAO Website</p>
                <RxArrowRight />
              </Button>
              <a
                href="https://github.com/sophiaaphu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
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
        </div>
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col bg-[#FEEDF5] p-4 md:p-8 rounded-lg lg:w-1/3 justify-between shadow-md">
            <div className=" space-y-4">
              <p className="text-lg font-semibold">SwipeTern</p>
              <p className=" text-sm">
                SwipeTern is an cross platform application that matches students
                and recruiters to facilitate the internship recruitment process.
                Finding an internship can be a challenge, so we wanted to make
                this process easier.
              </p>
            </div>
            <div className=" flex items-center gap-4 mt-8 lg:mt-0">
              <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6 ">
                <p>Visit SwipeTern</p>
                <RxArrowRight />
              </Button>
              <a
                href="https://github.com/sophiaaphu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 bg-[#AAEAED] sm:pl-4 md:pl-8 rounded-lg lg:w-2/3 shadow-md pt-4 md:pt-8 group overflow-hidden">
            <div className="flex -ml-4 sm:-ml-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/swipetern-1.png"
                alt="swipetern 1"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/swipetern-2.png"
                alt="swipetern2"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex  items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/swipetern-3.png"
                alt="swipetern3"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex -mr-4 sm:-mr-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/swipetern-4.png"
                alt="swipetern4"
                width={300}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col bg-[#FEEDF5] p-4 md:p-8 rounded-lg lg:w-1/3 justify-between shadow-md">
            <div className=" space-y-4">
              <p className="text-lg font-semibold">Sp/it</p>
              <p className=" text-sm">
                Sp/it is a roomate companion application that allows roomates to
                split bills and keep track of expenses, create tasks through a
                task calender, chat, and track roomate locations. The goal was
                to create an app that would make it easier for roomates to stay
                organized and manage expenses.
              </p>
            </div>
            <div className=" flex items-center gap-4 mt-8 lg:mt-0">
              <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8] space-x-2 hover:space-x-6 ">
                <p>Visit Sp/it</p>
                <RxArrowRight />
              </Button>
              <a
                href="https://github.com/sophiaaphu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 bg-[#C0C0C0] sm:pl-4 md:pl-8 rounded-lg lg:w-2/3 shadow-md pt-4 md:pt-8 group overflow-hidden">
            <div className="flex -ml-4 sm:-ml-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/split-1.png"
                alt="split 1"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/split-2.png"
                alt="split2"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex  items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/split-3.png"
                alt="split3"
                width={450}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
            <div className="flex -mr-4 sm:-mr-0 items-end transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/split-4.png"
                alt="split4"
                width={300}
                height={400}
                className=" rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
