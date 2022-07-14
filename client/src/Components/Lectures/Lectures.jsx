import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Lectures.css"
function Lectures() {


  let [lectures, setLectures] = useState([])

  useEffect(()=>{
     fetchlectures()
  },[])

  const fetchlectures = ()=>{
    fetch("https://newmsserver.herokuapp.com/lecturess")
      .then((res) => res.json())
      .then((res) => {
        setLectures(res);
      })
      .catch((err) => {
        alert("er :", err);
      });
  }
  return (
    <div id="lecturemain">
      <div id="lectureshead">
        <p>Lectures</p>
      </div>
      <div id="mainbox">
        {/* arr map will go there */}
      
        {lectures.map((item) => (
          <div className='boxhead'>
            <div>
              <div className="boxfirst">
                <p className="title">{item.lecturename} - {item.date}</p>
                <div className="status">Live</div>
              </div>
              <div>
                <p className="info">
                  {`${item.teachername} Scheduled General at ${item.date}, ${item.time}`}
                </p>
              </div>
            </div>
            <div className="attendance">
              <p>Absent</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lectures