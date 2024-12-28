import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { hello } from "./fonts";
import {
  RxInstagramLogo,
  RxGithubLogo,
  RxLinkedinLogo,
  RxHeart,
} from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex flex-col py-12 gap-16">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0  ">
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
        <p className="text-3xl lg:text-4xl font-bold">
          Featured
        </p>
        <div className="mt-4">
          <div className="flex flex-col bg-[#FEEDF5] p-8 rounded-lg">
            <div className=" space-y-4">
            <p className="text-lg font-semibold">
              AggieSeek
            </p>
            <p className=" text-sm">
              AggieSeek is an application that notifies Texas A&M students when classes open up. It allows students to get into classes that may be extremely difficult to get into otherwise and has 1000+ users. 
            </p>
            </div>
            <div>
              <Button className="bg-[#FEEDF5] text-black border border-[#ABABAB] hover:bg-[#FFDCE8]">
                Visit AggieSeek
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl lg:text-4xl font-bold">
          Updates
        </p>
      </div>
    </main>
  );
}
