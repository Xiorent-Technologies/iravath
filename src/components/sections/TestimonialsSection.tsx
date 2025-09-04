import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="relative bg-neutral-900 text-white py-16 px-6">
      {/* Background decorative image (top-right corner) */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-40 pointer-events-none">
        <Image
          src="/assets/header/public-info/top_right_coner.png" // place inside public/
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <p className="text-gray-300 mb-2">Our Commitment:</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          We{" "}
          <span className="text-yellow-400">Deliver</span>{" "}
          What We Promise.
        </h2>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md space-x-4 hover:shadow-xl transition" >
            <Image
              src="/assets/header/public-info/con4.1.png"// icon inside public/
              alt="Safety"
              width={400}
              height={200}
              style={{paddingLeft: '15px'}}
              
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Safety Accred aircraft.
              </h3>
              <p className="text-gray-400 text-sm">
                Certified aircraft and world-class crews ensuring private, luxury, 
                and commercial flights with the highest safety standards.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md space-x-4 hover:shadow-xl transition">
            <Image
              src="/assets/header/public-info/con4.2.png"
              alt="Technology"
              width={400}
              height={200}
              style={{paddingLeft: '15px'}}
              
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Technology as advantage
              </h3>
              <p className="text-gray-400 text-sm">
                From AI-powered concierge to global med-evac networks, 
                we harness innovation to make every journey seamless.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md space-x-4 hover:shadow-xl transition">
            <Image
              src="/assets/header/public-info/con4.3.png"
              alt="Sustainability"
              width={400}
              height={200}
              style={{paddingLeft: '15px'}}
              
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Sustainability as default
              </h3>
              <p className="text-gray-400 text-sm">
                Hybrid-electric fleets, SAF adoption, and eco-smart operations 
                to make aviation greener.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md space-x-4 hover:shadow-xl transition">
            <Image
              src="/assets/header/public-info/con4.4.png"
              alt="Scale"
             width={400}
              height={200}
              style={{paddingLeft: '15px'}}
              
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Scale as service
              </h3>
              <p className="text-gray-400 text-sm">
                From economy to premium, from air taxis to cargo—one airline 
                for every traveller and every need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
