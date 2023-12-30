import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Add() {
  const [data, setData] = useState({ workId: "" });
  const nav = useNavigate();
  const apiUrl = "http://localhost:3000";
  return (
    <div className="container mycontainer">
      <div className="myForm">
        <input
          type="text"
          className="form-control"
          id="txt1"
          placeholder="Enter work-Id"
          onChange={(e) => {
            setData({ ...data, workId: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="txt2"
          placeholder="Enter WorkName"
          onChange={(e) => {
            setData({ ...data, workName: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="txt3"
          placeholder="Enter details"
          onChange={(e) => {
            setData({ ...data, details: e.target.value });
          }}
        />
        <label>
          Enter Completion Date : 
        </label>
        <input
          type="Date"
          className="form-control"
          id="txt3"
          placeholder="Enter Date"
          onChange={(e) => {
            setData({ ...data, CompletionDate: e.target.value });
          }}
        />
        {/* <label class="checkbox-btn">
          <label for="checkbox"></label>
          <input id="checkbox" type="checkbox" />
          <span class="checkmark"></span>
        </label> */}
        <button
          type="button"
          className="btn btn-primary mybtn"
          onClick={() => {
            fetch(apiUrl, {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "content-type": "application/json" },
            }).then((res) => {
              nav("/");
            });
          }}
        >
          Submit
        </button>
        <div>{data.name}</div>
      </div>
    </div>
  );
}
export default Add;
