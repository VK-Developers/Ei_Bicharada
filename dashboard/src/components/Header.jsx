const Header = () => {
  return (
    <>
    <div className="rounded-t bg-[#162b3a] mb-0 px-6 py-6">
              <div className="text-center flex">
                <h6 className="text-white text-xl font-bold">
                  Content
                </h6>
                <div className="ml-auto">
                <button
                  className=" bg-[#e23333] ml-2 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Adicionar
                </button>
                <button
                  className=" bg-[#e23333] ml-2 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  News
                </button>
                <button
                  className=" bg-[#e23333] ml-2 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Lista
                </button>
                </div>
                
              </div>
            </div>
    </>
  );
};

export default Header;
