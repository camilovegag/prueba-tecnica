import React from "react";
import "./App.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TextInfo from "./components/TextInfo";
import Background from "./components/Background";
import RoundedCard from "./components/RoundedCard";

const App = () => {
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
