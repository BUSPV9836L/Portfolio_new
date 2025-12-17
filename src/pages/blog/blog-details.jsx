import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { AutoScrollRow } from "../../component/comman";
import { blogPosts } from "./blog";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, subtitle, image, content } = location.state;
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer group flex items-center gap-2 text-sm text-gray-300 hover:text-white"
      >
        <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-2 group-hover:text-violet-500" />
        My Work
      </button>
      <img src={image} className="mt-4 rounded-2xl h-100 w-full object-fill" />

      <div className=" space-y-4 mt-10">
        <h4 className="text-white font-extrabold text-4xl">{title}</h4>
        <subtitle className="flex items-center gap-4">
          <FaArrowRight />
          {subtitle}
        </subtitle>
        <p className="mt-4 text-md">{content}</p>
        <div className="relative z-10 mb-10">
          <h2 className="text-4xl font-bold leading-tight text-center sm:text-start">
            More <span className="text-violet-500">Articles</span>
          </h2>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts
            .filter((e) => e.title != title)
            .map((post, index) => (
              <div
                key={index}
                className="group relative rounded-3xl noise-bg backdrop-blur-lg overflow-hidden cursor-pointer"
                style={{ "--bg-base": "#121111" }}
                onClick={() =>
                  navigate(`/blog/${post.title.replace(" ", "")}`, {
                    state: post,
                  })
                }
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-2xl h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-6">
                  <h3 className={`text-xl font-semibold ${post.accent}`}>
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{post.subtitle}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
