
import Navbar from "../components/Navbar";

const Resgate = () => {
  return (
<>
  <Navbar />
      
      <div className="flex-auto w-full">
      <div className=" absolute text-center mx-[20%] m-7 p-8 w-5/12 max-h-full rounded-md shadow-black shadow-2xl bg-indigo-200">
          <h2 className=" font-bold text-4xl">Formulário de Resgate</h2>
          <br />
          <form className="font-semibold m-2" action="">
            <label className="text-2xl m-4" htmlFor="">
              Animal{" "}
            </label>
            <br />
            <input
              className="w-6/12 rounded-md mt-2 h-8 border-black border-[0.20px]"
              type="text"
              name="animal"
            />
            <br /> <br />
            <label className="text-2xl" htmlFor="">
              Esta se Movendo?
            </label>
            <br />
            <label className="text-xl" htmlFor="">
              Sim{" "}
            </label>
            <input type="checkbox" name="trueMove" id="trueMove" />
            <label className="text-xl pl-4" htmlFor="">
              Não{" "}
            </label>
            <input type="checkbox" name="falseMove" id="falseMove" />
            <br /> <br />
            <label htmlFor="">Inserir Foto</label>
            <br />
            <input type="file" name="imagem" />
            <br />
            <br />
            <label htmlFor="">Ocorrido</label>
            <br />
            <textarea
              className="rounded-md shadow-lg max-h-26 border-black border-[0.20px]"
              name="ocorrido"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <br /> 
            <label className="text-2xl" htmlFor="">
              Horário
            </label>
            <br />
            <input
              className=" rounded-md shadow-lg mt-2 border-black border-[0.20px]"
              type="time"
              name="horario"
            />
            <br /> <br />
            <label className="text-2xl" htmlFor="">
              Endereço
            </label>
            <br />
            <input
              className="rounded-md shadow-lg mt-2 border-black border-[0.20px]"
              type="text"
              name="endereco"
              id=""
            />
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
  );
};

export default Resgate;
