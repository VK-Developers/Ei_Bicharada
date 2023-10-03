import Context from "./context";

function Provider({ children }) {
  const obj = {};
  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

//prototype

export default Provider;
