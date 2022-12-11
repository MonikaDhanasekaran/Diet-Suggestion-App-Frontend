import React from "react";
import { Grid, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./DietForAcidity.css";

const DietForAcidityComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Total Fat", 15 - 20],
        ["Calcium", 600],
        ["Sodium", 1200],
        ["Carbohydrate", 260],
        ["Protein", 40],
        ["Iron", 17],
    ];

    const options = {
        title: "Diet for Acidity",
        titleFontSize: 30,
        height: 500,
        is3D: true
    };

    const handleBack = () => {
        navigate("/dietforpatients");
    }

    const handleTips = () => {
        navigate("/acidityTips");
    }

    return (
        <>
            <div id="dietforacidityDiv">
                <Grid>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="acidityTypo">
                                    Diet For Acidity
                                </Typography>
                                <Button color="inherit" id="acidityButton" onClick={() => handleTips()}><GetAppIcon />Get Tips</Button>
                                <Button color="inherit" id="acidityButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid id="GridAcidity">
                        <Chart
                            chartType="BarChart"
                            data={data}
                            options={options}
                            width={"65%"}
                            height={"10px"}
                            alignItems={"center"}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default DietForAcidityComponent;