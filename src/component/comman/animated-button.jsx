// AnimatedButton.jsx
const AnimatedButton = ({ text, className = "", onClick = () => {} }) => {
  return (
    <button
      className={` bg-violet-700 cursor-pointer group relative overflow-hidden rounded-md px-6 py-3 font-medium text-white ${className}`}
      onClick={onClick}
    >
      {/* Default centered text */}
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
        {text}
      </span>

      {/* Animated text (top → center, bottom → center) */}
      <span className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        {text}
      </span>

      {/* Keeps button height */}
      <span className="invisible">{text}</span>
    </button>
  );
};

export default AnimatedButton;
