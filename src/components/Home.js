import React from 'react'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div 
    className='container text-center bg-black'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 3}}
    >
        <h1>Home Page</h1>
        <p>Once I learn framer motion, my portfolio will be a game changer</p>

    </motion.div>
  )
}

export default Home