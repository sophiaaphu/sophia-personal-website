import Image from "next/image";
import Header from "@/components/header";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12  px-8 lg:px-24 bg-[#FBD0DE]">
      <Header/>
      <div>
        <h1>
          About Me
        </h1>
      </div>
    </main>
  );
}