"use client";
import React from 'react'
import {useState} from 'react'
export default function Page (props : {})  {
    const [tabstate, settabstate] = useState(true)
    return (
        <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
            <div className='flex flex-col bg-[#f58220] w-[25rem] h-[30rem] rounded-3xl'>
                <div className='flex text-white flex-row w-full h-[16%]'>
                    <div  onClick = {() => settabstate(true)} className={tabstate ? 'flex bg-[#f58220] rounded-tl-3xl text-2xl items-center z-50 justify-center w-1/2 cursor-pointer' :  'flex bg-[#FFC797] rounded-tl-3xl text-2xl items-center justify-center w-1/2 cursor-pointer'}>                     
                        User
                    </div>
                    <div onClick = {() => settabstate(false)}className={tabstate ? 'flex text-2xl bg-[#FFC797] items-center justify-center w-1/2 rounded-tr-3xl cursor-pointer' : 'flex bg-[#f58220] text-2xl items-center z-50 rounded-tr-3xl justify-center w-1/2 cursor-pointer'} >

                        Admin
                    </div>
                </div>
               
                <div className='h-full z-50 bg-[#f58220] rounded-br-3xl rounded-bl-3xl'>
                <hr style={{height:"3px",background:"white"}}></hr>
                </div>
            </div>
                        
        </div>
    )
}
