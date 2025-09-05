export default function PublicInfoHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Airplane Cabin Background */}
      <div className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/header/public-info/hero-bg.png')`,
            backgroundPosition: 'center center',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-8 md:pb-12 lg:pb-16">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight text-center px-4">
            For the Public. For Every Journey.
          </h1>
        </div>
      </div>
    </section>
  );
}
