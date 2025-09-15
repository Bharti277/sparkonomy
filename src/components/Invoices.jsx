import { Bell, ChevronDown, Edit } from "lucide-react";

const invoices = [
  {
    id: 1,
    client: "Client Name",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Update Status",
  },
  {
    id: 2,
    client: "Client Name",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Unpaid",
  },
  {
    id: 3,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Disputed",
  },
  {
    id: 4,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Paid",
  },
  {
    id: 5,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Paid",
  },
  {
    id: 6,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Partially Paid",
  },
  {
    id: 7,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Paid",
  },
  {
    id: 8,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Overdue",
  },
  {
    id: 9,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Awaited",
  },
  {
    id: 10,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Draft",
  },
  {
    id: 11,
    client: "Income Trend",
    amount: "₹1,25,000",
    date: "2024-06-15",
    status: "Paid",
  },
];

const Invoices = () => {
  const statusStyles = {
    "Update Status": "bg-purple-600 text-white",
    Unpaid: "bg-gray-200 text-gray-400",
    Disputed: "bg-red-400 text-red-600",
    Paid: "bg-green-200 text-green-600",
    "Partially Paid": "bg-yellow-100 text-yellow-600",
    Overdue: "bg-red-200 text-red-600",
    Awaited: "bg-yellow-200 text-yellow-600",
    Draft: "bg-gray-300 text-gray-600",
  };

  return (
    <div className="mt-8 p-6">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            Your Invoices
          </h3>
          <ChevronDown />
        </div>

        <div className="divide-y divide-gray-100">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="p-4 sm:p-6 flex flex-col rounded-full sm:flex-row sm:items-center justify-between hover:bg-gray-50"
            >
              <div className="flex-1 mb-3 sm:mb-0">
                <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1">
                  {invoice.client}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {invoice.amount}, Due: {invoice.date}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end space-x-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusStyles[invoice.status] || "bg-gray-400 text-white"
                  }`}
                >
                  {invoice.status}
                </span>

                {(invoice.status === "Overdue" ||
                  invoice.status === "Awaited") && (
                  <Bell className="w-4 h-4 text-gray-400" />
                )}

                {invoice.status === "Draft" && (
                  <Edit className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
