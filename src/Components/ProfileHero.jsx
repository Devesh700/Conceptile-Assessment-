import React from 'react'
import { FiEdit3 } from "react-icons/fi";
const ProfileHero = () => {
    return (
        <>

            {/* PROFILEHERO */}

            <div className=' w-full shadow-md rounded-lg md:p-6 sm:p-4 p-2  my-2  relative bg-white'>
                <div className="flex w-fit gap-8 items-center justify-start">
                    <div className=' custom-circle overflow-hidden'>
                        <img src='https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180'
                            alt='' className='w-full h-full' />
                    </div>
                    <div className='p-4'>
                        <h2 className=" font-semibold capitalize my-2 text-2xl">jack adams</h2>
                        <p className='font-light text-base my-2 capitalize'>product designer</p>
                        <p className='font-light text-base my-2 capitalize'>los angeles, california USA</p>
                    </div>
                </div>

            </div>

            {/* PERSONAL INFORMATION */}

            
        </>
    )
}
export default ProfileHero
