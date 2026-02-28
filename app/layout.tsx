import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <footer className="text-center py-6 bg-white border-t dark:bg-zinc-900 dark:border-zinc-800">
          © {new Date().getFullYear()} HealthCare Clinic
        </footer>
      </body>
    </html>
  );
}