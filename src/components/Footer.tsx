"use client"; // Mark this as a client component

import Link from "next/link";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles"; // Adjust the import path if necessary

export default function Footer() {
  return (
    <div className="relative">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={15} // Increased quantity
        color="#00ff00" // Changed color to white
        size={5} // Increased size
        vx={0.1}
        // vy={0.1} // Increased velocity
      />

      <footer className="bg-gray-850/80 backdrop-blur-sm  text-gray-300 py-8 font-outfit relative z-10 border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Logo and Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo.webp"
                  alt="Bhoodhan Logo"
                  width={50}
                  height={50}
                  priority
                  className="cursor-pointer"
                />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-bold font-barlow text-white">
                  Bhoodhan Infratech Pvt. Ltd.
                </h1>
                <p className="text-gray-400 mt-2 text-sm">
                  Building dreams, one property at a time. Your trusted partner in real estate.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 ">
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Bottom Section: Contact Info and Copyright */}
          <div className="mt-8 text-center text-gray-500 text-sm space-y-2">
            <p>
              <strong>Address:</strong> Pillar No.-18, D-4 Main Dadri Road, Sector 49 Noida, Uttar Pradesh -201301
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:bhoodhaninfratech@gmail.com"
                className="text-green-400 hover:underline"
              >
                bhoodhaninfratech@gmail.com
              </a>{" "}
              | <strong>Phone:</strong>{" "}
              <a
                href="tel:+911205263054"
                className="text-green-400 hover:underline"
              >
                +91 120 526 3054
              </a>
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} Bhoodhan Infratech Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}