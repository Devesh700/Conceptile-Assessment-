import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserDetails } from '../Store/userSlice';
import { user } from "../Pages/Courses/CourseData";

const EducationForm=({education={},hooks})=>{
    const [formField,setformField]=useState({
    degree:"",
    institution:"",
    year:"",
    performance:""
  })
  const [educationHistory,seteducationHistory]=useState(user?.educationHistory)
  const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        let {name,value}=e.target;
        setformField(pre=>{return {...pre,[name]:value}});
    }

      const handleUpdate = (e) => {
    e.preventDefault();

    const findEducationIndex = stateData.educationHistory.findIndex(item => item.degree === formField.degree);
    alert("index:", findEducationIndex);

    let updatedEducationHistory = [...stateData.educationHistory];

    if (findEducationIndex !== -1) {
      updatedEducationHistory[findEducationIndex] = formField;
    } else {
      updatedEducationHistory.push(formField);
    }

    const updatedStateData = { ...stateData, educationHistory: updatedEducationHistory };

    console.log(updatedStateData);
    dispatch(updateUserDetails(updatedStateData));
    hooks.setshow(false);
    alert("Successfully updated");
  };

    useEffect(()=>{
        console.log(education);
        if(education)
        setformField(education);
    },[])
     useEffect(()=>{
        dispatch(fetchUsers());
        if(stateData)
        seteducationHistory(stateData.educationHistory)
    },[dispatch])
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-6">
            <button
                    onClick={() =>{hooks.setshow(false); hooks.setactiveEducation({})}}
                    className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out text-4xl float-end"
                  >&times;</button>
            <h2 className="text-2xl font-bold mb-4">Update Education</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="degree">
                        Degree
                    </label>
                    <input
                        type="text"
                        id="degree"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your degree"
                        name='degree'
                        onChange={handleChange}
                        value={formField.degree}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="institution">
                        Institution
                    </label>
                    <input
                        type="text"
                        id="institution"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your institution"
                        name='institution'
                        onChange={handleChange}
                        value={formField.institution}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="year">
                        Year of Graduation
                    </label>
                    <input
                        type="text"
                        id="year"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter year of graduation"
                        name='year'
                        onChange={handleChange}
                        value={formField.year}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="performance">
                        performance
                    </label>
                    <input
                        type="text"
                        id="performance"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter performance"
                        name='performance'
                        onChange={handleChange}
                        value={formField.performance}
                    />
                </div>
                <button type="submit" 
                onClick={handleUpdate}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Update Education
                </button>
            </form>
        </div>
    )
}

export default EducationForm;