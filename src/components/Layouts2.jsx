import SidebarWithToggle from "./SidebarWithToggle";
import HeaderNav from "./HeaderNav";
import BackBody from "./BackBodyMap/BackBody";
import ToggleGenderPosition from "./ToggleGenderPosition";
import { SidebarWithBurgerMenu } from "./SidebarWithBurgerMenu";
import LayoutFooter from "./LayoutFooter";
import FrontBody from "./Front Body Mapping/FrontBody";

function Layouts2() {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarWithBurgerMenu />
      <div className="flex-1 p-4 md:ml-10">
        <HeaderNav />
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 p-4">
          {/* Left Section: Two Body Components Side by Side */}
          <div className="md:col-span-3 text-black">
            <div className="bg-white p-4 mt-6 rounded flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-slate-200 p-4 rounded shadow">
                <BackBody />
              </div>
              <div className="flex-1 bg-slate-200 p-4 rounded shadow">
                <FrontBody />
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="md:col-span-3 hidden md:block">
            {/* Add center content here if needed */}
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 mt-6 md:mt-10 flex justify-center md:justify-start">
            <ToggleGenderPosition />
          </div>
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default Layouts2;
