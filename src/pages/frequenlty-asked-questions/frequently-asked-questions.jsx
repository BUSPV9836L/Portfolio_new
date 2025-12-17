import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs.",
  },
  {
    question: "What is your design process?",
    answer:
      "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "I work closely with clients to establish clear timelines and milestones, ensuring that projects stay on track and are delivered on time.",
  },
  {
    question: "Can you work with existing teams?",
    answer:
      "Absolutely! I can collaborate seamlessly with existing teams, integrating into your workflow to enhance design and development efforts.",
  },
  {
    question: "What tools do you use?",
    answer:
      "I utilize various tools for design and development, including Figma, Adobe XD, HTML, CSS, JavaScript, and React, ensuring high-quality outcomes for all projects.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-10">
      <h4 className="text-3xl font-semibold leading-tight text-center sm:text-left">
        Frequently <br />
        Asked <span className="text-violet-500">Questions</span>
      </h4>

      <div className="space-y-2 mt-8">
        {faqs.map((faq, index) => {
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
        })}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
