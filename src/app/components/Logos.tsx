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
  const center = 300;
  const offset = 180; // vertical offset between rows (increased from 160)
  const sideOffsetX = 160; // horizontal offset for side columns
  const sideOffsetY = 90;  // vertical offset for side columns (increased from 62)

  // Manually calculated positions for a visually pleasing circle/hex pattern
  const positions = [
    // Center column (3 logos)
    { x: center, y: center - offset },
    { x: center, y: center },
    { x: center, y: center + offset },
    // Left column (2 logos)
    { x: center - sideOffsetX, y: center - sideOffsetY },
    { x: center - sideOffsetX, y: center + sideOffsetY },
    // Right column (2 logos)
    { x: center + sideOffsetX, y: center - sideOffsetY },
    { x: center + sideOffsetX, y: center + sideOffsetY },
  ];

  return (
    <div className="relative w-[600px] h-[600px]">
      {positions.map((pos, i) => (
        <div
          key={logos[i]?.key ?? i}
          className="absolute"
          style={{
            left: `${pos.x - logoSize / 2}px`,
            top: `${pos.y - logoSize / 2}px`,
          }}
        >
          {logos[i]}
        </div>
      ))}
    </div>
  );
}

type LogoProps = {
  src: string;
  name: string;
};

function Logo({ src, name }: LogoProps) {

  
  return (
    <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300" className="flex flex-col justify-center items-center border-4 rounded-full w-36 h-36 overflow-hidden">
      <Image src={src} alt={`${name} logo`} width={50} height={50} />
      <a className="text-xs mt-4 font-semibold">{name}</a>
    </div>
  );
}
