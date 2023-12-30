import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import Add from "./Add";
import Work from "./work";
import Edit from "./Edit";
import List from "./WorkList";
import PendingList from "./PendingList";
import CompletedList from "./CompletedList";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <h1>Het!</h1> */}
    {/* <Control /> */}
    {/* <Layout/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Work />}>
            <Route index element={<List/>} />
            <Route path="/pending" element={<PendingList />} />
            <Route path="/completed" element={<CompletedList/>} />
          </Route>
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
