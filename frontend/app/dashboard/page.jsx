"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Dashboard() {
  // States to hold data
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3002/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPatients(response.data.patients);
      setAppointments(response.data.appointments);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300"
              />
            </div>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded-md"
              onClick={() => {
                localStorage.removeItem("token");
                router.push("/login");
              }}
            >
              Log Out
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Patients
              </h3>
              <p className="text-2xl font-bold text-cyan-900">
                {patients.length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Upcoming Appointments
              </h3>
              <p className="text-2xl font-bold text-cyan-900">
                {appointments.length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Recent Reports
              </h3>
              <p className="text-2xl font-bold text-cyan-900">102</p>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Appointments
          </h3>
          <table className="w-full table-auto">
            <thead className="text-left bg-gray-100">
              <tr>
                <th className="py-2 px-4">Patient Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Doctor</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-2 px-4">{appointment.patientName}</td>
                  <td className="py-2 px-4">{appointment.date}</td>
                  <td className="py-2 px-4">{appointment.doctor}</td>
                  <td className="py-2 px-4">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
