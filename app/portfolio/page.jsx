"use client";

import Image from "next/image";
import Link from "next/link";
import GithubLogo from "@/assets/iconmonstr-github-1";
import CPPLogo from "../../assets/c-plusplus-16-svgrepo-com";
import UELogo from "../../assets/unreal-engine-svgrepo-com";
import EepImage from "../../assets/Eep example shot.webp";
import EekExample from "@/assets/EekExample.png";
import { randomInt } from "crypto";
import { motion } from "framer-motion";
import GamecartdImage from "@/assets/Gamecartd.png";
import FTPIcon from "@/assets/ftp-svg";
import TypescriptIcon from "@/assets/TypescriptIcon";
import NextIcon from "@/assets/NextIcon";
import ReactIcon from "@/assets/ReactIcon";
import PrismaIcon from "@/assets/PrismaIcon";

const PortfolioPage = () => {
  {
    /* Main flexbox */
  }
  return (
    <section
      id="portfolio"
      className="flex flex-col place-items-center p-4 px-6"
    >
      <h1 className="text-3xl pb-1 pt-6 font-black uppercase">Projects</h1>
      <div className="flex flex-col divide-y divide-solid divide-secondary">
        <ProjectCard
          title={"GameCartd"}
          description={
            "Social media service where users can review and track the videogames they have played. UI/UX is modeled after Letterboxd using custom CSS classes and React front-end components."
          }
          madeWith={[NextIcon, ReactIcon, PrismaIcon, TypescriptIcon]}
          image={GamecartdImage}
          href={"https://github.com/nmayne3/gamecartd"}
        ></ProjectCard>
        <ProjectCard
          title={"Eep"}
          description={
            "Single-Player FPS Roguelike developed in Unreal Engine. As players fight their way through a haunted house in search of a way out, they will have to collect weapons and powerups along the way."
          }
          madeWith={[UELogo, CPPLogo]}
          image={EekExample}
          href={"https://github.com/nmayne3/CPSC-491-Project"}
          className={"md:flex-row-reverse"}
        ></ProjectCard>
        <ProjectCard
          title={"FTP Server"}
          description={
            "Console application from which users can upload and download files to/from a server across a network. If the server is running, users sign in and attempt a handshake to connect to the server. When inside, they can upload, download, or delete files from the server's contents using TCP protocols."
          }
          madeWith={[CPPLogo]}
          href={"https://github.com/McGabriel99/assignment-1"}
        >
          <div className="m-auto h-52">
            <FTPIcon className="w-full h-full" />
          </div>
        </ProjectCard>
      </div>
    </section>
  );
};

export default PortfolioPage;

const Button = ({ text, icon, href, ...rest }) => {
  return (
    <Link
      className={`stripes max-h-full flex flex-row w-fit px-4 py-2.5 hover:scale-105 
        *:fill-accent outline outline-1.5 outline-secondary 
        rounded-full text-base gap-2 place-items-center font-normal normal-case ${rest}`}
      href={href}
    >
      {icon()}
      {text}
    </Link>
  );
};

const ProjectCard = ({
  title,
  description,
  madeWith,
  image,
  href,
  children,
  className,
}) => {
  return (
    <motion.div
      className={`max-w-3xl flex flex-col md:flex-row bg-inherit rounded-none ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: "10px" }}
      whileInView={{ opacity: 1, scale: 1, y: "0px" }}
      viewport={{ once: true, amount: 0.1, margin: "-20px -20px -20px -20px" }}
    >
      {/* Project Description */}
      <div className="flex basis-1/2 flex-col font-black text-2xl  p-4 lg:p-8 uppercase">
        {title}
        <div className="flex flex-row text-sm font-semibold text-secondary *:fill-secondary place-items-center gap-1 py-3 capitalize">
          {" "}
          Made with:
          {madeWith.map((icon) => (
            <div className="*:fill-secondary"> {icon()} </div>
          ))}
        </div>
        <p className="text-sm font-normal normal-case p-0"> {description} </p>
        <div className=" pt-4">
          <Button
            text={"GitHub"}
            icon={GithubLogo}
            href={href}
            className=""
          ></Button>
        </div>
      </div>
      {/** Example Image */}
      <div className=" hidden md:flex flex-shrink basis-1/2 bg-primary p-4 my-auto mx-4 place-items-center">
        <div className="bg-secondary rounded-md">
          {image && (
            <Image
              src={image}
              quality={1}
              placeholder="blur"
              className="object-cover rounded-md "
            />
          )}
        </div>
        {children}
      </div>
    </motion.div>
  );
};
