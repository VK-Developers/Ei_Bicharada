import React from 'react';
import Navbar from '../components/Navbar';

const TempHouse = () => {
  return (
    <>
      <Navbar />
      <div className="flex-auto w-full">
      <div className=" absolute text-center mx-[23%] m-7 p-8 w-5/12 max-h-full rounded-md shadow-black shadow-2xl bg-indigo-200">
          <h2 className=" font-bold text-4xl">Lar Temporário</h2>
          <br />
          <form className="font-semibold m-2" action="">
            <label className="text-2xl m-4" htmlFor="">
              Nome do Cuidador{" "}
            </label>
            <br />
            <input
              className="w-6/12 rounded-md mt-2 h-8 border-black border-[0.20px]"
              type="text"
              name="cuidador"
            />
            <br /> <br />
            <label className="text-2xl" htmlFor="">
              Endereço
            </label>
            <br />
            <input
              className="w-6/12 rounded-md shadow-lg mt-2 border-black border-[0.20px]"
              type="text"
              name="endereco"
              id=""
            />
            <br /> <br />
            <label className="text-2xl" htmlFor="">Cep</label>
            <br />  
            <input className="rounded-md shadow-lg mt-2 border-black border-[0.20px]"  type="text" name="cep" id="" />
            <br /> <br />
            <label className="text-2xl" for="cidades">Cidade </label>
            <br />
            <select
              className=" rounded-md shadow-lg mt-2 border-black border-[0.20px]"
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
            <br /> <br />
            <label className="text-2xl" htmlFor="">Animal</label>
            <br />  
            <input className="rounded-md shadow-lg mt-2 border-black border-[0.20px]"  type="text" name="animais" id="" />
            <br /> <br />
            <label className='text-2xl' htmlFor="">Porte do Animal</label>
            <br />
              <label  >Pequeno Porte</label>
              <br />
               <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="sm-port" />
               <br />
               <label  >Médio Porte</label>
              <br />
               <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="-port" />
               <br />
               <label  >Grande Porte</label>
              <br />
               <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="lg-port" />
               <br />
            <label className="text-2xl" for="prazo">Tempo desejado </label>
            <br />
            <select
              className="text-center rounded-md shadow-lg mt-2 border-black border-[0.20px]"
              id="prazo"
              name="prazo"
            >
              <option value="7d">7 Dias</option>
              <option value="15d">15 Dias</option>
              <option value="fulld">Prazo Indeterminado</option>
            </select>
            <br /> <br />

            <input
              className=" rounded-md shadow-lg w-3/12 hover:bg-green-600 border-black border-[0.20px] hover:font-semibold hover:text-white"
              type="submit"
              value="Enviar"
            />{" "}
            <input
              className=" rounded-md shadow-lg mx-4 w-3/12 hover:bg-red-700 border-black border-[0.20px] hover:font-semibold hover:text-white"
              type="reset"
              value="Limpar"
            />
          </form>
        </div>
      </div>
    
    </>
  )
};

export default TempHouse;
