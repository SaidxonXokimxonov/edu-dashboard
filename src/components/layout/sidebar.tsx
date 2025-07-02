import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-white h-screen">
      <div className="w-full flex justify-center items-center gap-4 h-[100px]">
        <div className="w-[50px] rounded-full border h-[50px]"></div>
        <div >
          <h4>Jamila Azimova</h4>
          <h5>+998 99 123 45 67</h5>
        </div>
      </div>
      <div className="flex pt-5  flex-col gap-2 items-center">
        <NavLink
          className={({ isActive }) =>
            `sidebar-btn ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-btn ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
          to="/groups"
        >
          Guruhlar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-btn ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
          to="/staff"
        >
          Xodimlar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-btn ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
          to="/students"
        >
          Talabalar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-btn ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
          to="/finance"
        >
          Moliya
        </NavLink>
      </div>
    </div>
  );
}
