import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AddStaffModal } from "../../components/add-staff-modal";
import { toast } from "react-toastify";
import { initialValues } from "./constants";
import type { Employee, IStaffForm } from "./types";

export default function Staff() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [formValues, setFormValues] = useState<IStaffForm>(initialValues);

  const navigate = useNavigate();

  const handleDelete = useCallback(async (employeeId: number) => {
    try {
      setRefresh(true);
      const response = await fetch(
        `https://educationproject-production-1a26.up.railway.app/api/Staff/delete/${employeeId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        toast.success("Muvaffaqiyatli o'chirildi");
      }
      setRefresh(false);
    } catch (error) {
      console.log(error);
    }

    setOpenMenuIndex(null);
  }, []);

  const handleClick = (id: number) => {
    navigate(`/employee/${id}`);
  };

  useEffect(() => {
    fetch(
      "https://educationproject-production-1a26.up.railway.app/api/Staff/get-all"
    )
      .then((res) => res.json())
      .then((res) => setEmployeesData(res));
  }, [refresh]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-4xl font-semibold">Employees</p>
        <div className="flex gap-8">
          <Button
            title="Teachers"
            bgColor="bg-[#635AD9]"
            px="px-2"
            py="py-[4px]"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
              setFormValues(initialValues);
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
            <th className="px-4 py-2">FIO</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((emp, index) => (
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuIndex(openMenuIndex === index ? null : index);
                  }}
                  className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"
                >
                  <MoreVertical />
                </button>

                {openMenuIndex === index && (
                  <>
                    <div
                      className="fixed inset-0 z-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuIndex(null);
                      }}
                    ></div>

                    <div className="absolute right-4 mt-2 w-24 bg-white border shadow-md rounded-md z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsModalOpen(true);
                          setFormValues({
                            id: emp?.id,
                            address: emp?.address,
                            birthDate: emp?.birthDate,
                            fullName: emp?.fullName,
                            gender: emp?.gender,
                            phoneNumber: emp?.phoneNumber,
                            position: emp?.position,
                            salary: emp?.salary,
                          });
                        }}
                        className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Change
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(emp.id);
                        }}
                        className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      <AddStaffModal
        setRefresh={setRefresh}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </div>
  );
}
