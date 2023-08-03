import React, {useEffect} from 'react';
import Context from './Context';

function MyProvider({children}) {
  const obj = {};

  useEffect(() => console.log('App - Olha Aqui Bicharada | Developed by Kaio and Vincenzo'))

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;