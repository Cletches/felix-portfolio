import Image from "next/image";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About Felix">
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
        <div
          className="relative h-72 w-full overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Felix Ofori"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>
        <div className="space-y-5 text-[var(--text-secondary)]">
          <p className="text-lg text-[var(--text-primary)]">
            I am a software engineer focused on building real products that
            solve meaningful problems.
          </p>
          <p>
            My journey into technology started with curiosity - understanding
            how systems work, how ideas become software, and how software can
            impact people at scale. Since then, I have dedicated myself to
            designing and developing applications that are not only functional,
            but useful, reliable, and thoughtfully engineered.
          </p>
          <p>
            I have built full-stack web applications, automated trading systems,
            and developer tools, taking ideas from concept to deployment. My
            work emphasizes clean architecture, performance, and simplicity. I
            enjoy working across the stack, from backend systems and APIs to
            intuitive, user-focused interfaces.
          </p>
          <p>
            What drives me most is creation. I do not just study computer
            science - I use it to build. This includes developing applications
            that others can use, sharing tools freely, and continuously
            improving my technical and product thinking.
          </p>
          <p>
            I am especially interested in software engineering, systems design,
            and building scalable products that have real-world impact. My
            long-term goal is to contribute to high-impact engineering teams and
            build technology that reaches and helps millions of people.
          </p>
          <p>
            Outside of coding, I spend time refining my skills, exploring new
            technologies, and turning ideas into working software.
          </p>
          <p>
            This site is a collection of what I have built, what I am building,
            and what I will build next.
          </p>
        </div>
      </div>
    </Section>
  );
}
