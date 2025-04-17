function PatientProfile() {
  const patient = {
    name: 'John Doe',
    age: 30,
    vitals: 'BP: 120/80, HR: 72',
    symptoms: 'Fever, Cough',
    diagnosis: 'Influenza',
    medications: 'Paracetamol, Rest',
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in">
        Patient Summary
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {patient.name}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Age:</strong> {patient.age}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Vitals:</strong> {patient.vitals}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Symptoms:</strong> {patient.symptoms}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Diagnosis:</strong> {patient.diagnosis}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Medications:</strong> {patient.medications}</p>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;