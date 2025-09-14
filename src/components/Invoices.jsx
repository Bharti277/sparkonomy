import React from "react";

const Invoices = () => {
  return (
    <div className="p-4 m-4 bg-white dark:bg-secondary-dark-bg rounded-lg">
      <div>
        <h3>Your Invoices</h3>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">Invoice #001</div>
          <div className="bg-gray-200 p-4 rounded-lg">Client A</div>
          <div className="bg-gray-200 p-4 rounded-lg">$500.00</div>
          <div className="bg-gray-200 p-4 rounded-lg">Paid</div>
          <div className="bg-gray-200 p-4 rounded-lg">Invoice #002</div>
          <div className="bg-gray-200 p-4 rounded-lg">Client B</div>

          <div className="bg-gray-200 p-4 rounded-lg">$750.00</div>
          <div className="bg-gray-200 p-4 rounded-lg">Unpaid</div>
          <div className="bg-gray-200 p-4 rounded-lg">Invoice #003</div>
          <div className="bg-gray-200 p-4 rounded-lg">Client C</div>
          <div className="bg-gray-200 p-4 rounded-lg">$1,200.00</div>
          <div className="bg-gray-200 p-4 rounded-lg">Overdue</div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
