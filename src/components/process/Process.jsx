import ProcessHeading from "./ProcessHeading";
import Timeline from "./Timeline";

const Process = () => {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
        bg-white
        dark:bg-[#0F1039]
        transition-colors
        duration-500
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D5D93B]/10
          blur-[140px]
          dark:bg-[#D5D93B]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[120px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          container
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >

        {/* Heading */}
        <ProcessHeading />

        {/* Timeline */}
        <div className="mt-20 lg:mt-28">
          <Timeline />
        </div>

      </div>
    </section>
  );
};

export default Process;