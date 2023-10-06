const Resgate = () => {
  return (
    <>
      <div className="h-">
        <div>
          <div className=" overflow-x-auto p-7">
            <h2 className=" text-left font-bold text-4xl  ">
              Formulário de Resgate
            </h2>
            <br />
            <form action="">
              <div className="space-x-6 space-y-3 gap-0 flex">
                <input
                  type="text"
                  name="animal"
                  id="animal"
                  placeholder="Animal"
                  className="w-6/12 rounded-md shadow-lg border-black border-[0.20px]"
                />
                <input type="date" name="" id="" className="space-y-3 rounded-md shadow-lg border-black border-[0.20px]" />
                {/* <select
                  className="w-3/12 rounded-md shadow-lg border-black border-[0.20px]"
                  id="cidades"
                  name="cidades"
                >
                  <option value="santos">Santos</option>
                  <option value="sao-vicente">São Vicente</option>
                  <option value="praia-grande">Praia Grande</option>
                  <option value="guaruja">Guarujá</option>
                  <option value="bertioga">Bertioga</option>
                  <option value="itanhaem">Itanhaém</option>
                  <option value="mongagua">Mongaguá</option>
                  <option value="peruibe">Peruibe</option>
                </select> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resgate;
