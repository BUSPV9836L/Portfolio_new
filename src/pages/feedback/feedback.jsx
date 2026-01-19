import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

const Feedback = () => {
  const navigate = useNavigate();

  const [reviews] = useState([
    {
      name: "Rahul Kumar",
      role: "SDE-3 Ajmera Infotech",
      review:
        "End-to-end SaaS development was handled flawlessly. From architecture to deployment, everything was well thought out and scalable.",
    },
    {
      name: "Rochak Ventapalli",
      role: "Risk Anylist",
      review:
        "Delivered a complete SaaS product with clean UI, solid backend integration, and great performance. Very reliable and detail-oriented.",
    },
    {
      name: "Siddharth Jadhav",
      role: "Software Developer",
      review:
        "Strong expertise in full SaaS development. The system was secure, fast, and easy to maintain. Would definitely collaborate again.",
    },
  ]);

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
    setIndex((p) => (p === 0 ? reviews.length - 1 : p - 1));
  };

  const next = () => {
    setDirection("right");
    setIndex((p) => (p === reviews.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="relative mt-10">
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <h2 className="text-4xl font-bold leading-tight text-center sm:text-start">
          What Clients Say <br />
          About My <span className="text-violet-500">Work</span>
        </h2>

        <div className="flex gap-4">
          {review && (
            <div className="gap-4 hidden sm:flex">
              <button
                onClick={prev}
                className="rounded-full bg-violet-600 p-5 hover:bg-violet-500 active:scale-90"
              >
                <FaArrowLeft size={10} />
              </button>

              <button
                onClick={next}
                className="rounded-full bg-violet-600 p-5 hover:bg-violet-500 active:scale-90"
              >
                <FaArrowRight size={10} />
              </button>
            </div>
          )}
        </div>
      </div>

      {review ? (
        <div
          key={index}
          className={`
            relative z-10 mt-10 rounded-3xl
            noise-bg backdrop-blur-lg p-4
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
              className="rounded-full bg-violet-600 p-5 hover:bg-violet-500 active:scale-90"
            >
              <FaArrowLeft size={10} />
            </button>

            <button
              onClick={next}
              className="rounded-full bg-violet-600 p-5 hover:bg-violet-500 active:scale-90"
            >
              <FaArrowRight size={10} />
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-10 text-center">No reviews available</p>
      )}
    </section>
  );
};

export default Feedback;
