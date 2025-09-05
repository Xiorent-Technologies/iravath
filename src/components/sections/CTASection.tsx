"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      className="relative text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Desktop Background */}
      <div className="hidden lg:block absolute inset-0">
        <div
          className="w-1/2 h-full absolute right-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/about/bg_girl.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div
        className="lg:hidden absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('/assets/about/bg_girl.png')`,
          backgroundPosition: "60% center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-28"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 font-semibold mb-3">
            About <span className="text-white">Iravath Airlines</span>
          </p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            More Than Flights
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            A Journey for Every Traveller. From private jets to air ambulances,
            from cargo to pet-friendly cabins, Iravath Airlines redefines global
            travel. Wherever you&apos;re headed, we bring you safety, comfort,
            and innovation at every step.
          </motion.p>

          {/* CTA BOX */}
          <motion.div
            className="bg-[#FDF1E1] text-black rounded-xl shadow-lg px-5 py-5 w-full sm:w-auto max-w-full sm:max-w-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* Left side: Subscribe button + Number below */}
            <div className="flex-1 min-w-0 flex flex-col items-start">
              <motion.button
                className="bg-black text-white hover:bg-gray-800 font-semibold py-2 px-4 rounded-full text-sm transition"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Subscribe
              </motion.button>
              <p className="text-xl sm:text-2xl font-bold leading-tight mt-2">
                9-999-99-99
              </p>
            </div>

            {/* Right side: Book Now button */}
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full w-full sm:w-auto flex items-center justify-center transition"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="mr-2">✈</span> Book Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT (empty column for desktop image side) */}
        <div className="hidden lg:block" />
      </div>
    </motion.section>
  );
}
