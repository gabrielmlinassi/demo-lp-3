const Progressbar = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative w-52 h-3 mb-1 rounded-full overflow-hidden">
        <div className="absolute bg-gray-300 w-full h-3"></div>
        <div className="absolute bg-[#594697] w-1/2 h-3 transition-all duration-300"></div>
      </div>
      <div className="text-xs">page 1 of 7</div>
    </div>
  );
};

export default Progressbar;
