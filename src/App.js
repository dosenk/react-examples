import "./App.css";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import { Route, Routes } from "react-router-dom";
import ClassComponent2 from "./components/ClassComponent2/ClassComponent2";
import Fc from "./components/FC/FC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClassComponent name={"Dima"} />} />
      <Route path="ivan" element={<ClassComponent2 name={"Ivan"} />} />
      <Route path="Oleg" element={<Fc name={"Oleg"} />} />
    </Routes>
  );
}

export default App;
