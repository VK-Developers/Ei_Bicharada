import React, {useEffect, useState} from 'react';
import { LOGIN, PASSWORD } from "@env";
import Context from './Context';

function MyProvider({children}) {
  const [login, setLogin] = useState({email: LOGIN || '', password: PASSWORD || '', status: true});
  const [token, setToken] = useState('');
  const [menu, setMenu] = useState(true);
  const [loader, setLoader] = useState(false);
  
  const obj = {
    login, setLogin,
    menu, setMenu,
    token, setToken,
    loader, setLoader
  };

  useEffect(() => console.log('App - Hey Pet!'), [])

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;