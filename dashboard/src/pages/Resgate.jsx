import Navbar from "../components/Navbar";

const Resgate = () => {
  return (
    <div className="flex">
      <Navbar />
      <div>
        <div className="w-  pl-24 overflow-x-auto min-h-screen p-7 main bg-green-900">
          <h2 className=" font-bold text-4xl text-center">
            Formulário de Resgate
          </h2>
          <br />
          <form action="">
            <div className="w-12/12 justify-between flex">
              <input
                type="text"
                name="animal"
                id="animal"
                placeholder="Animal"
                className="p-1 rounded-md w-6/12 border-black border-[0.20px]"
              />
              <input type="date" name="data" id="data" className="3/12" />
              <select
                className="w-3/12 rounded-md shadow-lg mt-2 border-black border-[0.20px]"
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
  );
};

export default Resgate;
