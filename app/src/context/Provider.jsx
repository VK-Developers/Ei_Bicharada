import React, {useEffect, useState} from 'react';
import Context from './Context';

function MyProvider({children}) {
  const [login, setLogin] = useState({email: '', password: '', status: true});
  const [menu, setMenu] = useState(false);

  const obj = {
    login, setLogin,
    menu, setMenu
  };

  useEffect(() => console.log('App - Olha Aqui Bicharada'), [])

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;