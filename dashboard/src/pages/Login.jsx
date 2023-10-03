

const Login = () => {
  return (
    <>
    {/* Image */}
     <div className='w-6/12 bg-black'>

     </div>
      {/* Menu */}
     <div className=" w-6/12 bg-indigo-600">
      <label htmlFor="">Login</label>
      <input className="text-lg mx-2" type="text" />
      <label htmlFor="">Senha</label>
      <input className="text-lg mx-2" type="text" />
      <input className=" m-2 text-center rounded-sm" type="button" value="Entrar" />
     </div>
    </>
  )
};

export default Login;
