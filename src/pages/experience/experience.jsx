import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";

export const experiences = [
  {
    id: "hipaas-inc",
    company: "HiPaas Inc.",
    duration: "Mar 2023 – Present",
    overview:
      "Worked on scalable web applications in healthcare and dealer-management domains, focusing on performance, integrations, and automation.",
    details: [
      "Designed and implemented reusable React components using Bootstrap.",
      "Developed REST APIs using Node.js and Express.js.",
      "Integrated Stripe payment gateway and FedEx shipping APIs.",
      "Processed large healthcare datasets and converted them into structured JSON.",
    ],
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Neo4j",
      "AWS",
      "Stripe",
      "FedEx API",
      "Docker",
    ],
    impact:
      "Improved operational efficiency and delivered reliable production-grade integrations.",
    companyLink: "https://hipaas.com",

    // ✅ PROJECTS INSIDE EXPERIENCE JSON
    projects: [
      {
        id: "dealerpass",
        name: "DealerPass",
        duration: "Jun 2023 – 2024",
        overview:
          "A dealer management platform built to automate dealer workflows and improve operational efficiency.",
        techStack: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Bootstrap",
          "Docker",
          "AWS (S3, SES)",
        ],
        responsibilities: [
          "Developed responsive UI screens using React and Bootstrap.",
          "Built RESTful APIs for data handling and business logic.",
          "Integrated AWS S3 for document storage and SES for automated emails.",
          "Collaborated with cross-functional teams and participated in client discussions.",
        ],
      },
      {
        id: "ozempic-platform",
        name: "Ozempic",
        duration: "Sep 2024 – Present",
        overview:
          "A B2B medicine procurement and bidding platform connecting medical shops with suppliers.",
        techStack: [
          "React",
          "Node.js",
          "Neo4j",
          "Stripe (ACH, Webhooks)",
          "FedEx API",
          "AWS SES",
        ],
        responsibilities: [
          "Implemented bidding and purchasing workflows using React and Node.js.",
          "Integrated Stripe ACH payments with webhook handling.",
          "Added FedEx APIs for real-time order tracking.",
          "Used Neo4j graph database to manage supplier–buyer relationships.",
        ],
      },
    ],
  },
];



const Experience = () => {
  const navigate=useNavigate()
  return (
    <section className="relative text-white">
      <div className="relative mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold leading-tight text-center sm:text-start">
          Over 3 Years of <br />
          Design and Software Developement
          <span className="bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Expertise
          </span>
        </h1>

        <div className="space-y-6 mt-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start justify-between rounded-2xl noise-bg p-8 cursor-pointer"
              style={{ "--bg-base": "#121111" }}
              onClick={() => navigate(`/experience/${item.id}`,{
                state:item
              })}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <p className="mt-2 max-w-xl text-sm text-gray-300">
                  {item.overview}
                </p>
                <span className="mt-3 block text-xs text-gray-400">
                  {item.duration}
                </span>
              </div>
             <button
              aria-label="Start collaboration"
              
              className="
              absolute
              top-1
              right-1
              cursor-pointer
              sm:relative
              group
              min-w-10 min-h-10
              rounded-full
              bg-violet-500
              flex items-center justify-center
              transition-colors duration-300
              hover:bg-white
              overflow-hidden
              "
            >
              
              <span
                className="
                absolute
                text-white
                transition-all duration-200 ease-out
                group-hover:opacity-0
                group-hover:scale-75
              "
              >
                <BsArrowUpRight size={16} />
              </span>

             
              <span
                className="
                absolute
                text-violet-500
                opacity-0
                transform
                translate-x-[-60%] translate-y-[60%]
                transition-all duration-200 ease-out
                delay-150
                group-hover:translate-x-0
                group-hover:translate-y-0
                group-hover:opacity-100
              "
              >
                <BsArrowUpRight size={16} />
              </span>
            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
