import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'react-feather'; // Install react-feather: npm install react-feather

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-64 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 md:static fixed top-0 left-0 h-screen z-50 shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 bg-blue-600 rounded-full absolute top-4 right-4"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`md:block ${isOpen ? 'block' : 'hidden'} md:static mt-12 md:mt-0`}>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 border-b pb-2">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
            >
              <span className="mr-2">📊</span> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center p-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
            >
              <span className="mr-2">👤</span> Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;