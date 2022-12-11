import React from "react";
import { Grid, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./DietForUricAcid.css";

const DietForUricAcidComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Complex Carbs", 80],
        ["Protein", 10],
        ["Fat", 10],
    ];

    const options = {
        title: "Diet for Uric Acid",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#371645" }, { color: "#5E0683" }, { color: "#CC84E9" }]
    };

    const handleBack = () => {
        navigate("/dietforpatients");
    }

    const handleTips = () => {
        navigate("/uricacidTips");
    }

    return (
        <>
            <div id="dietforuricacidDiv">
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="uricacidTypo">
                                    Diet For Uric Acid
                                </Typography>
                                <Button color="inherit" id="uricacidButton" onClick={() => handleTips()}><GetAppIcon />Get Tips</Button>
                                <Button color="inherit" id="uricacidButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid id="GridUricAcid">
                        <Chart
                            chartType="PieChart"
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

export default DietForUricAcidComponent;