import React from "react";
import { CirclePlus } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="m-12 p-8 bg-white rounded-lg shadow-md">
      <div className="p-4 flex justify-between items-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div>
            <CirclePlus />
            Create New Invoice
          </div>
          <p>Start by creating and sending new invoice</p>
          <p>Or upload an existing invoice and set payment reminder</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <div>Create New Invoice</div>
          <p>Start by creating and sending new invoice</p>
          <p>Or upload an existing invoice and set payment reminder</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
