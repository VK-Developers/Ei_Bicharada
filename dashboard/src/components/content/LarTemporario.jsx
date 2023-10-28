import { useState } from "react";

const LarTemporario = () => {
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
            Lar Temporário
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                   Nome
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
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="border-0 px-3 py-3 placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="(00) 99999-9999"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Cidade
                  </label>
                  <select
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-fulol2 ease-linear transition-all duration-150"
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
                    CEP
                  </label>
                 <input type="text" name="cep" id="cep" className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-2/12 px-4 mb-4 lg:mb-0">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Porte
                  </label>
                  <select
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-fulol2 ease-linear transition-all duration-150"
                    id="porte"
                    name="porte"
                  >
                   <option value="pequeno">Pequeno</option>
                   <option value="medio">Médio</option>
                   <option value="grande">Grande</option>
                  </select>
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-xs font-bold pl-2 mb-2"
                    htmlFor="grid-password"
                  >
                    Disponibilidade de Tempo
                  </label>
                  <select
                    className="border-0 px-3 py-3  placeholder-gray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-fulol2 ease-linear transition-all duration-150"
                    id="tempo"
                    name="tempo"
                  >
                    <option value="quinzenal">15 dias</option>
                    <option value="quinzenal">30 dias</option>
                    <option value="quinzenal">Mais de 30 dias</option>
                  </select>
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
  )
};

export default LarTemporario;