import './App.css'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import faqs from "./assets/Faqs.json"


function Faq() {
  console.log(faqs)
  return (
    <Box sx={{ px: "10%" }}>
      <Typography variant='h2' sx={{ textAlign: "left" }}>Faqs</Typography>
      {
        faqs.data.map((d, i) => {
          return (
            <Accordion key={i} sx={{ display: "flex", alignItems: "space-between" }}>
              <AccordionSummary>
                <Typography >
                  {d.Question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {d.Description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </Box >
  )
}

export default Faq
