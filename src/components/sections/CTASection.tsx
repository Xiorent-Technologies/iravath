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
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-28"
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
            className="bg-[#FDF1E1] text-black rounded-xl shadow-lg px-4 py-4 sm:px-5 sm:py-5 w-full max-w-full sm:max-w-lg"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* Subscribe section with input field and button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full flex items-center justify-center transition w-full sm:w-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="mr-2">✈</span> Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT (empty column for desktop image side) */}
        <div className="hidden lg:block" />
      </div>
    </motion.section>
  );
}
