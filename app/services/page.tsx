export default function ServicesPage() {
  const services = [
    {
      title: "General Consultation",
      desc: "Comprehensive health checkups and diagnosis for all ages.",
      icon: "🩺",
    },
    {
      title: "Pediatrics",
      desc: "Specialized care for infants, children, and adolescents.",
      icon: "👶",
    },
    {
      title: "Diagnostic Services",
      desc: "Advanced lab tests and imaging for accurate results.",
      icon: "🔬",
    },
    {
      title: "Dental Care",
      desc: "Complete oral health services and preventive care.",
      icon: "🦷",
    },
    {
      title: "Cardiology",
      desc: "Heart health screening and cardiovascular treatments.",
      icon: "❤️",
    },
    {
      title: "Vaccination",
      desc: "Safe and certified immunization programs.",
      icon: "💉",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black dark:text-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Our Medical Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-blue-100">
          We provide high-quality healthcare services using modern technology
          and compassionate medical professionals.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h4 className="mt-4 text-xl font-semibold">
                {service.title}
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold">Why Choose Our Clinic?</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="text-xl font-semibold text-blue-600">✔ Expert Doctors</h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Certified and experienced specialists in every department.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-600">✔ Modern Equipment</h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                State-of-the-art medical technology for accurate results.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-600">✔ Patient-Centered Care</h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Personalized treatment plans focused on your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-4xl">📅</div>
            <h4 className="mt-4 font-semibold">Book Appointment</h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
              Schedule your visit online or by phone.
            </p>
          </div>

          <div>
            <div className="text-4xl">👩‍⚕️</div>
            <h4 className="mt-4 font-semibold">Consult Doctor</h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
              Meet our specialists for diagnosis and guidance.
            </p>
          </div>

          <div>
            <div className="text-4xl">💊</div>
            <h4 className="mt-4 font-semibold">Get Treatment</h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
              Receive personalized treatment and follow-up care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Need Medical Assistance?</h2>
        <p className="mt-4 text-blue-100">
          Our team is ready to provide you with the best care possible.
        </p>
        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
}