import { useState } from 'react'
import './App.css'
import ProfileCard from './Assignments/Assignment1/ProfileCard'
import BackgroundChanger from './Assignments/Assignment2/BackgroundChanger'
import { ParaGenerator } from './Assignments/Assignment4/ParaGenerator'


function App() {

  return (
    <div>
     { /*<ProfileCard 
     background={"https://files.123freevectors.com/wp-content/solidbackground/aftercare-free-solidcolor-background.jpg"}
     profile={"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=sph"}
     name={"Rita Correia"}
     age={"32"}
     city={"London"}
     followers={"80K"}
     likes={"801K"}
     photos={"1.4K"}
  /> */ }
 {/*<BackgroundChanger /> */}
 <ParaGenerator />
  
    </div>
  )
}

export default App
