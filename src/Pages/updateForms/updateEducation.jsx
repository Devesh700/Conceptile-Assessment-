import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserDetails } from '../../Store/userSlice';
import { user } from '../Courses/CourseData';
import { FiEdit3 } from 'react-icons/fi';
import EducationForm from '../../Components/EducationForm';

const UpdateEducationForm = () => {
  const [educationHistory,seteducationHistory]=useState(user?.educationHistory)
  const [activeEducation,setactiveEducation]=useState({});
  const [show,setshow]=useState(false);
  
    const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        let {name,value}=e.target;
        setformField(pre=>{return {...pre,[name]:value}});
    }



    useEffect(()=>{
        dispatch(fetchUsers());
        if(stateData)
        seteducationHistory(stateData.educationHistory)
    },[dispatch])
    return (
        <div className='relative h-dvh'>
        <div className='w-full'>
            <h2 className="text-2xl font-semibold mb-4">Existing Education details</h2>
            <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Institution
                </th>
                <th
                  scope="col"
                  colspan="2"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Degree
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {educationHistory.map((edu, index) => (
                <tr key={index} className='relative'>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                    {edu.institution}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                    {edu.degree}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-base text-gray-500'>
                  <button 
                  onClick={()=>{setactiveEducation(edu); setshow(true)}}
                  className=' px-8 py-2 rounded-md hover:bg-sky-100 hover:text-sky-950 flex items-center'>
                    <FiEdit3/>
                        Edit
                   </button>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <button 
        className='px-8 py-2 rounded-md bg-green-600 text-white my-4 hover:bg-green-100 hover:text-sky-950 flex items-center'
        onClick={()=>setshow(true)}>Add another education Field</button>
        </div>
        {show?
        <div className='absolute left-1/2 top-1/2 min-h-dvh -translate-x-1/2 -translate-y-1/2 w-full'>
        <EducationForm education={activeEducation} hooks={{setshow,setactiveEducation}}/>
        </div>:
        <></>}
        
        </div>
    );
};



export default UpdateEducationForm;
