import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import DropDown from "./DropDown";
import logo from '/public/favicon.ico'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="header flex items-center justify-between px-4 py-2 z-100">
        <img src={logo} alt="Logo" className="h-[5vh] w-[11vw] lg:w-[5vh]" />

        {/* Conditional rendering of icon */}
        <div onClick={() => setClicked(!clicked)} className="cursor-pointer lg:hidden">
          {clicked ? (
            <IoCloseOutline className="h-[8vh] w-[8vw] font-extrabold" />
          ) : (
            <CiMenuFries className="h-[8vh] w-[8vw] font-extrabold" />
          )}
        </div>

        <DropDown className={`dropdown-div opacity-0 mt-[39vh]  ${clicked ? 'mt-39vh] opacity-100' : ''}`}/>
      </div>
    </>
  );
};

export default NavBar;
