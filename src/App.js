import "./App.css";
import React from "react";
import TopBar from "./components/TopBar";
import Background from "./components/Background";
import StoreListings from "./components/StoreListing";

function App() {
  return (
    <>
      <TopBar />
      <Background />
      <StoreListings />
    </>
  );
}

export default App;
