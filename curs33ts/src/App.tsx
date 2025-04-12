import React, { useState } from "react";
import { Hero, Input } from "components";

function App() {
  const [value, setValue] = useState<string>("");

  function handleClick(text: string) {
    alert(text);
  }

  function handleInputChange(value: string, key?: string) {
    console.log(value, key);
    setValue(value);
  }

  return (
    <div>
      <Hero text="Hero title" handleClickButton={handleClick} />
      <Input value={value} name="input1" onChange={handleInputChange} />
    </div>
  );
}

export default App;
