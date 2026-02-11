import { useState } from "react";

export default function Invoice() {
  // Example invoice data
  const [invoices] = useState([
    { id: "INV001", date: "2026-02-01", amount: "$250", status: "Paid" },
    { id: "INV002", date: "2026-02-05", amount: "$450", status: "Pending" },
    { id: "INV003", date: "2026-02-10", amount: "$150", status: "Overdue" },
  ]);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8 animate-float bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Invoices
      </h1>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-800/50 text-blue-100 uppercase tracking-wider">
              <th className="px-6 py-3">Invoice ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="border-b border-blue-700 hover:bg-blue-700/20 transition-colors duration-200"
              >
                <td className="px-6 py-4">{inv.id}</td>
                <td className="px-6 py-4">{inv.date}</td>
                <td className="px-6 py-4">{inv.amount}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    inv.status === "Paid"
                      ? "text-green-400"
                      : inv.status === "Pending"
                      ? "text-yellow-400"
                      : "text-red-500"
                  }`}
                >
                  {inv.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
