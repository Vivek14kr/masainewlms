import React, { useState } from 'react'
import "./PostLecture.css"
function PostLecture() {
  const [form, setForm] = useState({});
  const handleChange = ({ name, value }) => {
    
    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(" form: ", form)
     const handleSubmit = () => {
     
         fetch("https://newmsserver.herokuapp.com/lecturess", {
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
       }
     


  return (
    <div id="Loginnn">
      <div id="finalboxx">
        <div id="newboxx">
          <div id="formboxx">
            <form action="">
              <b id="email">Lecture Name</b>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                type="text"
                name="lecturename"
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
              Create Lecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostLecture