import Logos from "../components/Logos";
import Section from "../components/Section";

export default function IntroSection() {
  return (
    <Section
      className="flex flex-1 flex-col md:flex-row md:gap-10 px-4 md:px-10 justify-between min-h-screen md:min-h-0 md:h-[600px] md:items-center md:justify-center"
      id="about-me"
      title="About Me"
    >
      <p
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-once="true"
        className="xl:text-xl 2xl:text-2xl md:max-w-1/2 rounded-4xl mb-12 md:mb-0"
      >
        {`
                I'm a full-stack software engineer with a strong foundation in both backend and frontend development, product thinking, and user-centered design. Whether building robust APIs, architecting scalable systems, or crafting engaging user interfaces, I enjoy working across the stack using technologies like Java, Spring, React, and NodeJS.
    
                Over the years, I've helped clients—from large enterprises to startups—build reliable, maintainable systems while mentoring teams in practices like Test-Driven Development and Pair Programming. My approach is deeply collaborative, balancing technical excellence with a focus on user experience and business goals.
    
                Originally from Barcelona and now based in Dallas, I'm passionate about crafting meaningful software and supporting others in growing their skills.
    
                Outside of work, I practice and teach Kendo, enjoy cooking (especially exploring new cuisines), and love discovering new corners of the world through travel.
                `
          .split("\n")
          .map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
      </p>
      <Logos />
    </Section>
  );
}
