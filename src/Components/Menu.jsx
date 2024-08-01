import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <ul 
    className='bg-white flex flex-col align-baseline gap-4 w-full rounded-lg py-4 lg:my-2 my-0 min-h-dvh'>
        <NavLink to={"/"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Personal Details</li>
          </NavLink>
        <NavLink to={"/education"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Education History</li>
          </NavLink>
        <NavLink to={"/courses"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Enrolled Course</li>
          </NavLink>
        <NavLink to={"/updatedetails"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Update Details</li>
          </NavLink>
        <NavLink to={"/updateeducation"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Update Education History</li>
          </NavLink>
        <NavLink to={"/updatecourses"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          Update Enrolled Courses</li>
          </NavLink>
        <NavLink to={"/viewallcourses"}><li 
        className='px-3 py-2 rounded-md active:bg-blue-200 active:text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>
          view and add courses</li>
          </NavLink>
      
    </ul>
  )
}

export default Menu;
