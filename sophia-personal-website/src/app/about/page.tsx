import Banner from "@/components/banner";
import UpToList from "@/components/upToList";

export default function About() {
  return (
    <main className="flex flex-col py-12 gap-16">
      <div className=" flex flex-col gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">About Me</h1>
        <Banner />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex flex-col gap-4 lg:justify-end text-sm md:text-base">
            <div>
              <p>
                If you’re reading this, welcome to my webpage! I’m Sophia, and I
                am from Houston Texas. I am pursuing a Bachelors of Science in
                Computer Engineering and a Minor in Mathematics at Texas A&M
                University.
              </p>
            </div>
            <div>
              <p>
                I am interested in full stack/software development and
                artificial intelligence. I am a passionate software engineer
                that enjoys creating projects that are aesthetic and user
                centered.
              </p>
            </div>
            <div>
              <p>
                In my free time, I enjoy creating beautiful music and art, and I
                am a violinist in the TAMU Chamber Orchestra.
              </p>
            </div>
            <div>
              <p>
                I am open to internships and co ops for summer 2025. Feel free
                to{" "}
                <a className="text-pink-500 hover:underline" href="/contact">
                  {" "}
                  contact me
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-8">
        <h1 className="font-bold text-3xl lg:text-4xl mt-8 mb-4">What am I up to?</h1>
        <UpToList/>
      </div>
    </main>
  );
}
