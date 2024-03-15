import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from './Course';


const Courses = ({handleSelected}) => {
  const [courses,setCourses] = useState([])
  useEffect(()=>{
    fetch('product.json')
    .then(res => res.json())
    .then(data =>setCourses(data))
  },[]);
    return (
      
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
              courses.map((item,index) => <Course key={index} item={item} handleSelected={handleSelected}></Course>)
            }

          </div>
       
    );
};

Courses.propTypes = {
  handleSelected:PropTypes.func

};

export default Courses;