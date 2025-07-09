import React, { useState } from "react";

interface CourseFeeData {
  course: string;
  sum: string;
  date: string;
}

const initialData: CourseFeeData[] = [
  { course: "Matematika", sum: "1 000 000", date: "2023-07-01" },
  { course: "Fizika", sum: "1 200 000", date: "2023-07-05" },
  { course: "Ingliz tili", sum: "900 000", date: "2023-07-10" },
  { course: "Kimyo", sum: "1 100 000", date: "2023-07-15" },
  { course: "Biologiya", sum: "950 000", date: "2023-07-20" },
  { course: "Tarix", sum: "1 050 000", date: "2023-07-25" },
  { course: "Geometriya", sum: "1 000 000", date: "2023-07-28" },
  { course: "Rus tili", sum: "1 000 000", date: "2023-07-31" },
];

export default function CourseFees() {
  const [filterStart, setFilterStart] = useState("");
  const [filterEnd, setFilterEnd] = useState("");
  const [filteredData, setFilteredData] = useState<CourseFeeData[]>(initialData);

  const handleFilter = () => {
    if (!filterStart || !filterEnd) {
      setFilteredData(initialData);
      return;
    }
    const start = new Date(filterStart);
    const end = new Date(filterEnd);
    setFilteredData(
      initialData.filter(row => {
        const rowDate = new Date(row.date);
        return rowDate >= start && rowDate <= end;
      })
    );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen p-4">
      <h1 className="text-4xl font-semibold mb-6">Course fees</h1>
      <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 mb-6 w-fit">
        <span className="text-base font-medium">Davr uchun xarajatlar</span>
        <span className="text-xl font-semibold">6 7000 265 so’m</span>
        <button
          className="ml-2 cursor-pointer hover:bg-[#ede7f6] rounded-full p-1 transition-colors"
          title="Icon"
        >
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#F3F3F3" />
            <path d="M8.5 10.5h7M8.5 13.5h4" stroke="#6C63FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="6.5" y="7.5" width="11" height="9" rx="2.5" stroke="#6C63FF" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <div className="flex gap-6 mb-6">
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
      <div className="w-full max-w-xl">
        <div className="flex font-semibold text-gray-700 text-lg mb-2 px-2">
          <div className="w-1/2">Kurslar</div>
          <div className="w-1/2">Sum</div>
        </div>
        <div className="flex flex-col gap-3">
          {filteredData.length === 0 ? (
            <div className="text-gray-400 text-center py-4">No data found</div>
          ) : (
            filteredData.map((row, i) => (
              <div key={i} className="flex gap-2">
                <div className="w-1/2 bg-white rounded-lg px-4 py-2 text-base font-medium shadow-sm">{row.course}</div>
                <div className="w-1/2 bg-white rounded-lg px-4 py-2 text-base font-medium shadow-sm">{row.sum}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}