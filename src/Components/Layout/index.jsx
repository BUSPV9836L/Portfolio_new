import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import CustomAlert from "../Alert";
import ScrollToSection from "../ScrollToSection";

const Layout = ({ handelClear, message, type }) => {
  return (
    <div>
      <ScrollToSection />
      {message && (
        <CustomAlert handelClear={handelClear} message={message} type={type} />
      )}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
