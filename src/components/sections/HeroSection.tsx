export default function HeroWithHeader() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/bg_cloud.png" 
          alt="Clouds background"
          className="w-full h-full object-cover"
        />
        {/* Optional soft overlay for text contrast; remove if not needed */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Heading + CTA */}
          <div className="max-w-xl text-black">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
              Iravath Airlines – <br />
              Boundless Journeys for Every Traveller
            </h1>

            <button className="mt-6 px-6 py-3 bg-black text-yellow-300 font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition">
              Explore Founders’ Initiative
            </button>
          </div>

          {/* Right: Helicopter in circular crop */}
          <div className="relative">
            <div className="w-[500px] h-[500px]  overflow-hidden">
              <img
                src="/assets/halicopter.png"
                alt="Helicopter"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
