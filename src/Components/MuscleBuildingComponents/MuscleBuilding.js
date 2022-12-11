import React from "react";
import { Grid, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./MuscleBuilding.css";

const MuscleBuildingComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Carbohydrate", 50],
        ["Protein", 30],
        ["Fat", 20],
    ];

    const options = {
        title: "Muscle Building Diet",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#73276F" }, { color: "#D697D3" }, { color: "#590355" }]
    };

    const handleBack = () => {
        navigate("/dashboard");
    }

    const handleMuscleTips = () => {
        navigate("/muscleTips");
    }

    return (
        <>
            <div id='muscleDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="muscleTypo">
                                    Muscle Building
                                </Typography>
                                <Button color="inherit" id="musclebuildingButton" onClick={() => handleMuscleTips()}><GetAppIcon />Get Tips</Button>
                                <Button color="inherit" id="musclebuildingButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <div id="GridMuscleBuilding">
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"65%"}
                            height={"10px"}
                        />
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default MuscleBuildingComponent;