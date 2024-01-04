import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

function Edit() {
  const [data, setData] = useState({ workId: "" });
  const nav = useNavigate();
  const params = useParams();
  // console.log(params.id)
  const apiUrl = "https://task-manager-backend-m1i4.onrender.com

"+params.id;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        // console.log(data);
      });
  },[]);
  console.log(data)
  return (
    <div className="container mycontainer">
      <div className="myForm">
        <input
          type="text"
          className="form-control"
          id="txt1"
          placeholder="Enter work-Id"
          value={data.workId}
          onChange={(e) => {
            setData({ ...data, workId: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="txt2"
          placeholder="Enter WorkName"
          value={data.workName}
          onChange={(e) => {
            setData({ ...data, workName: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="txt3"
          placeholder="Enter details"
          value={data.details}
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
          // value={data.CompletionDate.toISOString().split('T')[0]}
          placeholder="Enter Date"
          onChange={(e) => {
            setData({ ...data, CompletionDate: e.target.value });
          }}
        />
        <button
          type="button"
          className="btn btn-primary mybtn"
          onClick={() => {
            fetch(apiUrl, {
              method: "PUT",
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
export default Edit;
