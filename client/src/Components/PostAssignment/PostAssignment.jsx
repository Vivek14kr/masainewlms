import React from 'react'
import { useState } from 'react';
import "./PostAssignment.css"
function PostAssignment() {
    const [form, setForm] = useState({});
    const handleChange = ({ name, value }) => {
      setForm({
        ...form,
        [name]: value,
      });
    };

    console.log(" form: ", form);
    const handleSubmit = () => {
      fetch("https://newmsserver.herokuapp.com/assignmentss", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((d) => d.json())
        .then((res) => {
          console.log(res, " ress");
        })
        .catch((err) => {
          alert(err);
        });
      
    };
     

  return (
    <div id="Loginnn">
      <div id="finalboxx">
        <div id="newboxx">
          <div id="formboxx">
            <form action="">
              <b id="email">Assignment Name</b>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                type="text"
                name="assignmentname"
                id=""
                className="inputbox"
              />
              <b>Teacher Name</b>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                type="text"
                name="teachername"
                id=""
                className="inputbox"
              />
              <b>Stream</b>
              <select
                onChange={(e) => {
                  handleChange(e.target);
                }}
                name="stream"
                id=""
                className="inputboxx"
              >
                <option value="">Select Stream</option>
                <option value="FRONTEND">FRONTEND</option>
                <option value="BACKEND">BACKEND</option>
                <option value="FULL STACK">FULL STACK</option>
              </select>
              <b>Date</b>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                type="text"
                name="date"
                id=""
                className="inputbox"
              />
              <b>Time</b>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                type="text"
                name="time"
                id=""
                className="inputbox"
              />
            </form>
          </div>

          <div>
            <button onClick={handleSubmit} id="btnnn">
              Create Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostAssignment