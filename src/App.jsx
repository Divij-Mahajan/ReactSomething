import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Faq from './Faq'
import { Box } from '@mui/material'
import Testimonial from './Testimonials'
import Courses from './Course'

function App() {


  return (
    <Box sx={{ position: "absolute", left: "0", width: "100%" }}>
      <Courses />
      <Faq />
      <Testimonial />
    </Box>
  )
}

export default App
