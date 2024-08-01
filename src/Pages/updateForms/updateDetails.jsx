import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserDetails } from '../../Store/userSlice';

const UpdateDetailsForm = () => {
    const [formField,setformField]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        country:"",
        city:"",
        state:"",
        role:"",
        postalCode:"",
    });
    const dispatch=useDispatch();
    const user=useSelector(state=>state?.userDetail?.userDetail)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setformField(pre=>{return {...pre,[name]:value}})
    }

    const handleSave=()=>{
        const updatedUser={...user,personalDetails:formField}
        console.log(updatedUser);
        dispatch(updateUserDetails(updatedUser))
        alert("updated successfully");
    }

    useEffect(()=>{
        dispatch(fetchUsers())
        console.log(user);
        
        if(user){
            console.log(user.personalDetails);
            setformField(user.personalDetails);
        }
    },[])
    useEffect(()=>{
        console.log(user.personalDetails,formField);
    },[formField])
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-6">
            <h2 className="text-2xl font-semibold mb-4">Update Details</h2>
            <form>
                <div className="flex justify-between flex-wrap">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="first-name">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your first name"
                        name='firstName'
                        onChange={(e)=>handleChange(e)}
                        value={formField.firstName}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="last-name">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your last name"
                        name='lastName'
                        onChange={(e)=>handleChange(e)}
                        value={formField.lastName}
                    />
                </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your email address"
                        name='email'
                        onChange={(e)=>handleChange(e)}
                        value={formField.email}
                    />
                </div>
                <div className="flex justify-between flex-wrap">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your phone number"
                        name='phone'
                        onChange={(e)=>handleChange(e)}
                        value={formField.phone}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="role">
                        role
                    </label>
                    <input
                        type="tel"
                        id="role"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your role "
                        name='role'
                        onChange={(e)=>handleChange(e)}
                        value={formField.role}
                    />
                </div>
                </div>
                <div className="flex justify-between flex-wrap">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="city">
                        city
                    </label>
                    <input
                        type="tel"
                        id="city"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your city "
                        name='city'
                        onChange={(e)=>handleChange(e)}
                        value={formField.city}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="state">
                        state
                    </label>
                    <input
                        type="tel"
                        id="state"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your state"
                        name='state'
                        onChange={(e)=>handleChange(e)}
                        value={formField.state}
                    />
                </div>
                </div>

                <div className="flex justify-between flex-wrap">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="country">
                        country
                    </label>
                    <input
                        type="tel"
                        id="country"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your country"
                        name='country'
                        onChange={(e)=>handleChange(e)}
                        value={formField.country}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="postalCode">
                        postalCode
                    </label>
                    <input
                        type="tel"
                        id="postalCode"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your postalCode"
                        name='postalCode'
                        onChange={(e)=>handleChange(e)}
                        value={formField.postalCode}
                    />
                </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                onClick={handleSave}>
                    Update Details
                </button>
            </form>
        </div>
    );
};

export default UpdateDetailsForm;
