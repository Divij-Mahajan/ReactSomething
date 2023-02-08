import { Box, Typography, Button } from "@mui/material";

function Header() {
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: { xs: "center", sm: "space-around" }, background: "grey", alignItems: { xs: "center", sm: "end" } }} >
            <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" }, padding: "10px" }}>
                <Button size="large" variant="contained" color="primary" style={{ margin: "3px" }}>FAQs</Button>
                <Button size="large" variant="contained" color="primary" style={{ margin: "3px" }}>Testimonial</Button>
            </Box>
        </Box>
    )
}

export default Header