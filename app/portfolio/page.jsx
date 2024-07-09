import Image from "next/image";
import Link from "next/link";
import GithubLogo from "@/assets/iconmonstr-github-1";
import CPPLogo from "../../assets/c-plusplus-16-svgrepo-com";
import UELogo from "../../assets/unreal-engine-svgrepo-com";
import EepImage from "../../assets/Eep example shot.webp";
import { randomInt } from "crypto";

const PortfolioPage = () => {
  {
    /* Main flexbox */
  }
  return (
    <div className="flex flex-col place-items-center gap-8 pb-10 px-6">
      <div className="text-3xl pb-1 pt-6 font-black uppercase">Projects</div>
      <ProjectCard
        title={"Eep"}
        description={
          "Single-Player FPS Roguelike developed in Unreal Engine. As players fight their way through a haunted house in search of a way out, they will have to collect weapons and powerups along the way."
        }
        madeWith={[UELogo, CPPLogo]}
        image={EepImage}
      ></ProjectCard>
      <ProjectCard
        title={"GameCartd"}
        description={
          "Social media service where users can review and track the videogames they have played. It's just letterboxd but for videogames lol"
        }
        madeWith={[CPPLogo, UELogo]}
        image={EepImage}
      ></ProjectCard>
      <ProjectCard
        title={"FTP Server"}
        description={
          "Console application from which users can upload and download files to/from a server across a network. If the server is running, users sign in and attempt a handshake to connect to the server. When inside, they can upload, download, or delete files from the server's contents using TCP protocols."
        }
        madeWith={[CPPLogo]}
        image={EepImage}
      ></ProjectCard>
    </div>
  );
};

export default PortfolioPage;

const Button = ({ text, icon, href, ...rest }) => {
  return (
    <Link
      className={`flex flex-row w-fit px-4 py-2.5 hover:scale-105 
        *:fill-secondary outline outline-1.5 outline-secondary 
        rounded-full text-base gap-2 place-items-center font-normal normal-case ${rest}`}
      href={href}
    >
      {icon()}
      {text}
    </Link>
  );
};

const ProjectCard = ({ title, description, madeWith, image }) => {
  return (
    <div className="max-w-3xl flex flex-col md:flex-row bg-trimary rounded-md shadow-sm ">
      {/* Project Description */}
      <div className="flex basis-1/2 flex-col font-black text-2xl text-secondary p-4 lg:p-8 uppercase">
        {title}
        <div className="flex flex-row text-sm font-semibold text-accent *:fill-accent place-items-center gap-1 py-3 capitalize">
          {" "}
          Made with:
          {madeWith.map((icon) => (
            <div key={randomInt(100)} className="*:fill-accent">
              {" "}
              {icon()}{" "}
            </div>
          ))}
        </div>
        <p className="text-sm font-normal normal-case"> {description} </p>
        <div className=" pt-4">
          <Button
            text={"GitHub"}
            icon={GithubLogo}
            href={"https://github.com/nmayne3"}
            className=""
          ></Button>
        </div>
      </div>
      {/** Example Image */}
      <div className=" hidden md:flex flex-shrink basis-1/2 bg-primary p-4 my-auto mx-4 place-items-center">
        <div className="bg-secondary">
          <Image
            src={image}
            quality={1}
            placeholder="blur"
            className="object-cover rounded-md"
          ></Image>
        </div>
      </div>
    </div>
  );
};
