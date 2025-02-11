const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-10">
      <div className="w-12 h-12 border-4 border-t-4 border-white border-opacity-30 border-t-[var(--accent-color)] rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;