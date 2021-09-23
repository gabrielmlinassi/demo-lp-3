import Image from "next/image";

import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import Heading from "@/shared/Heading";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Roles />
        {/* HowWeWork */}
        <section className="max-w-screen-xl mx-auto my-16 sm:px-3 xl:px-0 bg-yellow-300 h-screen">
          <Heading
            highlightedTitle="How"
            title="we work with you"
            subtitle="Your time is valuable. We take the lead—so you can focus on your job."
          />
          <div className="mt-20">
            <div className="inline-flex flex-col items-center space-y-4 w-80">
              <div className="inline-flex">
                <button className="bg-gradient-to-r from-[#2364A4] via-[#3195AC] to-[#42BEAD] px-5 py-2 rounded-md text-white font-bold uppercase">
                  step 1
                </button>
              </div>
              <div className="my-class">
                <Image
                  src="/assets/administrator.png"
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt=""
                />
              </div>
              <div className="font-bold text-[#2263A3] text-center">
                <div>You’re in the hands</div>
                <div>of an expert.</div>
              </div>
              <p className="text-center text-[#5E6284]">
                Meet Ann Cathers, a SweetRush L&D recruiter. Like all of our
                recruiters, she has years of experience vetting learning
                professionals, will understand your business needs, be agile,
                and partner with you throughout the process.
              </p>
            </div>
          </div>
        </section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
