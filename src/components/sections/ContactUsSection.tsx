import React from 'react';

export default function ContactUsSection() {
    return (
        <section className="bg-[#343637] py-4 md:py-6 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
                }}></div>
            </div>
            <div className="bg-white p-4 rounded-2xl max-w-6xl mx-auto px-4 relative z-10">


                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[250px]">
                    {/* Left Side - Contact Information */}
                    <div className="bg-[#262829] rounded-2xl  p-4 md:p-6 flex flex-col justify-center">


                        <div className="max-w-md">
                            {/* Main Title */}
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 leading-tight">
                                GENERAL ENQUIRES & RESERVATIONS
                            </h2>

                            {/* Contact Details */}
                            <div className="mb-6">
                                <h3 className="text-base font-semibold text-white mb-3">CONTACT DETAILS</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 text-white">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <span className="text-white">(+1) 999 999 999 9</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 text-white">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="text-white">sales@Iravathairlines</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-600 mb-6"></div>

                            {/* Customer Support */}
                            <div className="mb-6">
                                <h3 className="text-base font-semibold text-white mb-3">CUSTOMER SUPPORT HELPLINE:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 text-white">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <span className="text-white">(+1) 999 999 999 9</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 text-white">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="text-white">support@Iravathairlines</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-600 mb-6"></div>

                            {/* Hours */}
                            <div className="mb-6">
                                <h3 className="text-base font-semibold text-white mb-2">HOURS</h3>
                                <p className="text-white mb-3">REGULAR OFFICE HOURS-EST</p>
                                <div className="space-y-2 text-white">
                                    <div>Monday to Friday: 9.30am-5pm</div>
                                    <div>Saturday: 10.30am-5pm</div>
                                    <div>Sunday: 10.30am-4pm</div>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white p-4 md:p-6 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            {/* Form Title */}
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Any question or remarks? Just write us a message!
                            </p>

                            {/* Contact Form */}
                            <form className="space-y-3">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="John Doe"
                                        className="w-full px-3 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent"
                                    />
                                </div>

                                {/* Contact Number Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Number
                                    </label>
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-1 px-3 py-2 border-0 border-b-2 border-gray-300">
                                            <span className="text-2xl">🇮🇳</span>
                                            <span className="text-gray-600">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            defaultValue="9874563210"
                                            className="flex-1 px-3 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="John@gmail.com"
                                        className="w-full px-3 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="type here"
                                        rows={4}
                                        className="w-full px-3 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
