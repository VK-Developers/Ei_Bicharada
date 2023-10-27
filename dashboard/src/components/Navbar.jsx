import { useState } from "react";
import { menu as links } from "../structure/structure";
import setaIcon from "../assets/imgs/icons/seta.png";
import logo from "../assets/imgs/backgrounds/01.png";
import menuIcons from "../structure/images";

const Navbar = ({action, selected}) => {
  const [open, setOpen] = useState(true)

  return (
    <div className=" flex z-10 shadow-lg h-screen shadow-black w-fit">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#024873]  p-5  pt-8 relative duration-300`}
      >
        <img
          src={setaIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <div
            className={`w-[23%] duration-500 ${
              open && "rotate-[360deg]"
            }`}
          >
            <img src={logo} />
          </div>
          {/*  */}
          <div className={` duration-200 ${!open && "scale-0"}`}>
            {" "}
            <p className="text-white">Bem-Vindo</p>
            <h1 className="text-white origin-left font-medium text-xl">
              Usuario Nome
            </h1>
          </div>
        </div>
        <div className="pt-6">
          {links.map((link, i) => {
            const formatedName = link.replace(' ', '');
            const isSelected = formatedName === selected 

            const handleClick = () => action(formatedName);

            return (
              <div 
                key={'link-' + i}
                onClick={handleClick}
                className={`${isSelected && "bg-[#0365bc]" } flex rounded-md p-2 cursor-pointer hover:bg-[#0365bc] hover:font-semibold text-white text-lg items-center gap-3.5 mt-3.5`} >
                <img src={menuIcons[formatedName]} />
                { !!open && <p>{link}</p> }
              </div>
            )
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
