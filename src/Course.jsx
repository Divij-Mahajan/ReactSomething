import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import React from "react"
import data from "./assets/data/CourseData.json"
function Courses() {
    return (
        <List sx={{ px: "10%", width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: "flex", flexDirection: "row", alignItems: "space-between" }}>
            {
                data.map((d, i) => {
                    return (
                        <Paper key={i} >
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={d.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {d.desc}
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


export default Courses