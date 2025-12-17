const AutoScrollRow = ({ items, speed = 10 }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex flex-nowrap gap-10 animate-scroll will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-3 px-6 py-4 text-white"
          >
            <span className="text-4xl">{item.icon}</span>
            <span className="text-xl font-medium whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollRow;
