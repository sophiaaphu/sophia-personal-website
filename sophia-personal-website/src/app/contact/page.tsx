"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import emailjs from "@emailjs/browser";
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Email failed to send", error);
      });
  };

  return (
    <main className="flex flex-col py-12 gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">Contact Me</h1>
        <div>
          <p className=" text-sm md:text-base">
            If you want to contact me, feel free to email me at
            sophiatiffphu@gmail.com or message me on LinkedIn. However, for your
            convenience, you can also message me right here!
          </p>
        </div>
        <div className="bg-[#FEEDF5] rounded-lg shadow-md">
          <form onSubmit={sendEmail} className="flex flex-col gap-4 p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="shadow-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                className="shadow-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-md"
              />
            </div>
            <div className="flex">
              <Button
                type="submit"
                className=" w-48 shadow-md hover:-translate-y-2 duration-200"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:hidden"></div>
    </main>
  );
}
