import React, { useState } from "react";

const Resgate = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isTrueMoveChecked, setIsTrueMoveChecked] = useState(false);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="  bg-[#f0f8ff] lg:w-8/12  rounded-md mx-auto mt-6 ">
      <div className="relative flex min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
        <div className="flex-auto px-4 lg:px-10  pt-0">
          <form>
            <h6 className=" text-md mt-3 mb-6 font-bold uppercase">
            Denuncie Pet
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Animal
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Horário
                  </label>
                  <input
                    type="time"
                    className="border-0 px-3 py-3 placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="00:00"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Esta Andando?
                  </label>
                  <div className="border-0 px-3 py-3 placeholder-gray-300 bg-white rounded text-sm shadow flex items-center focus:outline-none focus:ring w-full lg:w-5/12  justify-center ease-linear transition-all duration-150">
                    <label className="text-sm px-2" htmlFor="">
                      Sim
                    </label>
                    <input
                      type="checkbox"
                      name="trueMove"
                      checked={isTrueMoveChecked}
                      onChange={() => setIsTrueMoveChecked(true)}
                    />
                    <label className="text-sm px-2" htmlFor="">
                      Não
                    </label>
                    <input
                      type="checkbox"
                      name="falseMove"
                      checked={!isTrueMoveChecked}
                      onChange={() => setIsTrueMoveChecked(false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Cidades
                  </label>
                  <select
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-11/12 ease-linear transition-all duration-150"
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
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative mb-3">
                  <label
                    className="block uppercase  text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Descrição
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 min-h-[250px] max-h-[150px]"
                    rows="4"
                  >
                   
                  </textarea>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Foto
                  </label>
                  <label
                    htmlFor="dropzone-file"
                    className="min-h-[250px] flex flex-col items-center justify-center h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      objectFit: "fill",
                    }}
                  >
                    {!imageUrl && (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm dark:text-gray-400">
                          <span className="font-semibold">
                            Clique para enviar
                          </span>{" "}
                          ou arraste para dentro
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG
                        </p>
                      </div>
                    )}
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
            </div>

            <button
                className=" bg-[#0365bc] ml-5 text-white active:bg-[#024873] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Enviar
              </button>
            <hr className="my-2 border-b-1 w-/12 border-blue-300" />
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Resgate;