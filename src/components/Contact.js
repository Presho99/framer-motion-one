import React from 'react'

function Contact() {
  return (
    <div className='container text-center'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 3}}
    >
        <h1>Contact Us</h1>
        <p>This is  my contact page</p>
    </div>
  )
}

export default Contact