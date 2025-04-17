import { useEffect, useState } from 'react';

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock data (replace with backend fetch)
    setPatients([
      { id: 1, name: 'John Doe', status: 'Critical' },
      { id: 2, name: 'Jane Smith', status: 'Stable' },
      { id: 3, name: 'Bob Johnson', status: 'Critical' },
    ]);
  }, []);

  const filteredPatients = patients.filter(patient =>
    filter === 'all' || patient.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in">
        Dashboard
      </h1>
      <div className="mb-6 flex justify-between items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="all">All Patients</option>
          <option value="critical">Critical</option>
          <option value="stable">Stable</option>
        </select>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-md transition duration-300">
          Add Patient
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map(patient => (
          <div
            key={patient.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">{patient.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Status: <span className={patient.status === 'Critical' ? 'text-red-500' : 'text-green-500'}>{patient.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;