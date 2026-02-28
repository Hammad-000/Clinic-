import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Your Health Is Our <span className="text-blue-600">Top Priority</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          Compassionate, modern healthcare for you and your family.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Book an Appointment
        </Link>
      </section>

      {/* Services Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="text-center mt-4 text-zinc-600 dark:text-zinc-300">
          Comprehensive care tailored to your needs
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">General Checkups</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Routine health assessments to keep you and your family in peak health.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Specialized care for children, ensuring healthy growth and development.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Wellness Programs</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Preventive programs and lifestyle coaching for a healthier you.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="/about-healthcare.jpg"
            alt="Healthcare"
            className="rounded-lg shadow"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-zinc-600 dark:text-zinc-300 mb-4">
            We are a team of dedicated healthcare professionals committed to providing personalized and compassionate care. Our modern facilities and patient-first approach ensure you and your loved ones receive the best treatment possible.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center">What Our Patients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow">
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              "The staff is incredibly kind and professional. They made my checkup stress-free!"
            </p>
            <h4 className="font-semibold">— Sarah L.</h4>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              "Our whole family feels safe and cared for here. Highly recommend their services."
            </p>
            <h4 className="font-semibold">— Michael R.</h4>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              "Excellent facilities and friendly doctors. I feel confident in my health care."
            </p>
            <h4 className="font-semibold">— Priya S.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-20 text-center bg-blue-50 dark:bg-zinc-800 py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Prioritize Your Health?</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6">
          Schedule your appointment today and take the first step toward better health.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}