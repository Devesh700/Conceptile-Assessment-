import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import ProfileHero from '../Components/ProfileHero';
import { user } from './Courses/CourseData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Store/userSlice';

const EducationCard = ({ degree, institution, duration, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-gray-800">{degree}</h3>
      <p className="text-gray-600 italic">{institution}</p>
      <p className="text-gray-500">{duration}</p>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
};

const EducationHistory = () => {
  const [educationHistory,seteducationHistory]=useState(user?.educationHistory)
      const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log("redux data3",stateData);
    },[stateData])

    useEffect(()=>{
        dispatch(fetchUsers());
        if(stateData)
        seteducationHistory(stateData.educationHistory)
    },[dispatch])
  return (
    <>

    <ProfileHero/>

    <div className=" bg-gray-100 flex items-center justify-center py-12 ">
      <div className="max-w-7xl w-full space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Education History
        </h2>
        <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Institution
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Degree
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Year
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Performance
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
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                    {edu.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            {edu.performance}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                        <div
                          style={{ width: `${edu.performance}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default EducationHistory;
