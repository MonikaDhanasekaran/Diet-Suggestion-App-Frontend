import React from "react";
import { Grid, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./DietForDiabetes.css";

const DietForDiabetesComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Fibrous Vegetable", 50],
        ["Protein", 25],
        ["Carbohydrates", 25],
    ];

    const options = {
        title: "Diet for Diabetes",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#313331" }, { color: "#6A604B" }, { color: "#000000" }]
    };

    const handleBack = () => {
        navigate("/dietforpatients");
    }

    const handleTips = () => {
        navigate("/diabetesTips");
    }

    return (
        <>
            <div id="dietforDiabetesDiv">
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="diabetesTypo">
                                    Diet For Diabetes
                                </Typography>
                                <Button color="inherit" id="diabetesButton" onClick={() => handleTips()}><GetAppIcon />Get Tips</Button>
                                <Button color="inherit" id="diabetesButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid id="GridDiabetes">
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

export default DietForDiabetesComponent;