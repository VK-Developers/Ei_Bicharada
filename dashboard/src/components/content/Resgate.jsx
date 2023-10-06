const Resgate = () => {
  return (
    <>
      <div className="flex-grow">
        <div>
          <div className=" pl-24 overflow-x-auto min-h-screen p-7 main bg-">
            <h2 className=" font-bold text-4xl text-center">
              Formulário de Resgate
            </h2>
            <br />
            <form action="">
              <div className="justify-between gap-x-3 flex">
                <input
                  type="text"
                  name="animal"
                  id="animal"
                  placeholder="Animal"
                  className="w-6/12 p-1 rounded-md shadow-lg border-black border-[0.20px]"
                />
                <select
                  className="w-3/12 p-1 rounded-md shadow-lg border-black border-[0.20px]"
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
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resgate;
