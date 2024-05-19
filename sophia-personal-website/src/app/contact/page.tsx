'use client';
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) =>{
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Email failed to send", error);
      });
  }
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
          <form onSubmit={sendEmail} className="flex flex-col gap-4 p-8">
            <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder= "Name" value={name} id="name" name="name" className="rounded-xl p-2" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder= "Email" value = {email} id="email" name="email" className="rounded-xl p-2" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="subject">Subject</label>
            <input type="subject" placeholder= "Subject" value = {subject} id="subject" name="subject" className="rounded-xl p-2" required onChange={(e) => setSubject(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder= "Message" rows={4} value = {message} name="message" className="rounded-xl p-2" required onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <div className="flex flex-col items-center gap-1">
            <button type="submit" className="bg-[#FBD0DE] rounded-xl p-2 w-1/2 lg:w-1/3">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:hidden">
      </div>
      <Footer />
    </main>
  );
}