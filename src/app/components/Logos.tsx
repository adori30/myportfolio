"use client";

import Image from "next/image";

const logos = [
  <Logo
    key={"springbootlogo"}
    src="logos/springbootlogo.svg"
    name="SPRING BOOT"
  />,
  <Logo key={"reactlogo"} src="logos/reactlogo.svg" name="REACT" />,
  <Logo key={"nextjslogo"} src="logos/nextjslogo.svg" name="NEXT.JS" />,
  <Logo key={"nodejslogo"} src="logos/nodejslogo.svg" name="NODE.JS" />,
  <Logo key={"flutterlogo"} src="logos/flutterlogo.svg" name="FLUTTER" />,
  <Logo key={"ioslogo"} src="logos/ioslogo.svg" name="iOS" />,
  <Logo key={"androidlogo"} src="logos/androidlogo.svg" name="ANDROID" />,
];

export default function Logos() {
  return (
    <div className="grid grid-cols-3 md:gap-x-1">
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex justify-center">{logos[0]}</div>
        <div className="flex justify-center">{logos[1]}</div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex justify-center">{logos[2]}</div>
        <div className="flex justify-center">{logos[3]}</div>
        <div className="flex justify-center">{logos[4]}</div>
      </div>

      <div className="flex flex-col gap-10 justify-center">
        <div className="flex justify-center">{logos[5]}</div>
        <div className="flex justify-center">{logos[6]}</div>
      </div>
    </div>
  );
}

type LogoProps = {
  src: string;
  name: string;
};

function Logo({ src, name }: LogoProps) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="400"
      data-aos-delay="300"
      data-aos-once="true"
      className="flex flex-col justify-center items-center w-22 h-22 md:w-36 md:h-36 overflow-hidden rounded-full p-[3px] bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600"
    >
      <div className="flex flex-col justify-center items-center w-full h-full bg-[var(--background)] rounded-full">
        <Image
          src={src}
          alt={`${name} logo`}
          width={50}
          height={50}
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
        />
        <a className="text-[9px] md:text-xs mt-2 md:mt-4 font-semibold">{name}</a>
      </div>
    </div>
  );
}
