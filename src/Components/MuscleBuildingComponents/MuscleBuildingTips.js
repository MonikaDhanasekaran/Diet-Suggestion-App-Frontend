import { Grid, Card, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./MuscleBuildingTips.css";

const MuscleBuildingTips = () => {

    const navigate = useNavigate();
    const [muscle, setMuscle] = useState([]);

    useEffect(() => {
        async function getMuscle() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/muscleBuilding/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setMuscle(response.data);
            }
        }
        getMuscle();
    }, [])

    const handleBack = () => {
        navigate("/musclebuilding");
    }

    return (
        <>
            <div id='muscleTipsDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="muscleTipsTypo">
                                    Muscle Building Tips
                                </Typography>
                                <Button color="inherit" id="musclebuildingTips" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridMuscleBuildingTips">
                        <Card sx={{ width: "50%", padding: "20px" }}>
                            {muscle.length && muscle.map((row, index) => (
                                <Grid item key={index}>
                                    <ul id="UlMuscleBuildingTips">
                                        <li>{row.meal}</li>
                                    </ul>
                                </Grid>
                            ))}
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MuscleBuildingTips;