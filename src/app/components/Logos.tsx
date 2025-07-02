"use client"

import Image from "next/image";



const logos = [
  <Logo key={"springbootlogo"} src="logos/springbootlogo.svg" name="SPRING BOOT" />,
  <Logo key={"reactlogo"} src="logos/reactlogo.svg" name="REACT" />,
  <Logo key={"nextjslogo"} src="logos/nextjslogo.svg" name="NEXT.JS" />,
  <Logo key={"nodejslogo"} src="logos/nodejslogo.svg" name="NODE.JS" />,
  <Logo key={"flutterlogo"} src="logos/flutterlogo.svg" name="FLUTTER" />,
  <Logo key={"ioslogo"} src="logos/ioslogo.svg" name="iOS" />,
  <Logo key={"androidlogo"} src="logos/androidlogo.svg" name="ANDROID" />,
]

export default function Logos() {
  // Manual positions for 7 logos in a hexagonal/circle-like pattern
  // Centered in an 800x800px container, logo size 144px
  const logoSize = 144;

  // Desktop positions
  const centerDesktop = 300;
  const offsetDesktop = 180;
  const sideOffsetXDesktop = 160;
  const sideOffsetYDesktop = 90;
  const positionsDesktop = [
    { x: centerDesktop, y: centerDesktop - offsetDesktop },
    { x: centerDesktop, y: centerDesktop },
    { x: centerDesktop, y: centerDesktop + offsetDesktop },
    { x: centerDesktop - sideOffsetXDesktop, y: centerDesktop - sideOffsetYDesktop },
    { x: centerDesktop - sideOffsetXDesktop, y: centerDesktop + sideOffsetYDesktop },
    { x: centerDesktop + sideOffsetXDesktop, y: centerDesktop - sideOffsetYDesktop },
    { x: centerDesktop + sideOffsetXDesktop, y: centerDesktop + sideOffsetYDesktop },
  ];

  // Mobile positions
  const centerMobile = 200;
  const offsetMobile = 150;
  const sideOffsetXMobile = 100;
  const sideOffsetYMobile = 75;
  const positionsMobile = [
    { x: centerMobile, y: centerMobile - offsetMobile },
    { x: centerMobile, y: centerMobile },
    { x: centerMobile, y: centerMobile + offsetMobile },
    { x: centerMobile - sideOffsetXMobile, y: centerMobile - sideOffsetYMobile },
    { x: centerMobile - sideOffsetXMobile, y: centerMobile + sideOffsetYMobile },
    { x: centerMobile + sideOffsetXMobile, y: centerMobile - sideOffsetYMobile },
    { x: centerMobile + sideOffsetXMobile, y: centerMobile + sideOffsetYMobile },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="relative w-[600px] h-[600px] hidden sm:block">
        {positionsDesktop.map((pos, i) => (
          <div
            key={logos[i]?.key ?? i}
            className="absolute"
            style={{
              left: `${pos.x - logoSize / 2}px`,
              top: `${pos.y - logoSize / 2}px`,
              width: `${logoSize}px`,
              height: `${logoSize}px`,
            }}
          >
            {logos[i]}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="relative w-[400px] h-[400px] block sm:hidden">
        {positionsMobile.map((pos, i) => (
          <div
            key={logos[i]?.key ?? i}
            className="absolute"
            style={{
              left: `${pos.x - logoSize / 2}px`,
              top: `${pos.y - logoSize / 2}px`,
              width: `${logoSize}px`,
              height: `${logoSize}px`,
            }}
          >
            {logos[i]}
          </div>
        ))}
      </div>
    </>
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
      className="flex flex-col justify-center items-center w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-full p-[3px] bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600"
    >
      <div className="flex flex-col justify-center items-center w-full h-full bg-[var(--background)] rounded-full">
        <Image
          src={src}
          alt={`${name} logo`}
          width={50}
          height={50}
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
        />
        <a className="text-xs mt-4 font-semibold">{name}</a>
      </div>
    </div>
  );
}
