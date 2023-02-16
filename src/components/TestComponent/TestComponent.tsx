import React, { useContext } from "react";
import TestContext from "../../contexts/TestContext/TestContext";

const TestComponent = () => {
  const value = useContext(TestContext);
  return <div>{value}</div>;
};

export default TestComponent;
