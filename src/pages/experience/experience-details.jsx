import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "./experience";
import { BsArrowUpRight } from "react-icons/bs";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experience = experiences.find((e) => e.id === id);

  if (!experience) {
    return (
      <div className="text-white flex items-center justify-center">
        Experience not found
      </div>
    );
  }

  return (
    <section className="text-white">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-400 hover:text-violet-400"
        >
          ← All Experiences
        </button>

        <h1 className="text-4xl font-semibold">{experience.company}</h1>
        <p className="mt-2 text-sm text-gray-400">{experience.duration}</p>

        {/* Overview */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-gray-300">{experience.overview}</p>
        </section>

        {/* Role */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">My Role</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
            {experience.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Skills Acquired</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ✅ Projects Section (JSON Only) */}
        {experience.projects?.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Projects</h2>

            <div className="mt-6 space-y-8">
              {experience.projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-400">
                    {project.duration}
                  </p>

                  <p className="mt-3 text-gray-300">
                    {project.overview}
                  </p>

                  {/* Responsibilities */}
                  <ul className="mt-4 list-disc list-inside space-y-1 text-gray-300">
                    {project.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="mt-3 text-gray-300">{experience.impact}</p>
        </section>

        {/* Company Link */}
        {experience.companyLink && (
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-violet-700/90 px-5 py-2 text-sm hover:bg-violet-600"
          >
            Company Website
            <BsArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </section>
  );
};

export default ExperienceDetail;
