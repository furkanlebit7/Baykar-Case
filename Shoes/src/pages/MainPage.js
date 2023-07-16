import React from "react";
import Header from "../components/Header";
import MainSneaker from "../components/MainSneaker";
import MainContentBox from "../components/MainContentBox";

const MainPage = () => {
  return (
    <div className="bg-double min-h-screen">
      <Header />
      <MainSneaker />
      <MainContentBox />
    </div>
  );
};

export default MainPage;
