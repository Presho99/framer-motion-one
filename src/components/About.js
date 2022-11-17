import React from 'react'

function About() {
  return (
    <div className='container text-center'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 3}}
    >
        <h1>About Page</h1>
        <p>THis is my about page</p>
    </div>
  )
}

export default About