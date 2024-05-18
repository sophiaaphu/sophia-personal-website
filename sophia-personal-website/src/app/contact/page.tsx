'use client';
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-12  px-8 lg:px-24 bg-[#FBD0DE]">
      <Header/>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">
          Contact Me
        </h1>
        <div>
          <p>
            If you want to contact me, feel free to email me at sophiatiffphu@gmail.com or message me on Linkedln. However, for your convivence, you can also message me right here!
          </p>
        </div>
        <div className=" bg-[#FEEDF5] rounded-2xl">
          <form className="flex flex-col gap-4 p-8">
            <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder= "Name" id="name" name="name" className="rounded-xl p-2" required/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder= "Email" id="email" name="email" className="rounded-xl p-2" required/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="subject">Subject</label>
            <input type="subject" placeholder= "Subject" id="subject" name="subject" className="rounded-xl p-2" required/>
            </div>
            <div className="flex flex-col gap-1  h-1/2">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder= "Message"  name="message" className="rounded-xl p-2" required/>
            </div>
            <div className="flex flex-col items-center gap-1">
            <button type="submit" className="bg-[#FBD0DE] rounded-xl p-2 w-1/2 lg:w-1/3">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}