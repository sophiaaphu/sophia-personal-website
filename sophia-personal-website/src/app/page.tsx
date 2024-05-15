import Image from "next/image";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12 px-8 lg:px-24 bg-[#FBD0DE]">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-between w-3/4 gap-4">
        <div className="text-center">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap font-bold text-4xl md:text-6xl">
            Hi, I'm <span className="text-pink-500">Sophia</span><span className="text-pink-500">!</span>
          </h1>
          <p className="mt-4 md:text-xl">
            an aspiring computer engineer and software developer
          </p>
          <div className="mt-4 flex justify-center ">
            <Button className="bg-[#FEEDF5] drop-shadow-md rounded-3xl w-full lg:w-2/3 hover:bg-white">
              <Link href="/about">
                <span className="text-black md:text-lg">
                  Learn more about me :)
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 justify-center lg:justify-end">
          <Image src="/image-blob-1.png" alt="homepage blob" width={400} height={200} />
        </div>
      </div>
    </main>
  );
}
