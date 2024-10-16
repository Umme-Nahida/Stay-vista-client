import { useEffect, useState } from "react";
import { TbHomePlus } from "react-icons/tb";
import { MdHomeWork } from "react-icons/md";

// Components

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./MenuItem";
import ToggleBtn from "../../ToggleBtn";
import Logo from "./Logo";
import useAuth from "../../../hooks/useAuth";
import AdminMenu from "./Menu/AdminMenu";
import HostMenu from "./Menu/HostMenu";
import GuestMenu from "./Menu/GuestMenu";
import useRole from "../../../hooks/useRole";
import toast from "react-hot-toast";
import Loader from "../../../pages/Loader";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [roles, isLoading] = useRole();
  console.log(roles);

  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // handle log out
  const handleLogOut = async () => {
    await logOut();
    toast.success("user log out successfully");
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Logo />
            </div>
          </div>

              {/* Nav Items */}
              <div className="flex flex-col justify-between flex-1 mt-6">
                {/* If a user is host */}
                {roles?.role === "host" && (
                  <ToggleBtn toggleHandler={toggleHandler} />
                )}
                <nav>
                  {roles?.role === "admin" && <AdminMenu></AdminMenu>}
                  {roles?.role === "guest" && <GuestMenu></GuestMenu>}
                  {roles?.role === "host" ? (
                    toggle ? (
                      <HostMenu></HostMenu>
                    ) : (
                      <GuestMenu></GuestMenu>
                    )
                  ) : (
                    " "
                  )}
                </nav>
              </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
