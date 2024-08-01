import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import AllAvailableCourses from "./Pages/ViewAllCoures"
import CourseList from './Pages/Courses/CourseList'
import EducationHistory from './Pages/EducationHistory'
import CourseDescription from './Pages/Courses/CourseDescription'
import UpdateDetailsForm from './Pages/updateForms/updateDetails'
import UpdateEducationForm from './Pages/updateForms/updateEducation'
import UpdateCoursesForm from './Pages/updateForms/updateCourses'
import PersonalDetails from './Pages/PersonalDetails'
import Navbar from './Components/Navbar'
import ReminderModal from './Components/Remainder'

const App = () => {
  const [show, setShow] = useState(false);
  const [showReminder,setshowReminder]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setshowReminder(true);
    },1000)
  },[])
  return (
    <>
      <Navbar />
      <div className='lg:py-2 bg-zinc-100 h-max'>
        <ReminderModal show={showReminder} onClose={setshowReminder}/>
        <div className={`${show ? 'translate-x-0' : '-translate-x-full'} custom-w-300px lg:translate-x-0 top-20 fixed transition-transform z-30 min-h-dvh`}>
          <div 
            onClick={() => setShow(!show)}
            className='absolute -right-12 -top-6 w-8 bg-light-purple rounded-md p-2 h-8 cursor-pointer flex flex-col justify-between lg:hidden '>
            {!show ? (
              <>
                <span className='w-full h-0.5 bg-white'></span>
                <span className='w-full h-0.5 bg-white'></span>
                <span className='w-full h-0.5 bg-white'></span>
              </>
            ) : (
              <>
                <span className='w-full h-0.5 bg-white transform rotate-45 absolute top-1/2 left-0'></span>
                <span className='w-full h-0.5 bg-white transform -rotate-45 absolute top-1/2 left-0'></span>
              </>
            )}
          </div>
          <Menu />
        </div>


        {/* Routes can be in seperate file if there are large number of routes */}
        <div className='custom-w-w-300px px-4'>
          <Routes>
            <Route path='/' element={<PersonalDetails />} />
            <Route path='/education' element={<EducationHistory />} />
            <Route path='/courses' element={<CourseList />} />
            <Route path='/courses/description' element={<CourseDescription />} />
            <Route path='/updatedetails' element={<UpdateDetailsForm />} />
            <Route path='/updateeducation' element={<UpdateEducationForm />} />
            <Route path='/updatecourses' element={<UpdateCoursesForm />} />
            <Route path='/viewallcourses' element={<AllAvailableCourses />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
