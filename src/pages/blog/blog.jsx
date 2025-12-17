import { useNavigate } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    title: "Why React Is Still a Go-To Choice for Frontend Development",
    subtitle: "Understanding React’s Component-Based Architecture",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    accent: "text-white",
    content: `
React continues to be one of the most popular frontend libraries due to its component-based architecture and efficient rendering model.
By breaking the UI into reusable components, developers can build scalable and maintainable applications.
Features like hooks and virtual DOM help improve performance while keeping the development experience intuitive.
    `,
  },
  {
    id: 2,
    title: "Building REST APIs with Node.js and Express",
    subtitle: "A Practical Guide for Backend Developers",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    accent: "text-white",
    content: `
Node.js and Express provide a lightweight yet powerful way to build backend services.
This post explores how REST APIs work, how to structure routes and controllers, and best practices for error handling and security.
It also covers how Node.js integrates smoothly with modern frontend frameworks like React.
    `,
  },
  {
    id: 3,
    title: "Tailwind CSS: Utility-First Styling Explained",
    subtitle: "Writing Less CSS, Building Faster UIs",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    accent: "text-white",
    content: `
Tailwind CSS introduces a utility-first approach that allows developers to style components directly in markup.
Instead of writing custom CSS for every component, developers compose styles using predefined classes.
This approach speeds up development and keeps styling consistent across large applications.
    `,
  },
  {
    id: 4,
    title: "Understanding MongoDB in Full-Stack Applications",
    subtitle: "How NoSQL Databases Fit Modern Web Apps",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    accent: "text-white",
    content: `
MongoDB is a popular NoSQL database that stores data in flexible JSON-like documents.
It works especially well with JavaScript-based stacks such as MERN.
This article explains when to use MongoDB, how schema flexibility helps development, and common design patterns.
    `,
  },
  {
    id: 5,
    title: "Using Docker for Consistent Development Environments",
    subtitle: "From Local Setup to Production",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80",
    accent: "text-white",
    content: `
Docker simplifies application deployment by packaging code and dependencies into containers.
This post explains how Docker helps avoid environment-related issues and makes collaboration easier.
It also highlights common use cases of Docker in modern full-stack development workflows.
    `,
  },
];


const Blog = () => {
  const navigate = useNavigate();
   
  return (
    <section className="relative mt-10">
      {/* SECTION HEADER */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold leading-tight text-center sm:text-start">
          Design Thoughts <br />
          and <span className="text-white">Perspectives</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mt-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blog/${post.title}`,{
              state:post
            })}
            className="
              group relative cursor-pointer
              rounded-3xl
              noise-bg backdrop-blur-lg
              overflow-hidden
              transition-transform duration-300
              hover:scale-105
            "
            style={{ "--bg-base": "#121111" }} 
          >

            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-4 py-6">
              <h3 className="text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                {post.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
