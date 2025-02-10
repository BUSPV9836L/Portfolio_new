import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import CustomAlert from "../Alert";
import ScrollToSection from "../ScrollToSection";
import Footer from "../Footer/Footer";

const Layout = ({ handelClear, message, type }) => {
  return (
    <div>
      <ScrollToSection />
      {message && (
        <CustomAlert handelClear={handelClear} message={message} type={type} />
      )}
      <Navbar />
      <div style={{ marginTop: "10%" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
