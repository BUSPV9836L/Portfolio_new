import { useNavigate } from "react-router";
import P1 from "../../assets/project_1.png";
import P2 from "../../assets/project_2.png";
import P3 from "../../assets/project_3.png";
import P4 from "../../assets/project_4.png";
import P5 from "../../assets/project_5.png";

export const projects = [
  {
    title: "PolkaStarter",
    subtitle: "Crypto Launchpad Platform (UI & Backend Simulation)",
    description:
      "This project was built to strengthen my understanding of complex UI layouts and component-driven architecture using React. I recreated the PolkaStarter launchpad interface to practice responsive design, state management, and reusable components. On the backend, Node.js was used to simulate API responses for token listings and project data, helping me understand how frontend applications interact with real-world APIs.",
    tech: ["React", "Node.js", "REST APIs", "Tailwind CSS"],
    image: P1,
    accent: "text-white",
  },
  {
    title: "WeekaWay",
    subtitle: "Hotel Booking Web Application",
    description:
      "I built this project to understand how real-world booking platforms work. The application allows users to browse hotels, filter results, and view booking details. React was used to manage UI state and user interactions, while Node.js handled backend logic such as hotel data management and booking requests. This project helped me learn how frontend and backend systems communicate in a full-stack application.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: P2,
    accent: "text-white",
  },
  {
    title: "Sorting Algorithm Visualization",
    subtitle: "Interactive Educational Web Application",
    description:
      "This project was created to visually demonstrate how different sorting algorithms work internally. Using React, I built an interactive UI that animates each step of the algorithm, making it easier to understand time complexity and behavior. Node.js was used to manage algorithm logic and configuration, allowing the frontend to focus purely on visualization and user experience.",
    tech: ["React", "Node.js", "JavaScript Algorithms"],
    image: P3,
    accent: "text-white",
  },
  {
    title: "Netflix Clone",
    subtitle: "Streaming Platform with AI-Based Recommendations",
    description:
      "The Netflix Clone was built to explore advanced frontend concepts and AI integration. React was used to create a responsive, dynamic user interface similar to Netflix. Node.js powers the backend APIs for movie data and user preferences. Additionally, I integrated OpenAI to generate personalized movie recommendations based on user viewing history and preferences, simulating how intelligent recommendation systems work in modern streaming platforms.",
    tech: ["React", "Node.js", "OpenAI API", "REST APIs"],
    image: P4,
    accent: "text-white",
  },
  {
    title: "Time Tracker",
    subtitle: "Productivity & Time Management Application",
    description:
      "I built this project to understand productivity tools and real-time data handling. The application allows users to track time spent on tasks and analyze productivity patterns. React handles real-time UI updates and state management, while Node.js manages task data, time logs, and API endpoints. This project improved my understanding of full-stack workflows and user-focused feature design.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: P5,
    accent: "text-white",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-10">
      <div className="relative z-10 mb-16">
        <h2 className="text-4xl font-bold leading-tight text-center sm:text-start">
          Recent Projects <br />
          and <span className="text-violet-500">Achievements</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-3xl noise-bg backdrop-blur-lg overflow-hidden cursor-pointer"
            style={{ "--bg-base": "#121111" }}
            onClick={() =>
              navigate(`/project/${project.title.replace(" ","")}`, {
                state: project,
              })
            }
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl h-40 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-6">
              <h3 className={`text-xl font-semibold ${project.accent}`}>
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
