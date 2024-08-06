import React from 'react'
import './Courses.css'
import ai from "../../../assets/img/ai.png"
import sd from "../../../assets/img/sd.png"
import dg from "../../../assets/img/dg.png"
import hacker from "../../../assets/img/hacking.png"


function Courses() {
  const  courseData=[{
    title:"AI Devolopment",
    desc:"Master AI Devolopment",
    img:ai,
  },
  {
    title:"DEGITAL MARKETING",
    desc:"Master Digital Marketing!!!",
        img:dg,
  },
  {
    title:"CYBER SECURITY",
    desc:"Master CYBER SECURITY!!!",
    img:hacker
  },
  {
    title:"SOFTWARE DEVOLOPMENT ",
    desc:"Master software Devolopment",
    img:sd,
  },

]
  return (
    <div className='container course container'>
      <div className='courses-top'>
        <h2 className='section_title'>Our Free Courses</h2>
        <p>The top trading free courses with free certificates</p>
        <div className='course-wrapper'>
          {
            courseData.map((course,index)=>(
              <div className='course-item' key={index}>
            <span className='course-icon'>
              <img src={course.img}alt=''/>

            </span>
            <div className='course-content'>
              <h4>{course.title}</h4>
              <p>{course.desc} </p>
            </div>
             
          </div>
            )
            )
          }
         
        </div>

      </div>
    </div>
  ) 
}

export default Courses