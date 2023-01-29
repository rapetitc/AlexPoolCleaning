import React from "react";
import "./App.scss";

import FSProvider from "./Context/FSContext";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <FSProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </FSProvider>
  );
};

export default App;
