// import { MoreVertical } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { GroupModal } from "./components/modal";

export default function Groups() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-10">
          <p className="font-semibold text-5xl">Groups</p>
          <Button
            title="Attendance"
            px="px-[5px]"
            py="py-[7px]"
            bgColor="bg-blue-500"
          />
        </div>
        <div className="flex items-center gap-6">
          <Button
            title="Active"
            px="px-[10px]"
            py="py-[7px]"
            bgColor="bg-bg-blue-500"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 text-white 
                    bg-[#90C049] rounded-lg px-5 py-2 cursor-pointer hover:bg-[#9dc265]"
          >
            <span className="text-2xl">+</span> Add a new one
          </button>
        </div>
      </div>
      <table className="w-full my-5">
        <thead className="bg-white">
          <tr className="text-left text-gray-600 font-semibold">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Groups</th>
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">St number</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {employeesData.map((emp, index) => (
            <tr
              onClick={() => handleClick(emp.id)}
              key={index}
              className={`${
                openMenuIndex === index ? "bg-white" : "bg-[#f9f9f9]"
              } relative cursor-pointer border-b border-gray-200`}
            >
              <td className="px-4 py-2">{emp.id}</td>
              <td className="px-4 py-2">{emp.fullName}</td>
              <td className="px-4 py-2">{emp.phoneNumber}</td>
              <td className="px-4 py-2">{emp.position}</td>
              <td className="px-4 py-2 text-center relative">
                <button
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   setOpenMenuIndex(openMenuIndex === index ? null : index);
                  // }}
                  className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"
                >
                  <MoreVertical />
                </button>

                {openMenuIndex === index && (
                  <>
                    <div
                      className="fixed inset-0 z-5"
                      // onClick={(e) => {
                      //   e.stopPropagation();
                      //   setOpenMenuIndex(null);
                      // }}
                    ></div>

                    <div className="absolute right-4 mt-2 w-24 bg-white border shadow-md rounded-md z-10">
                      <button
                        // onClick={(e) => {
                        //   e.stopPropagation();
                        //   setIsModalOpen(true);
                        //   setFormValues({
                        //     id: emp?.id,
                        //     address: emp?.address,
                        //     birthDate: emp?.birthDate,
                        //     fullName: emp?.fullName,
                        //     gender: emp?.gender,
                        //     phoneNumber: emp?.phoneNumber,
                        //     position: emp?.position,
                        //     salary: emp?.salary,
                        //   });
                        // }}
                        className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Change
                      </button>
                      <button
                        // onClick={(e) => {
                        //   e.stopPropagation();
                        //   handleDelete(emp.id);
                        // }}
                        className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <GroupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}
