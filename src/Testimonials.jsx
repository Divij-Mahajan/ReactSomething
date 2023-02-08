import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"
import data from "./assets/Testimonial.json"
function Testimonial() {
    return (

        <List sx={{ px: "10%", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                data.map((d, i) => {
                    return (
                        <ListItem alignItems="flex-start" key={i}>
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
                    )
                })
            }

        </List>
    )
}


export default Testimonial