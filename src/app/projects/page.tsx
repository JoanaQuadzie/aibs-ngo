import Image from "next/image";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/project-card";

const PROJECT_LIST: Project[] = [
  {
    imageUrl: "/images/hero2.jpg",
    title: "TECH BOOTCAMP FOR BEGINNERS",
    description: `This bootcamp provides hands-on coding and technical skills training for women with little or no tech, background It is an intensive 8-12 week program that teaches skills such as web development, data science, cybersecurity, and software development as well as include career guidance and interview preparation.`,
  },
  {
    imageUrl: "/images/hero3.jpg",
    title: "Women in Tech Mentorship Program",
    description: `Participants are matched with mentors based on their specific career goals. The program includes regular check-ins, goal setting, and career advice over a 6-month period.  Mentorship will provide support, networking, and personal growth opportunities, helping women navigate challenges in their tech journey.`,
  },
  {
    imageUrl: "/images/hackathon.png",
    title: "Tech4Good Hackathons",
    description: `Teams work together to develop tech-based solutions for challenges such as education, health, climate change, or women’s empowerment. Winning teams receive funding, mentorship, or collaboration with relevant organizations.`,
  },
  {
    imageUrl: "/images/entrep.jpg",
    title: "Entrepreneurship Accelerator Program",
    description: `A 6-month program offering workshops on business development, product design, and funding strategies. Participants receive mentorship from experienced entrepreneurs and pitch their startups to potential investors. This helps women tech entrepreneurs bring their ideas to market`,
  },
  {
    imageUrl: "/images/conference.png",
    title: "Annual Women in Tech Conference",
    description: `This event features keynote speakers, panel discussions, and breakout sessions covering topics like leadership in tech, career growth, and the latest industry trends. It also includes a showcase of women-led startups.`,
  },
  {
    imageUrl: "/images/digital.jpg",
    title: "Digital Literacy Programs in Underserved Areas",
    description: `Provides basic digital literacy training to women in underserved or rural areas.
    Conduct workshops that teach fundamental computer skills, internet usage, and digital tools that enhances their livelihoods and help them pursue tech careers.`,
  },
  {
    imageUrl: "/images/outreach.jpg",
    title: "STEM Outreach for Girls",
    description: `This initiative inspires young girls to explore careers in STEM from an early age and also Encourage girls to pursue STEM careers, building a future generation of women in tech.`,
  },
  {
    imageUrl: "/images/scholar.jpg",
    title: "Tech Scholarship Fund for Women",
    description: `Offer financial assistance to women studying technology at universities, bootcamps, or online certification programs. The scholarship extends to cover costs for professional certifications like AWS or Google certifications which would make tech education more accessible`,
  },
];

export default function ProjectPage() {
  return (
    <div className="bg-primary-dark">
      <h1 className="text-4xl font-serif font-semibold text-center my-6 text-white pt-10">
        PROJECTS
      </h1>

     <section className="grid grid-cols-2 gap-10 px-10 py-14">
     {PROJECT_LIST.map((project) => (
        <ProjectCard
          key={project.title}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
        />
      ))}
     </section>
    </div>
  );
}
