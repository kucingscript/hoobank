import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobanks" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden items-center justify-end flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? `mr-0` : `mr-10`
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex items-center justify-end flex-1">
        <img
          src={toggle ? close : menu}
          alt="hoobanks menu"
          className="w-[20px] h-[20px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-center justify-end flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? `mb-0` : `mb-4`
                  }`}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
