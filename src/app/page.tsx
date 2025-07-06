import CanvasBackground from "./components/CanvasBackground";
import FancyButton from "./components/FancyButton";
import NavBar from "./components/NavBar";
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center h-full">
      <section className="flex flex-col justify-center items-center text-center h-screen w-full relative">
        <CanvasBackground className="absolute" />
        <h1 className="z-10 animate-zoom-in">
          {`Hi, I'm `}
          <span className="bg-gradient-to-r to-teal-300 from-teal-700 bg-clip-text text-transparent font-semibold animate-gradient-x">
            Adrià
          </span>
          <br />
          {`I'm a full-stack developer.`}
        </h1>
        <FancyButton
          className="my-8 text-2xl animate-translate-up"
          href={"#about-me"}
        >
          Learn More
        </FancyButton>
      </section>
      <NavBar />
      <IntroSection />
      <ProjectsSection />
    </main>
  );
}
