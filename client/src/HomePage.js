// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-purple-800 drop-shadow-lg">
          Expense Manager
        </h1>
        <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
          Track your expenses effortlessly and take control of your finances.
        </p>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">
            Track Your Spending
          </h2>
          <p className="text-gray-600">
            Record daily expenses and categorize them for better insights.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">
            Analyze Your Budget
          </h2>
          <p className="text-gray-600">
            View detailed charts and reports to make smarter financial decisions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">
            Stay Organized
          </h2>
          <p className="text-gray-600">
            All your financial data in one secure place, accessible anytime.
          </p>
        </div>
      </section>

      {/* Button */}
      <div className="mt-12">
        <Link
          to="/Dashboard"
          className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-md hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
