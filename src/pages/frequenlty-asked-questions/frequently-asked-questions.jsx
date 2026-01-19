import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs] = useState([
    {
      question: "What services do you offer?",
      answer:
        "I provide end-to-end SaaS development, including product architecture, frontend and backend development, API integrations, deployment, and long-term scalability planning.",
    },
    {
      question: "Can you enhance an existing SaaS product?",
      answer:
        "Yes. I work on improving existing SaaS applications by adding new features, optimizing performance, improving UI/UX, fixing technical debt, and scaling the system reliably.",
    },
    {
      question: "Do you convert existing projects to a new tech stack?",
      answer:
        "Absolutely. I help migrate legacy or outdated applications to modern tech stacks while ensuring minimal downtime, data safety, and improved performance.",
    },
    {
      question: "Which technologies do you work with?",
      answer:
        "I work with modern SaaS technologies including React, Next.js, Tailwind CSS, Node.js, REST/GraphQL APIs, databases, and cloud deployment platforms.",
    },
    {
      question: "Do you take on full ownership of SaaS projects?",
      answer:
        "Yes. I can take full ownership from idea to production, or collaborate with existing teams to deliver and maintain high-quality SaaS products.",
    },
  ]);

  return (
    <section className="mt-10">
      <h4 className="text-3xl font-semibold leading-tight text-center sm:text-left">
        Frequently <br />
        Asked <span className="text-violet-500">Questions</span>
      </h4>

      <div className="space-y-2 mt-8">
        {faqs.length ? (
          faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="noise-bg rounded-xl overflow-hidden"
                style={{ "--bg-base": "#121111" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                  w-full
                  flex items-center justify-between
                  gap-4
                  px-5 sm:px-6
                  py-3 sm:py-4
                  text-left
                "
                >
                  <span className="text-white font-medium text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>

                  <BiUpArrow
                    className={`
                    w-4 h-4
                    text-violet-400
                    shrink-0
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 sm:px-6 pb-4">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Frequently Asked Questions</p>
        )}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
