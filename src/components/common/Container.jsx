const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-14 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;