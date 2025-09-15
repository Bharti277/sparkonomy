import React, { useState } from "react";
import { CirclePlus, Crown } from "lucide-react";

const Dashboard = () => {
  const [selectedTime, setSelectedTime] = useState("3Months");

  return (
    <div className="m-4 md:m-12 p-4 md:p-8 md:bg-white rounded-lg">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm flex-1">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <CirclePlus className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold text-purple-600 mb-2">
              Create New Invoice
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              Start by creating and sending new invoice
            </p>
            <p className="text-xs text-gray-400">
              Or upload an existing invoice and set payment reminder
            </p>
          </div>
        </div>

        {/* Time Period Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600 mb-2 sm:mb-0">
              Time Period
            </h3>
            <span className="text-xs sm:text-sm text-gray-400">
              dd:mm:yyyy - dd:mm:yyyy
            </span>
          </div>

          {/* Period Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setSelectedTime("1Month")}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                selectedTime === "1Month"
                  ? "bg-purple-50 text-purple-600 border-gray-200"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => setSelectedTime("3Months")}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                selectedTime === "3Months"
                  ? "bg-purple-50 text-purple-600 border-gray-200"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              3 Months
            </button>
            <button
              onClick={() => setSelectedTime("1Year")}
              className={`px-4 py-2 rounded-full text-sm flex items-center border transition-colors ${
                selectedTime === "1Year"
                  ? "bg-purple-50 text-purple-600 border-gray-200"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              1 Year <Crown className="w-5 h-5 ml-1 text-purple-500" />
            </button>
          </div>

          {/* Custom Button */}
          <button className="flex items-center text-sm text-gray-600 hover:text-purple-600 transition">
            <span className="mr-2">📅</span>
            Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
