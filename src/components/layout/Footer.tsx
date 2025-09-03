export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-10">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Decorative background lines */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 Q50,0 100,100 T200,100"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M0,120 Q50,20 100,120 T200,120"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M0,140 Q50,40 100,140 T200,140"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Left Side */}
          <div className="relative z-10 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Don’t hesitate to contact us
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 press@iravathairlines.com</li>
              <li>📍 HQ: To be announced</li>
              <li>🆘 Help & Support</li>
            </ul>
          </div>

          {/* Right Side Button */}
          <div className="relative z-10">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pb-8 border-t pt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo */}
        <div>
          <img src="/assets/footerImage.png" alt="Iravath Logo" className="h-12 mb-4" />
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Founder’s Initiative</li>
            <li>Public Information</li>
          </ul>
        </div>

        {/* Service Links */}
        <div>
          <h4 className="font-semibold mb-3">Service</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Scheduled & Spot Charter</li>
            <li>Medical Evacuation Flight</li>
            <li>Aircraft Management</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Help & Support</li>
            <li>Legal Information</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs pb-6">
        © 2025 Iravath Airlines™ — All rights reserved.
      </div>
    </footer>
  );
}

