import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useMyCallback from "../../hooks/useCall";

const Fc = ({ name }) => {
  const [age, setAge] = useState(45);

  const test = useMyCallback();

  const handleClick = () => {
    test();
    // setAge((pr) => pr + 1);
  };
  console.log(123);
  useEffect(() => {
    console.log("1");
    const tId = setTimeout(() => {
      setAge((prVal) => prVal + 1);
    }, 2000);

    return () => {
      console.log("2");
      clearTimeout(tId);
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
    </div>
  );
};

export default Fc;
