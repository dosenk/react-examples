import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffectFc = () => {
  const [state, setState] = useState(11);

  useLayoutEffect(() => {
    let i = 0;
    while (i != 100000) {
      i += 1;
      console.log(i);
    }
    setState(22);
  }, []);

  return (
    <div>
      <button onClick={() => console.log(`${state} btn clicked`)}>Click</button>
    </div>
  );
};

export default UseLayoutEffectFc;
