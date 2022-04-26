import React from "react";
import "./Hero.css";

interface Props {
  text: string; // required prop
  height?: number; // optional prop
  handleClickButton: (text: string) => void;
}

export function Hero({ text, height, handleClickButton }: Props) {
  return (
    <div
      className="Hero_Container"
      style={{ minHeight: height ? `${height}vh` : "60vh" }}
    >
      <h1 className="Hero_Title">{text}</h1>
      <button onClick={() => handleClickButton(text)}>
        Alert the hero text
      </button>
    </div>
  );
}
