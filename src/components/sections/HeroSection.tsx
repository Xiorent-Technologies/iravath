export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/header/public-info/plain.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        <h1
          className="font-bold leading-snug text-yellow-100 drop-shadow-lg 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "Playfair Display",
            color: "rgb(220, 187, 135)",
          }}
        >
          Connecting People,
          <br className="hidden sm:block" />
          Economies & Futures.
        </h1>
      </div>
    </section>
  );
}
