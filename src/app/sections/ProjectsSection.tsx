import Project from "../components/Project";
import Section from "../components/Section";

export default function ProjectsSection() {
  return (
    <Section title="Personal Projects" id="personal-projects">
      <div className="flex flex-col gap-18 md:mt-28 mb-16 mt-8">
        <Bite data-aos="fade-left" data-aos-once="true" />
        <DFWKIK data-aos="fade-right" data-aos-once="true" />
        <SummaryBot data-aos="fade-left" data-aos-once="true" />
      </div>
    </Section>
  );
}

function Bite(props: React.ComponentProps<typeof Project.Root>) {
  return (
    <Project.Root {...props}>
      <Project.Image
        src="/bitepic.webp"
        className="aspect-[1440/2560] h-[50vh] md:h-[40vh] xl:h-[50vh]"
      />
      <Project.Text title="Bite Mobile App">
        Bite is a mobile app that allows you to swipe on places to eat and match
        with your friends. Deciding on where to grab a Bite has never been
        easier!
        <br />
        <br />
        Built using Flutter and Dart, for iOS and Android. Also uses Firebase as
        a backend.
      </Project.Text>
    </Project.Root>
  );
}

function DFWKIK(props: React.ComponentProps<typeof Project.Root>) {
  return (
    <Project.Root right {...props}>
      <Project.Image
        src="/dfwkik.png"
        className="aspect-[1683/1069] h-[22vh] xl:h-[35vh] 2xl:h-[50vh]"
      />
      <Project.Text title="Dallas Kendo Website" right>
        Official website for the Dallas/Fort Worth Kendo and Iaido Kyokai
        martial arts club. Fully responsive. Developed with Next.js and a self-hosted PayloadCMS
        for dynamic content and user management.
        <br />
        <br />
        Features a robust user management system, Stripe integration for
        membership subscriptions and store purchases, and is deployed on AWS
        with MongoDB as the database.
        <br />
        <br />
        (Not yet live)
      </Project.Text>
    </Project.Root>
  );
}

function SummaryBot(props: React.ComponentProps<typeof Project.Root>) {
  return (
    <Project.Root {...props}>
      <Project.Image
        src="/aisummarybot.jpg"
        className="aspect-[1/1] h-[30vh] xl:ml-8 xl:my-24"
      />
      <Project.Text title="AI Summary Bot">
        A Telegram bot that uses AI to monitor and summarize recent
        conversations in group chats.
        <br />
        <br />
        Built with Python and Postgres, leveraging OpenAI&apos;s API to generate
        concise, language-aware summaries. Automatically detects the
        conversation&apos;s language to deliver summaries in the appropriate
        language.
      </Project.Text>
    </Project.Root>
  );
}
