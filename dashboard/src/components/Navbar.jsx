import { useState } from "react";
import { pages } from "../Routes/Rotas";
import setaIcon from "../assets/imgs/icons/seta.png";
import logo from "../assets/imgs/backgrounds/01.png";
import { useLocation } from "react-router-dom";
import { users } from "../mock.js";

const Navbar = () => {
  const user = users[0];
  const loginName = user ? user.name : "";

  const [open, setOpen] = useState(true);
  return (
    <div className=" flex shadow-lg shadow-black w-fit max-w-md min-h-[1000px] max-h-[100000000px]">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#081A51]  p-5  pt-8 relative duration-300`}
      >
        <img
          src={setaIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <a
            className={`w-[23%] cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            href="/"
          >
            <img src={logo} />
          </a>
          {/*  */}
          <div className={` duration-200 ${!open && "scale-0"}`}>
            {" "}
            <p className="text-white">Bem-Vindo</p>
            <h1 className="text-white origin-left font-medium text-xl">
              {loginName}
            </h1>
          </div>
        </div>
        <ul className="pt-6">
          {pages.map((page, index) =>
            index === 0 || index === 1 ? null : (
              <li key={index}>
                <a
                  href={page.path}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-indigo-900 hover:font-semibold text-white text-lg items-center gap-x-4 mt-9`}
                >
                  <img src={page.img} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {page.title}
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
        <div className="-">
          <a href="/Login">Sair </a>
          <a href="/Settings"> Settings</a>
        </div>
      </div>
      {/* <div className="h-screen w-0 flex-1">
        <h1 className="text-black text-4xl font-semibold">{pageTitle}</h1>
        <br />
        {/* <button><a href={subPath}>{subPage}</a></button> 
      </div> */}
    </div>
  );
};

export default Navbar;
