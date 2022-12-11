import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./WeightLoss.css";
import GetApp from "@mui/icons-material/GetApp";

const WeightLossComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Carbohydrate", 80],
        ["Protein", 20],
        ["Fat", 80],
    ];

    const options = {
        title: "Weight Loss Diet",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#A6ACAF" }, { color: "#797D7F" }, { color: "#626567" }]
    };

    const handleBack = () => {
        navigate("/dashboard");
    }

    const handleGetTips = () => {
        navigate("/tips");
    }

    return (
        <>
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
                        <Typography variant="h6" component="div" id="weightLossTypo" sx={{ flexGrow: 1 }}>
                            Weight Loss
                        </Typography>
                        <Button color="inherit" onClick={handleGetTips} id="weightlossButton"><GetApp />Get Tips</Button>
                        <Button color="inherit" onClick={handleBack} id="weightlossButton"><ArrowBackIcon />Back</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="weightLossDiv">
            </div>
            <div id="GridWeightLoss">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"65%"}
                    height={"10px"}
                    alignItems={"center"}
                />
            </div>
        </>
    )
}

export default WeightLossComponent;