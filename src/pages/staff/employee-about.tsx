import { useParams } from "react-router-dom";
import { useEffect } from "react";
import EmployeeImg from "../../assets/img/employee.png";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { getStaff } from "../../redux/reducers/staff/staffSlice";

export const EmployeeDetail = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { singleStaff } = useSelector((state: RootState)=> state.staff)
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getStaff(id as string))
  }, []);

  return (
    <>
      <div className="flex p-5">
        <div className="shadow-[0px_0px_5px_0px_#00000040] p-6 w-[400px]">
          <div className="flex flex-col items-center gap-2">
            <img className="w-[150px] h-[150px]" src={EmployeeImg} alt="" />
            <p>{singleStaff?.fullName}</p>
            <p className="text-gray-500 text-sm">(id:{singleStaff?.id})</p>
          </div>
          <div className="space-y-4 text-sm font-medium text-black">
            <div>
              <p className="mb-1">Phone:</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {singleStaff?.phoneNumber}
              </div>
            </div>

            <div>
              <p className="mb-1">Balance:</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {singleStaff?.salary} som
              </div>
            </div>

            <div>
              <p className="mb-1">Rol</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {singleStaff?.position}
              </div>
            </div>

            <div>
              <p className="mb-1">Branch</p>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                {singleStaff?.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
