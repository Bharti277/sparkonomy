import React from "react";

const TotalEarning = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Total Earnings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm text-center sm:text-left border-2 border-gray-300">
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Total Earnings
        </h3>
        <p className="text-3xl sm:text-4xl font-bold text-gray-900">
          $1,25,000
        </p>
      </div>

      {/* Payment Status */}
      <div className=" rounded-2xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center sm:text-left bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-300">
            <h4 className="text-sm font-medium text-gray-600 mb-1">
              Payment Awaited
            </h4>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              $25,000
            </p>
          </div>
          <div className="text-center sm:text-left bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-300">
            <h4 className="text-sm font-medium text-gray-600 mb-1">
              Payment Overdue
            </h4>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              $25,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEarning;
