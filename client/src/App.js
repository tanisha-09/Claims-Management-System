// import logo from './logo.svg';
import "./App.css";
import LoginForm from "./components/login";
import ClaimForm from "./components/claimform";
import PolicyHolderDashboard from "./components/user_dashboard";
import AdminDashboard from "./components/admin_dashboard";
import TpaDashboard from "./components/tpa_dashboard";
import ContactUs from "./components/contactus";
import TreatmentTable from "./components/hospital";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/claimform" element={<ClaimForm />}></Route>
        <Route path="/user" element={<PolicyHolderDashboard />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/tpa" element={<TpaDashboard />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/hospital" element={<TreatmentTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
