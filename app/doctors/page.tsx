import Image from "next/image";
import Link from "next/link";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "data:image/jpeg;base64,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",
      experience: "12+ Years Experience",
      description:
        "Expert in preventive cardiology and advanced heart diagnostics.",
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Pediatrician",
      image: "data:image/jpeg;base64,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",
      experience: "10+ Years Experience",
      description:
        "Dedicated to child healthcare with a compassionate approach.",
    },
    {
      name: "Dr. Emily Smith",
      specialty: "Dentist",
      image: "data:image/jpeg;base64,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",
      experience: "8+ Years Experience",
      description:
        "Specialist in cosmetic and restorative dentistry.",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black dark:text-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Meet Our Medical Experts
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-blue-100">
          Our highly qualified doctors are committed to providing exceptional
          healthcare tailored to your needs.
        </p>
      </section>

      {/* DOCTORS GRID */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center">
          Our Specialists
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-center">
                {doctor.name}
              </h3>

              <p className="text-blue-600 text-center">
                {doctor.specialty}
              </p>

              <p className="text-sm text-gray-500 text-center mt-2">
                {doctor.experience}
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 text-center">
                {doctor.description}
              </p>

              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES SECTION */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold">
            Our Medical Specialties
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              "Cardiology ❤️",
              "Pediatrics 👶",
              "Dentistry 🦷",
              "Neurology 🧠",
              "Orthopedics 🦴",
              "Dermatology 🌿",
              "Gynecology 👩",
              "Radiology 🔬",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT PROCESS */}
      <section className="py-20 max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold">
          How to Book an Appointment
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <div className="text-4xl">📅</div>
            <h4 className="mt-4 font-semibold">
              Choose a Doctor
            </h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Select the specialist based on your health needs.
            </p>
          </div>

          <div>
            <div className="text-4xl">📝</div>
            <h4 className="mt-4 font-semibold">
              Fill Appointment Form
            </h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Provide your details and preferred time slot.
            </p>
          </div>

          <div>
            <div className="text-4xl">🏥</div>
            <h4 className="mt-4 font-semibold">
              Visit & Get Care
            </h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Meet the doctor and receive personalized treatment.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold">
            What Our Patients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-blue-500 p-6 rounded-xl">
              <p>
                “The doctors were very professional and caring. Highly
                recommended clinic!”
              </p>
              <h4 className="mt-4 font-semibold">— John D.</h4>
            </div>

            <div className="bg-blue-500 p-6 rounded-xl">
              <p>
                “Excellent pediatric care for my child. Friendly staff and
                clean environment.”
              </p>
              <h4 className="mt-4 font-semibold">— Maria S.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          <div>
            <h4 className="font-semibold">
              Do I need an appointment?
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Walk-ins are welcome, but we recommend booking in advance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              What insurance do you accept?
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              We accept most major insurance providers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Are emergency services available?
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Yes, we provide urgent care during clinic hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-3xl font-bold">
          Ready to Consult Our Specialists?
        </h2>
        <p className="mt-4 text-blue-100">
          Book your appointment today and prioritize your health.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition"
        >
          Schedule Appointment
        </Link>
      </section>
    </div>
  );
}