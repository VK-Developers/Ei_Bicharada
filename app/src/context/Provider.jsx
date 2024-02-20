import React, {useEffect, useState} from 'react';
import { LOGIN, PASSWORD } from "@env";
import Context from './Context';

import { allInfos } from '../services/information';
import { checkCache } from '../hooks/cache';
import security from '../services/security';

function MyProvider({children}) {
  const [login, setLogin] = useState({email: LOGIN || '', password: PASSWORD || '', status: true});
  const [token, setToken] = useState('');
  const [menu, setMenu] = useState(true);
  const [loader, setLoader] = useState(false);
  const [infos, setInfos] = useState(false);
  const [block, setBlock] = useState(1);
  
  const obj = {
    login, setLogin,
    menu, setMenu,
    token, setToken,
    loader, setLoader,
    infos, block
  };

  useEffect(() => {
    async function WillRender() {
      const pass = await security();
      setBlock(pass)
    }

    async function GetCache() {
      const cache = await checkCache('logIn')
      if (!cache) return
      setLogin({...cache, status: true})
    }

    async function Infos() {
      const obj = await allInfos()

      const newObj = obj.reduce((acc, cur) => {
        const isNewKey = Object.keys(acc).includes(cur.local)
        
        if (!isNewKey) {
          acc[cur.local] = { [cur.subLocal]: cur.info }
          return acc
        }

        acc[cur.local] = {
          ... acc[cur.local],
          [cur.subLocal]: cur.info
        }

        return acc
      }, {})

      setInfos(newObj)
    }

    WillRender()
    GetCache()
    Infos()
    console.log('App - Hey Pet!')
  }, [])

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;