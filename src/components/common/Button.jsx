import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-[#D6EB29] text-[#050816] hover:scale-105 hover:shadow-[0_0_30px_rgba(214,235,41,.4)]",

    secondary:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10",

    outline:
      "border border-[#D6EB29] text-[#D6EB29] hover:bg-[#D6EB29] hover:text-[#050816]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        "rounded-full font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;