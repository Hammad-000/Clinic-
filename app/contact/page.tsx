export default function DoctorsPage() {
  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiologist", img: "https://i.pravatar.cc/150?img=32" },
    { name: "Dr. Michael Lee", specialty: "Pediatrician", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Dr. Emily Smith", specialty: "Dentist", img: "https://i.pravatar.cc/150?img=5" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Meet Our Doctors
      </h1>
      <p className="text-gray-500 mb-12">Our team of specialists is here to provide the best care possible.</p>

      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <h4 className="text-xl font-semibold">{doc.name}</h4>
            <p className="text-blue-600 font-medium mt-1">{doc.specialty}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}