const Header = () => {
  return (
    <>
      <div className="flex relative items-center px-5 justify-between shadow-sm shadow-black bg-[#7c97e7] w-full h-12">
        <div className="left-0 ">
          <span className="text-2xl">Nome do Content</span>
        </div>
        <div className="flex gap-10">
          <button className="hover:text-white hover:font-semibold cursor-pointer" >Adicionar</button>
          <button className="hover:text-white hover:font-semibold cursor-pointer" >Novos</button>
          <button className="hover:text-white hover:font-semibold cursor-pointer" >Lista</button>
        </div>
      </div>
    </>
  );
};

export default Header;
