import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const LetsCollaborate = () => {
  const navigate = useNavigate();
  return (
    <section className="relative mt-10">
      <div className="noise-bg rounded-4xl" style={{ "--bg-base": "#121111" }}>
        <div className="px-6 p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="text-4xl font-bold leading-tight">
              Let’s <br />
              <span className="text-violet-500">collaborate</span>
            </h2>

            <button
              aria-label="Start collaboration"
              onClick={() => navigate("/contacts")}
              className="
              absolute
              top-4
              right-4
              cursor-pointer
              sm:relative
              group
              w-10 h-10
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

          <p className="text-white text-md leading-relaxed">
            Unlock the potential of your product with expert design and
            development services. Let’s collaborate to create user-centered
            solutions that not only meet your goals but also delight your users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsCollaborate;
