import React, { useEffect, useState } from "react";

import "./Assignment.css";
function Assignment() {
  
  let [assignments, setAssignment] = useState([]);

  useEffect(() => {
    fetchassignments();
  }, []);

  const fetchassignments = () => {
    fetch("https://newmsserver.herokuapp.com/assignmentss")
      .then((res) => res.json())
      .then((res) => {
        console.log(" ressss : ", res);
        setAssignment(res);
      })
      .catch((err) => {
        alert("er :", err);
      });
  };
  return (
    <div id="assignmentmain">
      <div id="lectureshead">
        <p>Assignments</p>
      </div>
      <div id="mainbox">
        {/* arr map will go there */}
       
        {assignments.map((item) => (
          <div className="boxhead">
            <div>
              <div className="boxfirst">
                <p className="titlee">{item.assignmentname}</p>
                <div className="statuss">{item.stream}</div>
              </div>
              <div>
                <p className="infoo">
                {`  ${item.teachername} Created Assignment Problem's at ${item.date}, ${item.time}`}
                </p>
              </div>
            </div>
            <div className="attendancee">
              <p>Progress</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignment;
