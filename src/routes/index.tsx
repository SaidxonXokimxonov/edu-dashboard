import { Routes, Route } from "react-router-dom";
import Dashboard from "./../pages/dashboard";
import Groups from "./../pages/groups";
import Staff from "./../pages/staff";
import Students from "./../pages/students";
import Finance from "./../pages/finance";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/students" element={<Students />} />
      <Route path="/finance" element={<Finance />} />
    </Routes>
  );
}
