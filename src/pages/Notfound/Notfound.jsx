import React from 'react';

const Notfound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-center">
      <div className="p-8 bg-white  rounded-lg max-w-md w-full">
        <div className="text-6xl font-extrabold text-gray-800">404</div>
        <p className="mt-4 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-[#03C6DB] rounded-lg hover:bg-[#03C6DB] transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default Notfound;
