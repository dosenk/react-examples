import React, { memo, useCallback, useState } from "react";

const useMyCallback = () => {
  const [_, setState] = useState([1]);

  const set = useCallback((e) => {
    return setState((pr) => [...pr, pr + 1]);
  }, []);

  return set;
};

export default useMyCallback;
