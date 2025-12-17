const FlootingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-10">
      <button className="rounded-xl cursor-pointer bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-violet-500">
        Use for Free
      </button>
      <button className="rounded-xl cursor-pointer bg-white px-6 py-3 text-sm font-medium text-black shadow-lg">
        More Templates
      </button>
      <button className="rounded-xl cursor-pointer bg-zinc-800 px-6 py-3 text-sm font-medium text-white">
        Made in Framer
      </button>
    </div>
  );
};

export default FlootingButtons;
