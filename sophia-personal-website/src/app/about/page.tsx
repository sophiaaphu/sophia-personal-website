import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-12  px-8 lg:px-24 bg-[#FBD0DE]">
      <Header/>
      <div className=" flex flex-col gap-12">
        <div>
        <h1 className="font-bold text-3xl lg:text-4xl">
          About Me
        </h1>
        <Banner />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex flex-col gap-4 lg:justify-end ">
            <div>
              <p>
                If you’re reading this, welcome to my webpage! I’m Sophia, and I am from Houston Texas. I am pursuing a Bachelors of Science in Computer Engineering and a Minor in Mathematics at Texas A&M University.
              </p>
            </div>
            <div>
              <p>
                I am interested in full stack/software development and artificial intelligence. I am a passionate software engineer that enjoys creating projects that are aesthetic and user centered. 
              </p>
            </div>
            <div>
              <p>
                In my free time, I enjoy creating beautiful music and art, and I am a violinist in the TAMU Chamber Orchestra. 
              </p>
            </div>
            <div>
              <p>
                I am open to internships and co ops for summer 2025. Feel free to contact me.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">
            What have I been up to?
          </h1>
          <div>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Currently I am a</AccordionTrigger>
              <AccordionContent>
                <div className=" flex flex-col gap-2">
                <div>
                  <p>
                    Undergraduate Teaching assistant for CSCE 120 (Introduction to Programming Concepts and Design)
                  </p>
                  <p className=" text-pink-500">
                    August 2024 - Present
                  </p>
                </div>
                <div>
                  <p>
                    Web Officer for the TAMU Engineering TA Organization
                  </p>
                  <p className=" text-pink-500">
                    Feburary 2024 - Present
                  </p>
                </div>
                <div>
                  <p>
                    Projects Officer for the Aggie Coding Club
                  </p>
                  <p className=" text-pink-500">
                    Feburary 2024 - Present
                  </p>
                </div>
                <div>
                  <p>
                    Frontend Developer and UI Designer for the AggieSeek Project Team
                  </p>
                  <p className=" text-pink-500">
                    January 2024 - Present
                  </p>
                </div>
                <div>
                  <p>
                    Software Developer on the Sp/it Project Team
                  </p>
                  <p className=" text-pink-500">
                    September 2024 - Present
                  </p>
                </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Previously I was a</AccordionTrigger>
              <AccordionContent>
                <div className=" flex flex-col gap-2">
                <div>
                  <p>
                    Software Engineer Intern at JP Morgan Chase
                  </p>
                  <p className=" text-pink-500">
                    June 2022 - August 2022
                  </p>
                </div>
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}