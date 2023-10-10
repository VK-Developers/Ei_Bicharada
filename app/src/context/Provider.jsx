import React, {useEffect, useState} from 'react';
import Context from './Context';

function MyProvider({children}) {
  const [login, setLogin] = useState({email: '', password: '', status: true});
  const [token, setToken] = useState('');
  const [menu, setMenu] = useState(true);

  const obj = {
    login, setLogin,
    menu, setMenu,
    token, setToken
  };

  useEffect(() => console.log('App - Hey Pet!'), [])

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;