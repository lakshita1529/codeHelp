import React from 'react'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <>
        <div className='bg-blue-950 text-white flex flex-col items-center justify-center pt-[4rem]'>

            <div className='text-center mx-5 lg:mx-0 md:text-left border-b font-semibold flex flex-col md:flex-row sm:justify-center pb-7 gap-y-7 lg:w-[80%]'>

                <div className=' md:border-r flex items-center justify-center flex-col md:flex-row md:gap-x-8 lg:gap-x-[7rem] gap-y-6'>
                    
                    <div className='space-y-2 md:space-y-7 max-w-[20rem]'>
                        <motion.div 
                            initial={{y: 50, opacity: 0, scale: 0}}
                            whileInView={{y: 0, opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            className='space-y-1 flex flex-col items-center md:block'>

                            <p className='text-xl font-bold font-montserrat text-violet-300'>CODE HELP</p>
                        </motion.div>

                        <div className='md:space-y-1 flex flex-row gap-x-[.3rem] md:gap-x-0 md:flex-col justify-center font-oxanium'>
                            <p>The Ultimate Guide To Ace SDE Interview</p>
                   
                        </div>
                    </div>

                    <div className=' sm:flex sm:flex-row sm:gap-x-[8rem] md:gap-x-[6rem] space-y-[1rem] sm:space-y-0'>
                        <div className='space-y- font-oxanium sm:text-left'>
                            <p className='font-bold md:mb-6 text-[1.3rem] text-violet-400 '>MENU</p>
                            <p className='mt-2'>About Us</p>
                            <p>Courses</p>
                            <p>Labs</p>
                            <p>Contact</p>
                        </div>

                        <div className='md:mr-2 lg:mr-8 font-oxanium sm:text-right md:text-left'>
                            <p className='font-bold md:mb-6 text-[1.3rem] text-violet-300 '>SERVICES</p>
                            <p className='mt-2'>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Refund & Cancellation Policy</p>
                        </div>
                    </div>
                    
                </div>

                <div className='space-y-2 md:space-y-7 md:ml-3 lg:ml-14 font-oxanium flex flex-col pt-[.8rem]'>
                    <p className='font-bold text-[1.3rem] text-violet-300 '>GET IN TOUCH</p>
                    <p className='tracking-widest'>Email: lakshita2003bly@gmail.com </p>
                </div>
                
            </div>

            <motion.div
                initial={{opacity: 0, y: -55}}
                whileInView={{opacity: 1, y: 0}} 
                className='font-semibold  mt-5 mb-8 mx-5 text-center'>
                Copyright © 2024 Sorting Code Help Technologies Pvt Ltd. All Rights Reserved.
            </motion.div>
        </div>
    </>
  )
}

export default Footer