import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeImg from "../../assets/img/employee.png";
import type { Employee } from "./types";

export const EmployeeDetail = () => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const { id } = useParams<{ id: string }>();
  const employee = employeesData.find((emp) => emp.id === Number(id));

  useEffect(() => {
    fetch(
      "https://educationproject-production-1a26.up.railway.app/api/Staff/get-all"
    )
      .then((res) => res.json())
      .then((res) => setEmployeesData(res));
  }, []);

  return (
    <>
      <div className="flex p-5">
        <div className="shadow-[0px_0px_5px_0px_#00000040] p-6 w-[400px]">
          <div className="flex flex-col items-center gap-2">
            <img className="w-[150px] h-[150px]" src={EmployeeImg} alt="" />
            <p>{employee?.fullName}</p>
            <p className="text-gray-500 text-sm">(id:{employee?.id})</p>
          </div>
          <div className="space-y-4 text-sm font-medium text-black">
            <div>
              <p className="mb-1">Phone:</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {employee?.phoneNumber}
              </div>
            </div>

            <div>
              <p className="mb-1">Balance:</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {employee?.salary} som
              </div>
            </div>

            <div>
              <p className="mb-1">Rol</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {employee?.position}
              </div>
            </div>

            <div>
              <p className="mb-1">Branch</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {employee?.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
