import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthCare Clinic",
  description: "Professional medical services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black`}
      >
        {/* Header / Navbar */}
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md dark:bg-zinc-900">
          <h1 className="text-xl font-bold text-blue-600">
            HealthCare Clinic
          </h1>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/doctors" className="hover:text-blue-600 transition">
              Doctors
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1: Logo & About */}
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                  HealthCare
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Providing compassionate and expert care for your family. Book appointments easily and stay healthy with us.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/doctors" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      Our Doctors
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Our Services */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Our Services</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-600 dark:text-gray-400">Cardiology</li>
                  <li className="text-gray-600 dark:text-gray-400">Pediatrics</li>
                  <li className="text-gray-600 dark:text-gray-400">Dentistry</li>
                  <li className="text-gray-600 dark:text-gray-400">General Checkup</li>
                </ul>
              </div>

              {/* Column 4: Contact & Newsletter */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>📍 123 Health Ave, Wellness City</li>
                  <li>📞 +1 (555) 123-4567</li>
                  <li>✉️ info@healthcare.com</li>
                </ul>

                {/* Optional: Newsletter Signup */}
                <div className="mt-6">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subscribe to our newsletter</h5>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-3 py-2 text-sm border border-gray-300 dark:border-zinc-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white w-full"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium rounded-r-md hover:from-blue-600 hover:to-teal-500 transition">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-zinc-800 text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} HealthCare Clinic. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/privacy" className="hover:text-blue-500 transition mx-2">Privacy Policy</Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-blue-500 transition mx-2">Terms of Service</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}