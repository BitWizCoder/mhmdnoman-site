"use client";

import Lottie from "lottie-react";
import homeAnimation from "@/app/assets/lottie-animations/home-animation.json";

export default function Home() {
  return (
    <div className="flex mt-36 ml-10">
      <div>
        <h1 className="text-5xl">
          HI! <br /> I’m Noman
        </h1>
        <p className="mt-4">
          <span className="text-[#54AAF1]">Full-stack</span> Self-Taught Web
          Developer. i’m very passionate about programming and tech, love to
          explore and learn new tools and technology.
        </p>

        <div className="flex gap-6 mt-4">
          <button className="btn btn-neutral">See Projects</button>
          <button className="btn btn-neutral">Download Resume</button>
        </div>
      </div>
      <div className="w-full">
        {/* <Lottie animationData={homeAnimation} loop={true} /> */}
      </div>
    </div>
  );
}
