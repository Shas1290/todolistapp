import React from 'react';

const Navbar = ({ onTaskClick }) => {
  return (
    <nav>
      <div className="flex justify-between container mx-auto p-4 bg-blue-600 text-white">
        <h1 className="cursor-pointer hover:text-3xl text-2xl font-bold">Home</h1>
        <button
          onClick={onTaskClick}
          className="cursor-pointer hover:text-3xl text-2xl font-bold ml-4 bg-transparent border-none"
        >
          My task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
