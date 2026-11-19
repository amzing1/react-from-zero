import { useState } from "react";

function Demo() {
  const [n, setN] = useState(0);
  console.log("render", n);

  function handleClick() {
    setN(n + 1);
    setN(n + 1);
    console.log("click", n);
  }

  return <button onClick={handleClick}>{n}</button>;
}

export default Demo;
