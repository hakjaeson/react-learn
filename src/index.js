import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Heading from "./Heading.js";

// const Heading = function () {
//   return (
//     <div>
//       반가워요 <b>정화섭</b>. 컴포넌트로 HTML 만듦
//     </div>
//   );
// };

const H1 = function () {
  return <h1>반가워요.</h1>;
};
const Stitle = function () {
  return <h2>소제목입니다.</h2>;
};
const HeaderH3 = function () {
  return <header>상단이에요.</header>;
};
const PWord = function () {
  return (
    <>
      <p>1번 문장입니다. </p>
      <p>2번 문장입니다.</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <p>1번 문장입니다. </p>
    <p>2번 문장입니다.</p> */}
    <PWord />
    <Heading />
    <H1 />
    <Heading />
    <Stitle />
    <Heading />
    <HeaderH3 />
    <Heading />
    <App />
  </React.StrictMode>
);
