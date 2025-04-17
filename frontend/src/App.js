import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';
import Login from './pages/Login';
import { User } from 'react-feather';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [user, setUser] = useState(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setUser({ role, email: localStorage.getItem('email') || 'user@example.com' });
      setShowGreeting(true);
      const timer = setTimeout(() => setShowGreeting(false), 5000);
      return () => clearTimeout(timer);
    } else if (location.pathname !== '/login') {
      window.location.href = '/login';
    }
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [location, isDarkMode]); // Added isDarkMode to dependency array

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    setUser(null);
    setShowProfilePopup(false);
    window.location.href = '/login';
  };

  const email = user?.email || 'user@example.com';
  const name = email.split('@')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold animate-pulse">Patient Record System</h1>
          <div className="space-x-4 flex items-center">
            {user && showGreeting && (
              <span className="text-lg animate-fade-in">
                Hello, {user.role === 'admin' ? 'Admin' : user.role === 'doctor' ? 'Doctor' : 'Patient'}!
              </span>
            )}
            {user && (
              <button
                onClick={() => setShowProfilePopup(true)}
                className="text-2xl p-2 rounded-full bg-white text-gray-800 dark:bg-gray-700 dark:text-white shadow-md hover:shadow-lg transition duration-300"
              >
                <User size={20} />
              </button>
            )}
            <button
              onClick={toggleDarkMode}
              className="text-2xl p-2 rounded-full bg-white text-gray-800 dark:bg-gray-700 dark:text-white shadow-md hover:shadow-lg transition duration-300"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
      {showProfilePopup && user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-80">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Role: {user.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Email: {email}</p>
              <button
                onClick={logout}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                Logout
              </button>
              <button
                onClick={() => setShowProfilePopup(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <main className="p-6">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          {user && user.role === 'admin' && <Route path="/dashboard" element={<Dashboard />} />}
          {user && user.role === 'doctor' && <Route path="/dashboard" element={<Dashboard />} />}
          {user && user.role === 'patient' && <Route path="/profile" element={<PatientProfile />} />}
          <Route path="*" element={<Login setUser={setUser} />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;