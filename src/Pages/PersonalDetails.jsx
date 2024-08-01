import React, { useEffect, useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import ProfileHero from '../Components/ProfileHero'
import { user } from './Courses/CourseData'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Store/userSlice'
const PersonalDetails = () => {
    const [userData,setuser]=useState(user.personalDetails);
    const reduxData=useSelector(state=>state?.users?.userDetail)
    const reduxData2=useSelector(state=>state)
    const stateData=useSelector(state=>state?.userDetail?.userDetail)
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log()
        console.log("redux data",reduxData);
        console.log("redux data2",reduxData2);
        console.log("redux data3",stateData);
    },[stateData])

    useEffect(()=>{
        dispatch(fetchUsers());
        setuser(stateData.personalDetails)
    },[dispatch])

  return (
    
    <>
    {/* PERSONAL DETAILS */}
    <ProfileHero/>
    <div className=' w-full shadow-md rounded-lg p-6  bg-white my-6 relative'>
                
                <h2 className=" font-semibold capitalize my-2 text-2xl">Personal information</h2>

                <div className='flex justify-between sm:flex-row flex-col my-2 capitalize font-light text-base text-justify'>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>First Name</p>
                        <p>{userData.firstName}</p>
                    </div>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Last Name</p>
                        <p>{userData.lastName}</p>
                    </div>
                </div>
                <div className='flex justify-between sm:flex-row flex-col my-2 capitalize font-light text-base text-justify'>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Email Address</p>
                        <p>{userData.email}</p>
                    </div>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Phone</p>
                        <p>{userData.phone}</p>
                    </div>
                </div>


                <div className='my-4 capitalize font-light text-base'>
                    <p>Bio</p>
                    <p>{userData.role}</p>
                </div>
            </div>

            {/* ADDRESS */}

            <div className=' w-full shadow-md rounded-lg p-6  bg-white my-6 relative'>
                
                <h2 className=" font-semibold capitalize my-2 text-2xl">Address</h2>
                <div className='flex justify-between sm:flex-row flex-col my-2 capitalize font-light text-base text-justify'>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Country</p>
                        <p>{userData.country}</p>
                    </div>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>City/state</p>
                        <p>{userData.city}, {userData.state}</p>
                    </div>
                </div>
                <div className='flex justify-between sm:flex-row flex-col my-2 capitalize font-light text-base text-justify'>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Postal Code</p>
                        <p>{userData.postalCode}</p>
                    </div>
                    <div className='flex flex-col my-2 w-1/2'>
                        <p>Tax ID</p>
                        <p>ABCDEFGHJK</p>
                    </div>
                </div>
            </div>

    </>
  )
}

export default PersonalDetails
