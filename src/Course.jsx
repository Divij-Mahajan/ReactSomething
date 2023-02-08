import './App.css'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import React from 'react'


function Courses() {
    let data = [
        {
            "username": "Divij",
            "uerid": "id",
            "feedback": "Hell"
        }
    ]

    return (

        <List sx={{ px: "10%", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                data.map((d, i) => {
                    return (
                        <ListItem alignItems="flex-start" key={i}>
                            <Paper>
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
                            </Paper>
                        </ListItem>
                    )
                })
            }

        </List>
    )
}

export default Courses
