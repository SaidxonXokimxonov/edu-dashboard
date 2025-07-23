import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Salary() {
  const navigate = useNavigate();
  // State for all inputs
  const [expenseValue, setExpenseValue] = useState("33");
  const [teacher, setTeacher] = useState("Ruxtamxojayev Abdullah");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

  // Save handlers (for demo, just alert or console.log)
  const handleSave = (val: string, label: string) => {
    alert(`${label} saved: ${val}`);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold">Salary</h1>
        <div className="flex gap-2">
          <button className="bg-[#6C63FF] text-white px-8 py-2 rounded-full font-semibold text-base focus:outline-none cursor-pointer" style={{boxShadow: 'none', border: 'none'}}>Salary</button>
          <button 
            onClick={() => navigate("/debtors")}
            className="bg-white text-gray-400 px-8 py-2 rounded-full font-semibold text-base border border-black focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors" 
            style={{boxShadow: 'none'}}
          >
            Debtors
          </button>
          <button 
            onClick={() => navigate("/course-fees")}
            className="bg-white text-gray-400 px-8 py-2 rounded-full font-semibold text-base border border-black focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors" 
            style={{boxShadow: 'none'}}
          >
            Course fees
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Ish haqi kalkulyatorini sozlash"
        className="w-full max-w-md mb-4 px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base"
      />
      {/* Block 1 */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-4">
        <span className="text-2xl font-bold px-3">1</span>
        <span className="text-base font-medium">Barcha o‘qituvchilar uchun standart xarajatlarni belgilash parametrlarini ko‘rsating</span>
      </div>
      {/* Block 2 */}
      <div className="mb-2">
        <label className="block text-base font-medium mb-1">Xarajat qiymati</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={expenseValue}
            onChange={e => setExpenseValue(e.target.value)}
            className="w-[120px] px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base"
          />
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-gray-500 transition-colors">Primary</button>
          <button
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-[#6C63FF] transition-colors"
            onClick={() => handleSave(expenseValue, "Expense value")}
          >
            Saqlash
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-4 mt-2">
        <span className="text-2xl font-bold px-3">2</span>
        <span className="text-base font-medium">Barcha o‘qituvchilar uchun standart xarajatlarni belgilash parametrlarini ko‘rsating</span>
      </div>
      <div className="mb-2">
        <label className="block text-base font-medium mb-1">O‘qituvchini tanlang</label>
        <div className="flex items-center gap-2">
          <select
            className="w-[250px] px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base cursor-pointer"
            value={teacher}
            onChange={e => setTeacher(e.target.value)}
          >
            <option>Ruxtamxojayev Abdullah</option>
            <option>Yangi O'qituvchi</option>
          </select>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-gray-500 transition-colors">Primary</button>
          <button
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-[#6C63FF] transition-colors"
            onClick={() => handleSave(teacher, "Teacher")}
          >
            Saqlash
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-4 mt-2">
        <span className="text-2xl font-bold px-3">3</span>
        <span className="text-base font-medium italic">Barcha o‘qituvchilar uchun standart xarajatlarni belgilash parametrlarini ko‘rsating</span>
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input3}
            onChange={e => setInput3(e.target.value)}
            className="w-[120px] px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base"
          />
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-gray-500 transition-colors">Primary</button>
          <button
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-[#6C63FF] transition-colors"
            onClick={() => handleSave(input3, "Input 3")}
          >
            Saqlash
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-4 mt-2">
        <span className="text-2xl font-bold px-3">4</span>
        <span className="text-base font-medium">Barcha o‘qituvchilar uchun standart xarajatlarni belgilash parametrlarini ko‘rsating</span>
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input4}
            onChange={e => setInput4(e.target.value)}
            className="w-[120px] px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base"
          />
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-gray-500 transition-colors">Primary</button>
          <button
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-[#6C63FF] transition-colors"
            onClick={() => handleSave(input4, "Input 4")}
          >
            Saqlash
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-4 mt-2">
        <span className="text-2xl font-bold px-3">5</span>
        <span className="text-base font-medium">Barcha o‘qituvchilar uchun standart xarajatlarni belgilash parametrlarini ko‘rsating</span>
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input5}
            onChange={e => setInput5(e.target.value)}
            className="w-[120px] px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-base"
          />
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-gray-500 transition-colors">Primary</button>
          <button
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium text-base cursor-pointer hover:bg-[#6C63FF] transition-colors"
            onClick={() => handleSave(input5, "Input 5")}
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}