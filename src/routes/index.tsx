import { Routes, Route } from "react-router-dom";
import Dashboard from "./../pages/dashboard";
import Groups from "./../pages/groups";
import Staff from "./../pages/staff";
import Students from "./../pages/students";
import Finance from "./../pages/finance";
import { EmployeeDetail } from "../pages/staff/employee-about";
import Salary from "./../pages/salary";
import CourseFees from "./../pages/course-fees";
import Debtors from "./../pages/debtors";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/students" element={<Students />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/employee/:id" element={<EmployeeDetail/>}/>
      <Route path="/salary" element={<Salary />} />
      <Route path="/course-fees" element={<CourseFees />} />
      <Route path="/debtors" element={<Debtors />} />
    </Routes>
  );
}
