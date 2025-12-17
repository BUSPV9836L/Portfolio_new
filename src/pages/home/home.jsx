import { FaArrowRight } from "react-icons/fa6";
import { AnimatedButton } from "../../component/comman";
import AutoScrollRow from "../../component/comman/auto-scroll-row";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNeo4J,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { useNavigate } from "react-router";

const data = [
  { title: "YEARS EXPERIENCE", value: "3+" },
  { title: "PROJECTS", value: "5+" },
  { title: "CLIENTS", value: "2+" },
];

export const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Postgres", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Neo4j", icon: <SiNeo4J className="text-green-400" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <h1 className="text-5xl font-bold leading-tight text-center sm:text-start">
        Transforming <br className=" block sm:hidden" />
        Your <br className=" hidden sm:block" />
        Ideas
        <br className=" block sm:hidden" /> into{" "}
        <span className="text-violet-500">Reality</span>
      </h1>

      <p className="text-md text-gray-300 text-center sm:text-start mt-4">
        Creating intuitive, scalable digital products with clean design and
        modern technologies.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mt-8 max-w-md w-full">
        {data.map((stat, index) => (
          <div
            key={index}
            className=" flex  flex-col items-center sm:items-start"
          >
            <h4 className="text-7xl font-extrabold">{stat.value}</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center sm:justify-normal">
        <div className="flex items-center gap-4 mt-8">
          <AnimatedButton
            text="Let's Talk"
            size="sm"
            onClick={() => {
              navigate("/contacts");
            }}
          />

          <button
            className=" cursor-pointer group flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            onClick={() => {
              navigate("/projects");
            }}
          >
            My Work
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500" />
          </button>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="mt-10 max-w-3xl">
        <AutoScrollRow items={techStack} speed={4} iconSize="sm" />
      </div>
    </section>
  );
};

export default Home;
