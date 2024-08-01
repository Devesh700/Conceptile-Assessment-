import React, { useEffect, useState } from 'react';
import  CourseData ,{ user} from '../Pages/Courses/CourseData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserDetails } from '../Store/userSlice';

const AvailableCoursesList = () => {
  const [availableCourses, setAvailableCourses] = useState(CourseData);
  const [userCourses, setUserCourses] = useState(user.coursesEnrolled);

  const handleEnrollCourse = (courseid) => {
    
    const {courseId,courseName,instructorName} = availableCourses.find(course => course.courseId === courseid);
    const courseToEnroll={courseId,courseName,instructorName};
    
    if (courseToEnroll && !userCourses.some(course => course.courseId === courseid)) {
        setUserCourses([...userCourses, { ...courseToEnroll, courseid }])
        dispatch(fetchUsers())
    }
    else{
        alert("seems like you are trying to add course which is already available")
    }
  };

        const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();

    useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

//      useEffect(() => {
//     if (stateData?.coursesEnrolled) {
//       setUserCourses(stateData.coursesEnrolled);
//     }
//   }, [stateData]);

      useEffect(() => {
    if (stateData) {
      const updatedUser = { ...stateData, coursesEnrolled: userCourses };
      dispatch(updateUserDetails(updatedUser));
    }
  }, [userCourses, dispatch]);

    useEffect(()=>{
        let updatedUser={...stateData,coursesEnrolled:userCourses};
        console.log(updatedUser)
        dispatch(updateUserDetails(updatedUser));
    },[userCourses])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-6 ">Available Courses</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Course Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Instructor</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Price</th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {availableCourses.map((course) => (
              <tr key={course.courseId} className=" hover:bg-gray-200 transition duration-300 ease-in-out">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-blue-900 text-base leading-5">{course.courseName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-blue-900 text-base leading-5">{course.instructorName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-blue-900 text-base leading-5">&#8377; {course.price}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-right text-base leading-5">
                  <button
                    onClick={() => handleEnrollCourse(course.courseId)}
                    className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-150 ease-in-out"
                  >
                    Enroll
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

export default AvailableCoursesList;
