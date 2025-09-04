import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative flex justify-center px-4 py-12 sm:py-16 lg:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/header/public-info/whitebg.png" // background border image (put inside public/)
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Card */}
      <div className="max-w-4xl bg-neutral-900 text-white rounded-xl shadow-lg overflow-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Inner Image */}
        <div className="relative w-full h-48 sm:h-56 md:h-72">
          <Image
            src="/assets/header/public-info/Tabpanel.png" // inside image (put inside public/)
            alt="Founder's Vision"
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        {/* Text Section */}
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Founders’ Vision (public statement)
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
            Iravath Airlines is more than air transport—it is a global connector
            of people, opportunities, and compassion. Aviation must be safe,
            sustainable, and inclusive. From everyday passengers to emergency
            medical flights, from luxury journeys to pet-friendly services, we
            are building an airline that truly cares.
          </p>
        </div>
      </div>
    </section>
  );
}
