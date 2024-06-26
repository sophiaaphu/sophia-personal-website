import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Resume() {
  const pdfUrl = "https://drive.google.com/file/d/1l_ZYUjVsBTHMnOFywGmIeic6DmtWhvG_/preview";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-8 lg:gap-y-12 px-8 lg:px-24 bg-[#FBD0DE]">
      <Header />
      <div className="flex flex-col w-full gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">Resume</h1>
        <p>
          View and download my resume below!
        </p>
        <iframe 
          src={pdfUrl} 
          className="w-full border-none h-[500px] md:h-[800px] lg:h-[1000px] rounded-xl"
          title="Resume PDF"
        />
        <div ></div>
      </div>
      
      <Footer />
    </main>
  );
}