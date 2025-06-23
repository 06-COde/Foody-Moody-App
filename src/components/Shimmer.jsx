const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-40 bg-gray-200 rounded-md animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
