import React from "react";
import Provider from "./context/provider";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";
import { pages } from "../src/Routes/Rotas";

const App = () => {
  return (
    <div className="flex bg-[#f0f8ff]  min-h-[1000px] max-h-[100000000px]">
      <Provider>
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                key={index + "-route"}
                path={page.path}
                element={<page.component />}
              />
            );
          })}
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
