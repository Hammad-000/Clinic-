"use client"; // Required for useState in Next.js App Router

import { useState } from "react";

export default function DoctorsPage() {
  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiologist", img: "https://i.pravatar.cc/150?img=32" },
    { name: "Dr. Michael Lee", specialty: "Pediatrician", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Dr. Emily Smith", specialty: "Dentist", img: "https://i.pravatar.cc/150?img=5" }
  ];

  // Form state
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend
    console.log("Appointment requested:", formData);
    setSubmitted(true);
    // Reset form after submission (optional)
    // setFormData({ patientName: "", email: "", phone: "", doctor: "", date: "", time: "", reason: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Doctors Section */}
      <div className="text-center mb-16">
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

      {/* Appointment Form Section */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Book an Appointment
        </h2>
        <p className="text-gray-500 text-center mb-8">Fill in the form below and we'll confirm your booking shortly.</p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg text-center">
            Thank you! Your appointment request has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              required
              value={formData.patientName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Doctor Selection */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Select Doctor *
            </label>
            <select
              id="doctor"
              name="doctor"
              required
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doc, idx) => (
                <option key={idx} value={doc.name}>
                  {doc.name} - {doc.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time - side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              />
            </div>
          </div>

          {/* Reason (optional) */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Reason for Visit (optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
              placeholder="Briefly describe your symptoms or reason for appointment"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:-translate-y-0.5"
            >
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}