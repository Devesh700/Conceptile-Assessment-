import React, { useEffect, useState } from 'react';
import { user } from '../Courses/CourseData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserDetails } from '../../Store/userSlice';

const UpdateCoursesForm = () => {
  const [userCourses, setUserCourses] = useState(user.coursesEnrolled);

  const handleRemoveCourse = (courseId) => {
    const updatedUserCourses = userCourses.filter(course => course.courseId !== courseId);
    setUserCourses(updatedUserCourses);
  };

      const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log("redux data3",stateData);
    },[stateData])

    useEffect(()=>{
        dispatch(fetchUsers());
        setUserCourses(stateData.coursesEnrolled)
        
    },[dispatch,updateUserDetails])

    useEffect(()=>{
        const updatedUser={...stateData,coursesEnrolled:userCourses}
    console.log(updatedUser);
    dispatch(updateUserDetails(updatedUser));
    },[userCourses])

  return (
    <div className="min-h-screen bg-gray-100 lg:p-8 sm:p-4 p-2">
      <h2 className="text-2xl font-semibold mb-6">Enrolled Courses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2  text-left leading-4 text-blue-500 tracking-wider">Course Name</th>
              <th className="px-6 py-3 border-b-2  text-left leading-4 text-blue-500 tracking-wider">Instructor</th>
              <th className="px-6 py-3 border-b-2 "></th>
            </tr>
          </thead>
          <tbody>
            {userCourses.map((course) => (
              <tr key={course.courseId} className=" hover:bg-gray-200 transition duration-300 ease-in-out">
                <td className="px-6 py-4 whitespace-no-wrap border-b  text-blue-900 text-base leading-5">{course.courseName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b  text-blue-900 text-base leading-5">{course.instructorName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b  text-right text-base leading-5">
                  <button
                    onClick={() => handleRemoveCourse(course.courseId)}
                    className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out text-xl"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateCoursesForm;
