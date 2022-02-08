import React from "react";
import Footer from "./components/Footer/Footer";
import GenerateLinkForm from "./components/GenerateLinkForm/GenerateLinkForm";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <GenerateLinkForm />
      </Main>
      <Footer />
    </>
  );
};

export default App;
