import React, { useEffect, useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import CourseData from './CourseData';

const CourseDescription = () => {
  const [key, setKey] = useState("overview");
  const id = useLocation()?.state?useLocation().state:1;
  const data=CourseData[id-1];

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="card mb-5 p-3 bg-blue-600 w-full rounded-0 text-capitalize">
        <div className='md:col-span-6 mx-4'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='me-2'>
                <img src='https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&h=180' alt='instructor' className='custom-circle-2 '/>
              </div>
              <div className=''>
                <p className='text-white text-sm font-light m-0'>instructor</p>
                <p className='text-white text-lg m-0'>{data?.instructor?.name}</p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-auto h-auto rounded-full p-1 overflow-hidden'>
                <CiBookmark style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='py-3'>
                <p className='text-white text-sm font-light m-0'>category</p>
                <p className='text-white text-lg m-0'>{data?.category}</p>
              </div>
            </div>
          </div>
          <h1 className='my-5 text-white text-capitalize border-b border-white pb-4'>computer science and security</h1>
          <div className='flex justify-between text-white my-4'>
            <div>
              <span><span className='font-bold'>Time. </span>{data?.time}</span>
            </div>
            <div>
              <span> <span className='font-bold'>Level. </span>{data?.level}</span>
            </div>
            <div>
              <span><span className='font-bold'>Lessons. </span>{data?.lessons}</span>
            </div>
            <div>
              <span><span className='font-bold'>Quizes. </span>{data?.quizes}</span>
            </div>
            <div>
              <span><span className='font-bold'>Students. </span>{data?.students}</span>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='w-full'>
          <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <h2 className='text-lg font-bold mb-2'>Requirements</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <h2 className='text-lg font-bold mb-2'>Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <h2 className='text-lg font-bold mb-2'>Audience</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime odio cum eveniet esse doloremque, eligendi quidem culpa sed. Repudiandae, deleniti veritatis delectus illum ratione voluptates, harum quam sunt maxime totam inventore? Vitae necessitatibus asperiores, ratione voluptates in voluptate culpa perspiciatis.
            </p>
          </div>
        </div>
        
      </div>
      <div className='w-full  mt-6'>
        <div className='flex flex-col md:flex-row mb-3 bg-blue-600 p-2 text-white rounded-t-lg w-full'>
          <button className={`p-2 ${key === "overview" ? "border-b-4 border-white" : ""}`} onClick={() => setKey("overview")}>Overview</button>
          <button className={`p-2 ${key === "curriculum" ? "border-b-4 border-white" : ""}`} onClick={() => setKey("curriculum")}>Curriculum</button>
          <button className={`p-2 ${key === "instructor" ? "border-b-4 border-white" : ""}`} onClick={() => setKey("instructor")}>Instructor</button>
        </div>
        {key === "overview" && (
          <div className='p-4 bg-white shadow-md rounded-b-lg'>
            {data?.overview}
          </div>
        )}
        {key === "curriculum" && (
          <div className='p-4 bg-white shadow-md rounded-b-lg'>
            {data?.course?.map((course, index) => (
              <div key={index} className='mb-4'>
                <h3 className='font-bold'>{course.category}</h3>
                {course.lectures.map((lecture, i) => (
                  <div key={i} className='flex justify-between hover:text-blue-400 my-2'>
                    <Link to="#">{lecture.name}</Link>
                    <span>{lecture.duration}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {key === "instructor" && (
          <div className='p-4 bg-white shadow-md rounded-b-lg'>
            <p>{data?.instructor?.name}</p>
            <p>{data?.instructor?.experience}</p>
            <p>{data?.instructor?.details}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default CourseDescription;
