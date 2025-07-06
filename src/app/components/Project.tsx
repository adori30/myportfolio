import Image from "next/image";

type Props = {
  right?: boolean;
  children?: React.ReactNode;
};

function ProjectRoot({ children, right, ...props }: Props) {
  // Determine flex direction and gradient direction
  const flexDirection = right ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col";
  const gradientDirection = right
    ? "bg-gradient-to-b md:bg-gradient-to-l from-teal-500/50 from-20% via-teal-500/10 via-60% to-transparent"
    : "bg-gradient-to-b md:bg-gradient-to-r from-teal-500/50 from-20% via-teal-500/10 via-60% to-transparent";

  return (
    <section className="w-full h-full flex flex-row md:px-10 items-center" {...props}>
      <div className={`flex ${flexDirection} gap-18 items-center ${gradientDirection} p-8 w-full h-full`}>
        {children}
      </div>
    </section>
  );
}

type ImageProps = {
  src: string;
  className?: string;
};

function ProjectImage({ src, className }: ImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt="Project Image"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

type TextProps = {
  title?: string;
  children?: React.ReactNode;
  right?: boolean;
}

function ProjectText({children, right, title}: TextProps) {
  const textAlign = right ? "md:text-right" : "";
  const titleStyle = right ? "md:right-0 md:bg-gradient-to-l" : "md:left-0 md:bg-gradient-to-r";
  return (
    <div className="md:max-w-2/4 flex flex-col 2xl:items-center relative h-full">
      <h2 className={`2xl:absolute -top-44 ${titleStyle} from-teal-600/70 to-transparent mb-6 2xl:mb-0 md:p-2 font-bold`}>{title}</h2>
      <p className={`text-base md:text-2xl font-extralight text-slate-200 ${textAlign}`}>{children}</p>
    </div>
  );
}

const Project = {
  Root: ProjectRoot,
  Image: ProjectImage,
  Text: ProjectText,
};

export default Project;