import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GlobalContext } from "../context/GlobalContext";

const Layout = ({ pages }) => {
    const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={`w-screen h-screen flex justify-start items-start ${theme=="light"?"bg-white":"bg-[#002428]"}`}>
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        {/* Navbar */}
        <Navbar />
        <div className={`w-full h-full    ` }>
          {pages}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
