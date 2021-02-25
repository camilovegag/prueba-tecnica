import React from "react";
import "./App.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TextInfo from "./components/TextInfo";
import Background from "./components/Background";
import RoundedCard from "./components/RoundedCard";

const App = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <div>
      <ArrowLeftOutlined className="icon" />
      <TextInfo />
      <RoundedCard />
      <Background />
    </div>
  );
};

export default App;
