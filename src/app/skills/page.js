"use client";

import React from "react";
import Image from "next/image";

// icons
import js from "@/app/assets/skill-icons/js.svg";
import bootstrap from "@/app/assets/skill-icons/bootstrap.svg";
import css from "@/app/assets/skill-icons/css.svg";
import express from "@/app/assets/skill-icons/express.svg";
import figma from "@/app/assets/skill-icons/figma.svg";
import firebase from "@/app/assets/skill-icons/firebase.svg";
import git from "@/app/assets/skill-icons/git.svg";
import github from "@/app/assets/skill-icons/github.svg";
import html from "@/app/assets/skill-icons/html.svg";
import linux from "@/app/assets/skill-icons/linux.svg";
import mongodb from "@/app/assets/skill-icons/mongodb.svg";
import mui from "@/app/assets/skill-icons/mui.svg";
import nextjs from "@/app/assets/skill-icons/nextjs.svg";
import nodejs from "@/app/assets/skill-icons/node.js.svg";
import postman from "@/app/assets/skill-icons/postman.svg";
import react from "@/app/assets/skill-icons/react.svg";
import tailwind from "@/app/assets/skill-icons/tailwind.svg";
import vscode from "@/app/assets/skill-icons/vscode.svg";

function Skills() {
  return (
    <div className="mt-14 w-[700px]">
      <h1 className="text-3xl mb-3">My Skills</h1>
      <p className="mb-3">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <div className="grid grid-cols-8 gap-y-6 justify-center">
        <Image src={js} alt="skill icon" width={50} height={50} />
        <Image src={bootstrap} alt="skill icon" width={50} height={50} />
        <Image src={css} alt="skill icon" width={50} height={50} />
        <Image src={express} alt="skill icon" width={50} height={50} />
        <Image src={figma} alt="skill icon" width={50} height={50} />
        <Image src={firebase} alt="skill icon" width={50} height={50} />
        <Image src={git} alt="skill icon" width={50} height={50} />
        <Image src={github} alt="skill icon" width={50} height={50} />
        <Image src={html} alt="skill icon" width={50} height={50} />
        <Image src={linux} alt="skill icon" width={50} height={50} />
        <Image src={mongodb} alt="skill icon" width={50} height={50} />
        <Image src={mui} alt="skill icon" width={50} height={50} />
        <Image src={nextjs} alt="skill icon" width={50} height={50} />
        <Image src={nodejs} alt="skill icon" width={50} height={50} />
        <Image src={postman} alt="skill icon" width={50} height={50} />
        <Image src={react} alt="skill icon" width={50} height={50} />
        <Image src={tailwind} alt="skill icon" width={50} height={50} />
        <Image src={vscode} alt="skill icon" width={50} height={50} />
      </div>
    </div>
  );
}

export default Skills;
