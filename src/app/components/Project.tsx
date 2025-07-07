import Image from "next/image";

type Props = {
  right?: boolean;
  children?: React.ReactNode;
};

function ProjectRoot({ children, right, ...props }: Props) {
  // Determine flex direction and gradient direction
  const flexDirection = right
    ? "xl:flex-row-reverse flex-col"
    : "xl:flex-row flex-col";
  const gradientDirection = right
    ? "bg-gradient-to-b xl:bg-gradient-to-l from-teal-500/50 from-20% via-teal-500/10 via-60% to-transparent"
    : "bg-gradient-to-b xl:bg-gradient-to-r from-teal-500/50 from-20% via-teal-500/10 via-60% to-transparent";

  return (
    <section
      className="w-full h-full flex flex-row xl:px-10 items-center"
      {...props}
    >
      <div
        className={`flex ${flexDirection} gap-18 items-center ${gradientDirection} p-8 w-full h-full`}
      >
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
  repo?: string;
};

function ProjectText({ children, right, title, repo }: TextProps) {
  const textAlign = right ? "xl:text-right" : "";
  const titleStyle = right
    ? "xl:right-0 xl:bg-gradient-to-l xl:self-end"
    : "xl:left-0 xl:bg-gradient-to-r xl:self-start";
  return (
    <div className="xl:max-w-2/4 flex flex-col relative h-full">
      <h2
        className={`${titleStyle} from-teal-600/70 to-transparent mb-6 xl:mb-8 xl:p-2 font-bold`}
      >
        {title}
      </h2>
      <p
        className={`text-base md:text-2xl font-extralight text-slate-200 ${textAlign}`}
      >
        {children}
      </p>
      {repo && <GithubButton repo={repo} className="mt-8" />}
    </div>
  );
}

const Project = {
  Root: ProjectRoot,
  Image: ProjectImage,
  Text: ProjectText,
};

type GithubButtonProps = {
  repo: string;
  className?: string;
};

function GithubButton({ repo, className }: GithubButtonProps) {
  return (
    <a href={`https://github.com/adori30/${repo}`} target="_blank" rel="noopener noreferrer">
      <button
        className={`flex flex-row px-4 py-2 rounded-full 
    items-center gap-2 border-slate-700 w-fit cursor-pointer bg-slate-300
    text-slate-900 md:text-xl font-mono
    transition-transform duration-200 hover:scale-110
     ${className}`}
      >
        <a>Source Code</a>
        <Image src={"/github.svg"} height={32} width={32} alt="github logo" />
      </button>
    </a>
  );
}

export default Project;
