import Provider from "./context/provider";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";
// Components
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
      <Provider>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route  path={'/'} element={<Home />} />
          {/* <Route path={'*'} element={<page.component/>} /> */}
        </Routes>
      </Provider>
  );
};

export default App;
