const Resgate = () => {
  return (
    <>
      <div className="flex-col flex">
        <div className="m-4 space-x-2 space-y-3 h-10 ">
          <input
            type="text"
            name="animal"
            id="animal"
            placeholder="Animal"
            className="w-5/12 text-2xl rounded-md shadow-sm p-1 shadow-black border-black border-[0.20px]"
          />
          <input
            type="time"
            name="horario"
            id="horario"
            className="rounded-md text-center w-1/12 text-lg shadow-sm p-1 shadow-black border-black border-[0.20px]"
          />
        </div>
        <div className="m-4 space-x-2 space-y-3 h-10 ">
          <input
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
            className="w-5/12 text-2xl rounded-md shadow-sm p-1 shadow-black border-black border-[0.20px]"
          />
          <select
            className=" text-md text-center rounded-md shadow-sm m-2 shadow-black border-black border-[0.20px]"
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
        <div className="m-4 space-x-2 flex-row flex h-10 ">
          <textarea
            name="message"
            rows="5"
            cols="30"
            placeholder="Ocorrido"
            className="w-3/12 h-[200px] rounded-md shadow-sm p-1 shadow-black border-black border-[0.20px]"
          ></textarea>
          <div className="max-w-[400px] p-1 min-h-[200px] bg-blue-800">
          <label>
            <input type="file" accept="image/png/jpg" id="imgAnimal" />
        </label>
        <img src="imgAnimal" className="w-96" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resgate;
{
  /*<input type="time" name="" id="" className="space-y-3 rounded-md shadow-lg border-black border-[0.20px]" />
  
className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          

  <select
                
                
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
                </select> 
                <div className="space-x-6 flex-grow flex">
                <input type="text" name="animal" id="animal" placeholder="Animal"
                       className=" flex-col  rounded-md shadow-lg border-black border-[0.20px]"
                />
                <input type="date" name="animal" id="animal" placeholder="Animal"
                       className=" flex-col w-80  rounded-md shadow-lg border-black border-[0.20px]"
                />
              </div>
}
*/
}
