import React from "react";
import paymentsImg from "../../assets/img/payments.png";

export default function Debtors() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen p-6">
      <h1 className="text-4xl font-semibold mb-4">Debtors</h1>
      <div className="flex items-center mb-6">
        <div className="bg-white rounded-lg shadow px-6 py-3 flex items-center gap-4 text-lg font-medium" style={{ minWidth: 320 }}>
          <span>Total</span>
          <span className="text-[#FF3B3B] font-bold">-6 7000 265 so’m</span>
          <span className="ml-auto">
            <img src={paymentsImg} alt="payments" className="w-7 h-7 object-contain" />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="text-gray-700 text-base font-semibold">
              <th className="px-4 py-2 text-left">Id</th>
              <th className="px-4 py-2 text-left">Ism familiya</th>
              <th className="px-4 py-2 text-left">Telefon</th>
              <th className="px-4 py-2 text-left">Guruhlari</th>
              <th className="px-4 py-2 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white rounded-xl shadow mb-2 align-top">
              <td className="px-4 py-4 font-medium">1234</td>
              <td className="px-4 py-4 font-medium">Rustamxojayev Abdulloh</td>
              <td className="px-4 py-4 font-medium">+998 94 650 65 69</td>
              <td className="px-4 py-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#4ADE80] text-white text-xs font-semibold px-3 py-1 rounded cursor-pointer hover:bg-[#22c55e] transition-colors">Python</span>
                    <span className="text-gray-600 text-sm">13:55 <span className="ml-1">▼</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#4ADE80] text-white text-xs font-semibold px-3 py-1 rounded cursor-pointer hover:bg-[#22c55e] transition-colors">Python</span>
                    <span className="text-gray-600 text-sm">13:55 <span className="ml-1">▼</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#4ADE80] text-white text-xs font-semibold px-3 py-1 rounded cursor-pointer hover:bg-[#22c55e] transition-colors">Python</span>
                    <span className="text-gray-600 text-sm">13:55 <span className="ml-1">▼</span></span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium">Lorem ipsum</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}
