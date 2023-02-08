import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import React from "react"
import data from "./assets/data/TestimonialData.json"
function Testimonial() {
    return (

        <List sx={{ px: "10%", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                data.map((d, i) => {
                    return (
                        <Paper key={i}>

                            <ListItem alignItems="flex-start" >
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={d.username}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {d.feedback}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                        </Paper>
                    )
                })
            }

        </List>
    )
}


export default Testimonial