import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="w-full h-26 md:h-40 bg-[#444444] flex flex-row gap-5 justify-center items-center relative">
      <a className="absolute left-1/2 top-0.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer" href="#top">
        <span className="material-icons text-white text-4xl bg-teal-600 select-none pointer-events-none p-1 md:p-2">
          keyboard_double_arrow_up
        </span>
      </a>
      {/* Social icons */}
      <SocialIcon
        className="transition-transform duration-200 hover:scale-110"
        bgColor="#2c2c2c"
        url="https://www.linkedin.com/in/anavarroma/"
      />
      <SocialIcon
        className="transition-transform duration-200 hover:scale-110"
        bgColor="#2c2c2c"
        fgColor="white"
        url="https://github.com/adori30"
      />
    </footer>
  );
}
