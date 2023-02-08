import './App.css'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import data from "./assets/data/FaqData.json"

function Faq() {
  return (
    <Box sx={{ px: "10%" }}>
      <Typography variant='h2' sx={{ textAlign: "left" }}>Faqs</Typography>
      {
        data.map((d, i) => {
          return (
            <Accordion key={i} sx={{ display: "flex", alignItems: "space-between", flexDirection: "column", margin: "5" }}>
              <AccordionSummary>
                <Typography >
                  {d.Question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {d.Answer}
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
