import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface StudentData {
  name: string;
  date: string;
  category: string;
  receiver: string;
  sum: string;
}

const STORAGE_KEY = "finance_rows";

export default function Finance() {
  const [showForm, setShowForm] = useState(false);
  const [rows, setRows] = useState<StudentData[]>([]);
  const [form, setForm] = useState({
    name: "",
    date: "",
    category: "Boshqalar",
    receiver: "",
    sum: "",
  });
  const [formVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actionIdx, setActionIdx] = useState<number | null>(null); // popup uchun
  const [editIdx, setEditIdx] = useState<number | null>(null); // tahrirlash uchun
  const [popupPos, setPopupPos] = useState<{top: number, left: number} | null>(null);
  const [filterStart, setFilterStart] = useState("");
  const [filterEnd, setFilterEnd] = useState("");
  const [filteredRows, setFilteredRows] = useState<StudentData[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const navigate = useNavigate();

  // Jadvalni localStorage'dan olish
  useEffect(() => {
    setLoading(true);
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        setRows(JSON.parse(data));
      } catch {
        setRows([]);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);

  const openForm = () => {
    setShowForm(true);
    setEditIdx(null);
    setTimeout(() => setFormVisible(true), 10);
  };
  const closeForm = () => {
    setFormVisible(false);
    setTimeout(() => setShowForm(false), 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    if (!filterStart || !filterEnd) {
      setFilteredRows(rows);
      return;
    }
    const start = new Date(filterStart);
    const end = new Date(filterEnd);
    setFilteredRows(
      rows.filter(row => {
        const rowDate = new Date(row.date);
        return rowDate >= start && rowDate <= end;
      })
    );
  };

  // O'chirish
  const handleDelete = (idx: number) => {
    const newRows = rows.filter((_, i) => i !== idx);
    setRows(newRows);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newRows));
    setActionIdx(null);
  };

  // Tahrirlash
  const handleEdit = (idx: number) => {
    setForm(rows[idx]);
    setEditIdx(idx);
    setShowForm(true);
    setTimeout(() => setFormVisible(true), 10);
    setActionIdx(null);
  };

  // Form submit (tahrirlash yoki yangi)
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.category || !form.receiver || !form.sum) return;
    setLoading(true);
    let newRows;
    if (editIdx !== null) {
      newRows = rows.map((row, i) => (i === editIdx ? { ...form } : row));
    } else {
      newRows = [...rows, { ...form }];
    }
    setRows(newRows);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newRows));
    setForm({ name: "", date: "", category: "Other", receiver: "", sum: "" });
    setEditIdx(null);
    closeForm();
    setLoading(false);
  };

  // Close popup on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (actionIdx !== null && popupPos) {
        // Agar popup yoki icon bosilmasa, yopiladi
        if (
          !(e.target instanceof Node &&
            (iconRefs.current[actionIdx]?.contains(e.target) ||
              document.getElementById("finance-action-popup")?.contains(e.target)))
        ) {
          setActionIdx(null);
          setPopupPos(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [actionIdx, popupPos]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen p-4 relative">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-4xl font-semibold">Finance</h1>
        <button
          className="bg-[#8BC34A] text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 mt-2 cursor-pointer hover:bg-[#7CB342] transition-colors"
          onClick={openForm}
        >
          <span className="text-xl">+</span> Add a new one
        </button>
      </div>
      <div className="flex gap-6">
        {/* Left side */}
        <div className="flex-1">
          <div className="flex gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Sanadan boshlab</label>
              <input type="date" value={filterStart} onChange={e => setFilterStart(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sana bo'yicha</label>
              <input type="date" value={filterEnd} onChange={e => setFilterEnd(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none" />
            </div>
            <div className="flex items-end">
              <button type="button" onClick={handleFilter} className="bg-[#6C63FF] text-white px-6 py-2 rounded-lg font-medium cursor-pointer hover:bg-[#554ee3] transition-colors">Filter</button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 mb-4 w-fit">
            <span className="text-base font-medium">Davr uchun xarajatlar</span>
            <span className="text-xl font-semibold">6 7000 265 so’m</span>
            <button
              className="ml-2 cursor-pointer hover:bg-[#ede7f6] rounded-full p-1 transition-colors"
              onClick={() => navigate("/salary")}
              title="Go to Salary"
            >
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#F3F3F3" />
                <path d="M8.5 10.5h7M8.5 13.5h4" stroke="#6C63FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="6.5" y="7.5" width="11" height="9" rx="2.5" stroke="#6C63FF" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            {loading ? (
              <div className="text-center py-8 text-gray-400">Yuklanmoqda...</div>
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold">Name</th>
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold">Category</th>
                    <th className="py-3 px-4 font-semibold">Oluvchi</th>
                    <th className="py-3 px-4 font-semibold">Sum</th>
                    <th className="py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-base">
                  {filteredRows.map((row, idx) => (
                    <tr className={idx !== rows.length - 1 ? "border-b border-gray-200" : undefined} key={idx}>
                      <td className="py-3 px-4">{row.name}</td>
                      <td className="py-3 px-4">{row.date}</td>
                      <td className="py-3 px-4">{row.category}</td>
                      <td className="py-3 px-4">{row.receiver}</td>
                      <td className="py-3 px-4">{row.sum}</td>
                      <td className="py-3 px-2 text-right relative">
                        <span
                          className="inline-block w-6 text-center cursor-pointer hover:text-[#6C63FF] transition-colors"
                          ref={el => { iconRefs.current[idx] = el; }}
                          onClick={() => {
                            if (actionIdx === idx) {
                              setActionIdx(null);
                              setPopupPos(null);
                            } else {
                              const rect = iconRefs.current[idx]?.getBoundingClientRect();
                              if (rect) {
                                setPopupPos({
                                  top: rect.top + window.scrollY - 8, // 8px yuqoriga
                                  left: rect.left + window.scrollX - 80, // popup eni uchun
                                });
                              }
                              setActionIdx(idx);
                            }
                          }}
                        >
                          ⋮
                        </span>
                        {actionIdx === idx && popupPos && (
                          <div
                            id="finance-action-popup"
                            style={{
                              position: "fixed",
                              top: popupPos.top,
                              left: popupPos.left,
                              zIndex: 1000,
                              minWidth: 100,
                            }}
                            className="bg-white border border-gray-200 rounded shadow-md flex flex-col"
                          >
                            <button
                              className="px-4 py-2 text-left hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleEdit(idx)}
                            >
                              Change
                            </button>
                            <button
                              className="px-4 py-2 text-left text-red-600 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleDelete(idx)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* Right side: Sidebar Form */}
      </div>
      {/* Sidebar panel */}
      {showForm && (
        <div
          className={`fixed top-0 right-0 z-50 h-full w-full max-w-[400px] bg-white shadow-lg transition-transform duration-300 ease-in-out
            ${formVisible ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold">{editIdx !== null ? 'Change Student' : 'Add new student'}</h2>
              <button
                className="text-2xl text-black font-bold hover:text-gray-700 focus:outline-none ml-4 p-1 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <form className="flex flex-col gap-4 flex-1 px-6 py-6" onSubmit={handleSend}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option>Other</option>
                  <option>Administrative</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Receiver</label>
                <input
                  type="text"
                  name="receiver"
                  value={form.receiver}
                  onChange={handleChange}
                  placeholder="Enter receiver"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="text"
                  name="sum"
                  value={form.sum}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="bg-[#8BC34A] text-white px-6 py-2 rounded-lg font-medium flex-1 cursor-pointer hover:bg-[#7CB342] transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
