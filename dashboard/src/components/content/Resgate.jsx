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
          <div className="flex flex-col w-3/12">
            <textarea
              name="message"
              rows="5"
              cols="30"
              placeholder="Ocorrido"
              className="min-h-[200px] max-h-[250px] rounded-md shadow-sm p-1 shadow-black border-black border-[0.20px]"
            ></textarea>

            <div className="flex flex-row bg-white gap-2 p-2 rounded-md items-center text-center text-lg shadow-sm mt-4 shadow-black border-black border-[0.20px]">
              <label className="text-2xl" htmlFor="">
                Esta se Movendo?
              </label>
              <label className="text-xl pl-4" htmlFor="">
                Sim
              </label>
              <input
                type="checkbox"
                name="trueMove"
                checked={isTrueMoveChecked}
                onChange={() => setIsTrueMoveChecked(true)}
              />
              <label className="text-xl pl-4" htmlFor="">
                Não
              </label>
              <input
                type="checkbox"
                name="falseMove"
                checked={!isTrueMoveChecked}
                onChange={() => setIsTrueMoveChecked(false)}
              />
            </div>

            <div alt="Botões" className="flex flex-row gap-10 p-2 mt-4">
              <button className="rounded-xl border-2 p-2 border-black hover:text-white hover:bg-green-600">Enviar</button>
            </div>
          </div>

          <div className="ml-4 w-3/12 max-w-[468px] h-[268px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Clique para enviar</span> ou arraste para dentro
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
    </>
  );
};

export default Resgate;

