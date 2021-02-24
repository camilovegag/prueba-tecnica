import React from "react";
import "./App.css";
import Background from "./components/Background";
import RoundedCard from "./components/RoundedCard";
import { ArrowLeftOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <div>
      <ArrowLeftOutlined className="icon" />
      <RoundedCard />
      <Background />
    </div>
  );
};

export default App;
