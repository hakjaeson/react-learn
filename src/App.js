import React, { useEffect } from "react";
import { getProduct } from "./api/product/product-api";

const App = () => {
  useEffect(() => {
    getProduct();
  }, []);
  return <div>App</div>;
};

export default App;
