import React from 'react'
import './Main.css'
import { assets } from '../../../public/gemini-clone-assets/assets/assets'
function Main() {
  return (
    <>
    <div className='main '>
  <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon}/>
  </div>
  <div className='main-container'>
    <div className='greet'><p><span>Hello, Shagufta</span></p><p>How can I help you today?</p></div>
    <div className='cards'>
        <div className='card'>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon}/>
        </div>
  
 
        <div className='card'>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon_icon}/>
    </div>
 
        <div className='card'>
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon}/>
 
    </div>

        <div className='card'>
            <p>Improve the readability of the following code. </p>
            <img src={assets.code_icon}/>
     
    </div></div>
  </div>
    </div></>
  )
}

export default Main

