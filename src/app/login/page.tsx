"use client";
import { Input } from '@/components/ui/input';
import bg from '../../../public/Untitled design.png'
import React from 'react'
import {useState} from 'react'
export default function Page (props : {})  {
    return (
        <div className='bg-back-login h-full'>
            <div className="flex items-center justify-center  h-full w-full bg-backlogin bg-no-repeat bg-cover bg-center">
                <div className='flex bg-white/30 h-[30rem] w-[45rem] rounded-3xl shadow-xl  backdrop-blur-sm px-32'>

                        <form className='flex flex-col w-full justify-center items-center'>
                            <div className='flex flex-col gap-11 w-full mb-10 justify-center items-center'>
                                <Input className='h-16 text-2xl' placeholder='Username'></Input>
                                <Input className='h-16 text-2xl'placeholder='Password' type='password'></Input>
                            </div>
                            <button className='bg-[#f58220] w-40 text-white h-16 rounded-3xl font-bold text-xl'>LOGIN</button> 
                        </form>
    
                </div>
            </div>
        </div>

    )
}
