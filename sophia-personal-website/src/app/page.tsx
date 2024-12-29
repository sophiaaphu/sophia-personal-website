import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { hello } from "./fonts";
import {
  RxInstagramLogo,
  RxGithubLogo,
  RxLinkedinLogo,
  RxHeart,
  RxArrowRight,
} from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex flex-col py-12 gap-16">
      <div className="flex flex-col md:flex-row lg:items-center gap-4 lg:gap-0  ">
        <div className="flex flex-col gap-6">
          <h1 className=" text-3xl lg:text-4xl font-bold">
            Hi I'm{" "}
            <span className=" font-normal" style={hello.style}>
              Sophia
            </span>
            , software developer and computer engineer
          </h1>
          <p className="text-sm lg:text-base">
            I enjoy creating projects that are aesthetic, user centered, and
            positively impact my community.
          </p>
          <div className="flex items-center gap-6">
            <Button className=" bg-[#FEEDF5] text-black drop-shadow-md hover:bg-[#F986B0] hover:-translate-y-1 duration-200">
              Learn more about me
            </Button>
            <div className="flex space-x-4 text-pink-500">
              <a
                href="https://www.instagram.com/sophiaaphu._/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 duration-200"
              >
                <RxInstagramLogo className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/sophiaaphu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 duration-200"
              >
                <RxGithubLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sophiaphu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 duration-200"
              >
                <RxLinkedinLogo className="w-5 h-5" />
              </a>
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
      <div>
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
        <div className="mt-2 flex flex-col-reverse lg:flex-row gap-2">
          <div className="flex gap-4 md:gap-8 bg-[#DAB6BC] sm:px-4 md:px-8 rounded-lg lg:w-2/3 shadow-md pt-4 md:pt-8 group overflow-hidden">
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
        </div>
      </div>
      <div>
        <p className="text-3xl lg:text-4xl font-bold">Updates</p>
        <div>
          <p>whoo</p>
        </div>
      </div>
    </main>
  );
}
