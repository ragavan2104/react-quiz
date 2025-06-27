import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
const [user ,setUser] = useState("")
const [score,setScore] =useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/home" element={<Home user={user} setUser={setUser} />} />
          <Route path="/quiz" element={<Quiz score={score} setScore={setScore} />} />
          <Route path="/result" element={<Result score={score} user={user} />} />
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
