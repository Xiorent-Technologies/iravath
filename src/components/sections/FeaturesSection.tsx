export default function FeaturesSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 lg:px-20">
        
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="/assets/elephant.png" 
            alt="Flying Elephant"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Iravath Airlines
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Iravath Airlines is totally committed to supporting our clients by
            providing safe and reliable solutions for their air charter needs.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              <span className="font-semibold text-white">
                Official 2025 Brand & Trademark launch.
              </span>
            </li>
            <li>
              Inspired by celestial Iravath → symbol of wisdom, strength & global connectivity.
            </li>
            <li>
              Built to be the world’s largest, smartest airline headquartered in India but{" "}
              <span className="font-semibold text-white">serving the world.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
