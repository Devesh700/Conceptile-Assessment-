import React, { useEffect, useState } from 'react'
import "./Courses.css";
import CourseData from './CourseData';
import { useNavigate } from 'react-router-dom';
import CourseDescription from './CourseDescription';
import { FiEdit3 } from 'react-icons/fi';
import ProfileHero from '../../Components/ProfileHero';
import { user } from './CourseData';
const CourseList = () => {
  const ids=user.coursesEnrolled.map((elem)=>elem.courseId);
  const userEnrolled=CourseData.filter(elem=>ids.includes(elem.courseId));
  const [category,setcategory] =useState([...new Set(CourseData.map((elem) => elem.category))]);
  const [filteredData,setfilteredData]=useState(userEnrolled);
  const [searchValue,setsearchValue]=useState('');
  useEffect(()=>{
    console.log(category);
    console.log(filteredData);
    console.log(ids);
  },[]);
  useEffect(()=>{
    handleSearch();
  },[searchValue]);
  useEffect(()=>{
    console.log(category);
  },[]);
  const handleSearchvalue=(e)=>{
    setsearchValue(e.target.value,()=>handleSearch());
  }
  const handleSearch=(e)=>{try{
      let val=new RegExp(`\\b${searchValue}`, 'i')
      let data=userEnrolled.filter((elem,index)=>{
        return val.test(elem.category);
      })
       setfilteredData(data);
  }
  catch(err){
    alert("error ")
  }}
  const navigate=useNavigate();
  return (
    <>
    <ProfileHero/>
            
      <div className='courselist-main p-4 mt-4'>
        <div className='flex justify-between flex-wrap'>
          <h2 className=' text-2xl font-semibold'>All Courses</h2>
          <div>
            <input 
            type='search' 
            placeholder='search courses...' 
            className=' px-8 py-2 rounded-md outline-none focus:outline-slate-400 transition-all'
            name='search-courses' 
            list='courselist' 
            onChange={handleSearchvalue} 
            value={searchValue}/>
            <datalist id='courselist'>
              {category.map((elem,index)=>{
                return (
                  <>
                    <option value={elem} key={index}>{elem}</option> 
                  </>
                )
              })}
            </datalist>
          </div>
        </div>
        <div className='flex justify-start flex-wrap gap-5 mt-5'>
          {filteredData.map((elem,index)=>{
            return(
              <>
                <div className=' rounded-md bg-white  tutor-card m-2' style={{width:"250px"}} key={index}>
          <img className=' card-img-top' src='http://www.pixelstalk.net/wp-content/uploads/2016/07/Computer-Science-Pictures-HD.jpg' alt='tutor'/>
          <div className='card-body px-6 py-3'>
            <p className='text-green-400'>{elem.instructorName}</p>
            <h4 className='card-title '>{elem.courseName}</h4>
            <p className=''>&#8377; {elem.price}</p>
          </div>
            <button className='bg-green-600 text-white rounded-0 py-2 w-full' onClick={()=>navigate("description",{state:elem.id})}>view more</button>
        </div>      
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CourseList
