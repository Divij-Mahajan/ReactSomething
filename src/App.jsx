import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Faq from './Faq'
import { Box, Card } from '@mui/material'
import Testimonial from './Testimonials'
import Courses from './Course'
import Header from './Header'

function App() {


  return (
    <Box>

      <Box sx={{ position: "absolute", left: "0", width: "100%" }}>
        <Courses />
        <Faq />
        <Testimonial />
      </Box>
    </Box>
  )
}

export default App
