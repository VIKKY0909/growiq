const ServicesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Top Left Aurora — static */}
      <div className="absolute -top-32 -left-32 md:-top-40 md:-left-40 h-[280px] w-[280px] md:h-[500px] md:w-[500px] rounded-full bg-[#D5D93B]/20 dark:bg-[#D5D93B]/10 blur-[100px] md:blur-[140px]" />

      {/* Bottom Right Aurora — static */}
      <div className="absolute -bottom-36 -right-32 md:-bottom-48 md:-right-40 h-[320px] w-[320px] md:h-[600px] md:w-[600px] rounded-full bg-[#0F1039]/12 dark:bg-[#0F1039]/18 blur-[110px] md:blur-[170px]" />

      {/* Center Yellow Glow — static */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] md:h-[380px] md:w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D5D93B]/12 dark:bg-[#D5D93B]/08 blur-[90px] md:blur-[120px]" />

    </div>
  );
};

export default ServicesBackground;