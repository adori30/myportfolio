import CanvasBackground from "./components/CanvasBackground";
import FancyButton from "./components/FancyButton";
import Logos from "./components/Logos";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center h-full">
      <section className="flex flex-col justify-center items-center text-center h-screen w-full relative">
        <CanvasBackground className="absolute" />
        <h1 className="z-10 animate-zoom-in">
          {`Hi, I'm `}
            <span className="bg-gradient-to-r to-teal-300 from-teal-700 bg-clip-text text-transparent font-semibold">Adrià</span>
          <br />
          {`I'm a full-stack developer.`}
        </h1>
        <FancyButton
          className="my-8 text-2xl animate-translate-up"
          href={"#about-me-section"}
        >
          About Me
        </FancyButton>
      </section>
      <NavBar />
      <Section className="flex flex-row px-24 justify-between items-center" id="about-me-section" title="About Me">
        <p data-aos="fade-right" data-aos-delay="100" className="text-xl max-w-3xl border rounded-4xl p-12 text-left">
            {`
            I'm a full-stack software engineer with a strong foundation in backend development, product thinking, and user-centered design. I began my career in mobile development and have since worked across the stack using technologies like Java, Spring, React, and NodeJS.

            Over the years, I've helped clients—from large enterprises to startups—build reliable, maintainable systems while mentoring teams in practices like Test-Driven Development and Extreme Programming. My approach is deeply collaborative, balancing technical excellence with a focus on user experience and business goals.

            Originally from Barcelona and now based in Dallas, I’m passionate about crafting meaningful software and supporting others in growing their skills.

            Outside of work, I practice and teach Kendo, enjoy cooking (especially exploring new cuisines), and love discovering new corners of the world through travel.
            `.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
        </p>
        <Logos />
      </Section>
    </main>
  );
}
