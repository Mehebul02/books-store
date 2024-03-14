import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from './Course';


const Courses = () => {
  const [courses,setCourses] = useState([])
  useEffect(()=>{
    fetch('product.json')
    .then(res => res.json())
    .then(data =>setCourses(data))
  },[]);
    return (
      
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
              courses.map((item,index) => <Course key={index} item={item}></Course>)
            }

          </div>
       
    );
};

Courses.propTypes = {
  // courses:PropTypes.object.isRequired

};

export default Courses;