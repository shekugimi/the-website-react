import React from 'react'
import { useParams } from 'react-router-dom'

const Register = () => {

    const { courseID } = useParams();

    return (
        <>
            <div className="register max-w-md relative flex flex-col p-4 rounded-md text-black bg-white mt-{150px}">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center ">Register to know more <span className="text-[#7747ff]">App</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Our executive will call you for more details.</div>
                <form className="flex flex-col gap-3">
                    <div className="block relative">
                        <label for="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2 text-left">Full name:</label>
                        <input type="text" id="email" className="rounded border focus:border-2 border-gray-200 border-l-5 focus:border-gray-400 border-l-5 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] bg-white block h-11 m-0 p-[11px] focus:border outline-0" />

                    </div>
                    <div className="block relative">
                        <label for="tel" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2 text-left">Email:</label>
                        <input type="tel" id="email" className="rounded border focus:border-2 border-gray-200 border-l-5 focus:border-gray-400 border-l-5 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] bg-white block h-11 m-0 p-[11px] focus:border outline-0" />

                    </div>
                    <div className="block relative">
                        <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2 text-left">Contact number:</label>
                        <input type="email" id="email" className="rounded border focus:border-2 border-gray-200 border-l-5 focus:border-gray-400 border-l-5 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] bg-white block h-11 m-0 p-[11px] focus:border outline-0" />

                    </div>
                    
                    <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal ">Submit</button>
                    <span>Not submitting ? <span className='text-blue-500 ' >Mail Us</span></span>
                </form>
                {/* <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div> */}
            </div>
        </>
    )
}

export default Register