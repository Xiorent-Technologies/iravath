// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 py-12 md:px-20 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="flex items-center space-x-4 mb-8 md:mb-0">
          <img src="/assets/header/logoBlack.png" alt="Iravath Airlines" className="h-12" /> {/* Replace with your logo */}
          <p className="text-sm text-gray-500">
            Iravath Airlines is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-4">Company</h3>
            <ul className="text-sm text-gray-500">
              <li><a href="/home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/founders-initiative" className="hover:text-yellow-500">Founder's Initiative</a></li>
              <li><a href="/public-information" className="hover:text-yellow-500">Public Information</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-4">Service</h3>
            <ul className="text-sm text-gray-500">
              <li><a href="/scheduled-spot-charter" className="hover:text-yellow-500">Scheduled & Spot Charter</a></li>
              <li><a href="/medical-evacuation" className="hover:text-yellow-500">Medical Evacuation Flight</a></li>
              <li><a href="/aircraft-management" className="hover:text-yellow-500">Aircraft Management</a></li>
            </ul>
          </div>

          {/* Additional Service Links */}
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-4">Service</h3>
            <ul className="text-sm text-gray-500">
              <li><a href="/help-support" className="hover:text-yellow-500">Help & Support</a></li>
              <li><a href="/legal-information" className="hover:text-yellow-500">Legal Information</a></li>
              <li><a href="/aircraft-management" className="hover:text-yellow-500">Aircraft Management</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center md:justify-end space-x-6 mt-6 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>&copy; 2025 Iravath Airlines™ - All rights reserved.</p>
      </div>
    </footer>
  );
}

