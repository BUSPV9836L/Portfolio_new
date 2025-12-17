import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    name: "David L.",
    role: "Startup Founder",
    review:
      "John’s ability to create stunning, functional designs is incredible. He understood our vision and brought it to life with innovative solutions that significantly improved the user journey.",
  },
  {
    name: "Sarah M.",
    role: "Product Manager",
    review:
      "Working with John was a seamless experience. His attention to detail and understanding of UX principles helped us deliver a polished product ahead of schedule.",
  },
  {
    name: "Michael R.",
    role: "CTO",
    review:
      "John combines technical expertise with creativity. He transformed complex requirements into intuitive interfaces that our users love.",
  },
  {
    name: "Emily K.",
    role: "Design Lead",
    review:
      "His design sense is top-notch. Every interaction felt intentional, modern, and aligned with our brand vision.",
  },
  {
    name: "Alex P.",
    role: "SaaS Entrepreneur",
    review:
      "John is reliable, fast, and extremely skilled. The final product exceeded our expectations both visually and functionally.",
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const review = reviews[index];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative mt-10">

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <h2   className="text-4xl font-bold leading-tight text-center sm:text-start">
          What Clients Say <br />
          About My <span className="text-violet-500">Work</span>
        </h2>

        <div className="gap-4 hidden sm:flex">
          <button
            onClick={prev}
            className="rounded-full cursor-pointer bg-violet-600 p-5 transition hover:bg-violet-500 active:scale-90"
          >
            <FaArrowLeft size={10}/>
          </button>

          <button
            onClick={next}
            className="rounded-full cursor-pointer bg-violet-600 p-5 transition hover:bg-violet-500 active:scale-90"
          >
            <FaArrowRight size={10}/>
          </button>
        </div>
      </div>


      <div
        key={index}
        className={`
          relative z-10 mt-10
          rounded-3xl
          noise-bg backdrop-blur-lg
          p-4 sm:p-4
          transition-all duration-500 ease-out
          ${
            direction === "right"
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }
        `}
        style={{ "--bg-base": "#121111" }}
      >
        <div className="flex items-center gap-6 mb-6">
      
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold">
            {getInitials(review.name)}
          </div>

          <div>
            <h4 className="text-xl font-semibold">{review.name}</h4>
            <p className="text-sm text-zinc-400">{review.role}</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-zinc-300">
          {review.review}
        </p>
        <div className="gap-4 sm:hidden flex justify-between mt-3">
          <button
            onClick={prev}
            className="rounded-full cursor-pointer bg-violet-600 p-5 transition hover:bg-violet-500 active:scale-90"
          >
            <FaArrowLeft size={10}/>
          </button>

          <button
            onClick={next}
            className="rounded-full cursor-pointer bg-violet-600 p-5 transition hover:bg-violet-500 active:scale-90"
          >
            <FaArrowRight size={10}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
