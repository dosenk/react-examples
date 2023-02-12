import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Fc = ({ name }) => {
  const [age, setAge] = useState(45);

  const handleClick = () => {
    setAge((pr) => pr + 1);
  };

  useEffect(() => {
    console.log("1");
    const tId = setTimeout(() => {
      setAge((prVal) => prVal + 1);
      console.log("setTimeout"); // todo - remove
    }, 3000);

    return () => {
      console.log("2");
      // clearTimeout(tId);  // todo - comment
    };
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Hello, {name}!</h1>
      <h1 className="class1">age: {age}!</h1>
      <button onClick={handleClick}>Click</button>
      <div style={{ padding: "5px" }}>
        <NavLink to="/ivan">Go to Ivan</NavLink>
      </div>
      {/*<UseLayoutEffectFc />*/}
    </div>
  );
};

export default Fc;
