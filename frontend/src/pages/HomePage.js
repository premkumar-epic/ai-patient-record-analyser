import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fade-in">
          AI-Driven Patient Record Analysis
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Welcome to a cutting-edge platform for AI-driven diagnosis and personalized patient management.
        </p>
        <Link
          to="/login"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

// Add simple animation
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-in;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default HomePage;