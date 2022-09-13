import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { paths } from "./constants/strings";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path={paths.Menu} element={<></>} />
        <Route path={paths.Reservations} element={<></>} />
        <Route path={paths.Contact} element={<></>} />
        <Route path={paths.Default} element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
