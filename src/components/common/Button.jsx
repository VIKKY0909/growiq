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
      "bg-[#D5D93B] text-[#0F1039] hover:scale-105 hover:shadow-[0_0_30px_rgba(214,235,41,.4)]",

    secondary:
      "bg-[#0F1039]/10 text-[#0F1039] border border-[#0F1039]/15 dark:bg-white/5 dark:text-white dark:border-white/10",

    outline:
      "border border-[#D5D93B] text-[#0F1039] dark:text-[#D5D93B] hover:bg-[#D5D93B] hover:text-[#0F1039]",
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