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
            className="w-3/12 min-h-[250px] max-h-[300px] rounded-md shadow-sm p-1 shadow-black border-black border-[0.20px]"
          ></textarea>

          <div class="ml-4 w-3/12 max-w-[468px] h-[260px]">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG 
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
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
