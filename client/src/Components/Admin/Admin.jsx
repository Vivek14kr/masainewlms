import React, { useState } from "react";
import PostAssignment from "../PostAssignment/PostAssignment";
import PostLecture from "../PostLecture/PostLecture";
import "./Admin.css";
function Admin() {
  let [buttonname, SetbtnName] = useState("");
  return (
    <div id="admin">
      <div id="lectureshead">
        <p>Admin</p>
      </div>
      <div id="adminbtns">
        <button
          className="adminbtn"
          onClick={() => {
            SetbtnName("lecture");
          }}
        >
          Create a Lecture
        </button>
        <button
          className="adminbtn"
          onClick={() => {
            SetbtnName("assignment");
          }}
        >
          Create an Assignment
        </button>
      </div>

      <div id="post">
        {buttonname === "" ? (
          ""
        ) : buttonname === "lecture" ? (
          <PostLecture />
        ) : (
          <PostAssignment />
        )}
      </div>
    </div>
  );
}

export default Admin;
