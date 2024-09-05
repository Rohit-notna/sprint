import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Icon } from '@iconify/react';
export default function Car() {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibl, setIsVisibl] = useState(false);
    const [isVisib, setIsVisib] = useState(false);


    const handleChange = () => {
           if(isVisible){
            setIsVisible(false)
            setIsVisibl(false)
            setIsVisib(false)
           }
           else{
            setIsVisible(true);
            setIsVisibl(false)
            setIsVisib(false)
           }
    }

    const handleChang = () => {
        if(isVisibl){
         setIsVisible(false)
         setIsVisibl(false)
         setIsVisib(false)
        }
        else{
         setIsVisible(false);
         setIsVisibl(true)
         setIsVisib(false)
        }
 }

 const handleChan = () => {
    if(isVisible){
     setIsVisible(false)
     setIsVisibl(false)
     setIsVisib(false)
    }
    else{
     setIsVisible(false);
     setIsVisibl(false)
     setIsVisib(true)
    }
}

    return (
        <div className='bg-gray-600 pb-20 pt-16' >
            <div className='w-7/12 border mx-auto p-4 bg-white py-12 '>
                <div className='w-10/12 p-4 border mx-auto bg-gray-600 py-14'>
                    <div className='w-10/12 border mx-auto bg-white'>

                        <div className='pt-28 pb-5'>
                            
                            <div className='flex mx-auto'> {isVisible && (
                                <motion.div initial={{ x: -20, opaction: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, }} className='flex mx-auto '>
                                     <Icon icon="material-symbols-light:line-end-circle" className='mt-1 mr-2 text-red-600 text-lg' />
                                    <p >-2e883</p>
                                        <button className='bg-black rounded-lg text-red-800 ml-2'>Failed</button>
                                </motion.div>
                            )}</div>


                            <div className='flex mx-auto'> {isVisibl && (
                                <motion.div initial={{ x: -30, opaction: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, }} className='flex mx-auto'>
 <Icon icon="entypo:bar-graph"  className='mt-1 mr-2 text-blue-800 text-xl' />
                                      <p >32 online now</p>
                             <button className='bg-blue-900 rounded-lg text-red-800 ml-2'>Analytics</button>
                                </motion.div>
                            )}</div>
                            <div className='flex mx-auto'> {isVisib && (
                                <motion.div initial={{ x: -50, opaction: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, }} className='flex mx-auto'>
                                     <Icon icon="mdi:dollar" className='mt-1 mr-2 text-green-900  text-xl' />
                                   <p >2 day left in your trail</p>
                                   <button className='bg-black rounded-lg text-red-800 ml-2'>Billing</button>
                                </motion.div>
                            )}</div>

                        </div>
                        <div class="flex justify-between p-4 px-16">
                            {/* <button onClick={() => setIsVisible(!isVisible)}> */}
                            <button onClick={() => handleChange()} >
                              Commit
                            </button>
                            {/* <button onClick={() => setIsVisibl(!isVisibl)}> */}
                            <button onClick={() => handleChang()}>
                                Analytics
                            </button>
                            {/* <button onClick={() => setIsVisib(!isVisib)}> */}
                            <button onClick={() => handleChan()}>
                               Upgrade
                            </button>
                        </div>







                    </div>



                </div>
                <div class="flex justify-between p-4 px-16">
                    <h1>#1xdChallenge</h1>
                    <h1>Day5</h1>
                    <h1>Peerlist</h1>
                </div>
            </div>
        </div>
    )
}
