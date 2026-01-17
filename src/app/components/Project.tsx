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
} & ({ repo?: string; site?: never } | { repo?: never; site?: string });

function ProjectText({ children, right, title, repo, site }: TextProps) {
  const textAlign = right ? "xl:text-right" : "";
  const titleStyle = right
    ? "xl:right-0 xl:bg-gradient-to-l xl:self-end"
    : "xl:left-0 xl:bg-gradient-to-r xl:self-start";
  const buttonAlign = right ? "mt-8 xl:self-end" : "mt-8";
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
      {repo && <GithubButton repo={repo} className={buttonAlign} />}
      {site && <LiveSiteButton site={site} className={buttonAlign} />}
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
    <a href={`https://github.com/adori30/${repo}`} target="_blank" rel="noopener noreferrer" className={className}>
      <button
        className={`flex flex-row px-4 py-2 rounded-full
    items-center gap-2 border-slate-700 w-fit cursor-pointer bg-slate-300
    text-slate-900 md:text-xl font-mono
    transition-transform duration-200 hover:scale-110`}
      >
        <span>Source Code</span>
        <Image src={"/github.svg"} height={32} width={32} alt="github logo" />
      </button>
    </a>
  );
}

type LiveSiteButtonProps = {
  site: string;
  className?: string;
};

function LiveSiteButton({ site, className }: LiveSiteButtonProps) {
  return (
    <a href={site} target="_blank" rel="noopener noreferrer" className={className}>
      <button
        className={`flex flex-row px-4 py-2 rounded-full
    items-center gap-2 border-slate-700 w-fit cursor-pointer bg-slate-300
    text-slate-900 md:text-xl font-mono
    transition-transform duration-200 hover:scale-110`}
      >
        <span>Live Site</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </button>
    </a>
  );
}

export default Project;
