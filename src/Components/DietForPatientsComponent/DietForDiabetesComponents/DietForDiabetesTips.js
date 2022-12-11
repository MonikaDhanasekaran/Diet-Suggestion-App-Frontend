import { Grid, Card, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./DietForDiabetesTips.css";

const DietForDiabetesTips = () => {

    const navigate = useNavigate();
    const [diabetesTips, setDiabetesTips] = useState([]);

    useEffect(() => {
        async function getDiabetesTips() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/diabetes/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setDiabetesTips(response.data);
            }
        }
        getDiabetesTips();
    }, [])

    const handleBack = () => {
        navigate("/diabetes");
    }

    return (
        <>
            <div id='diabetesTipsDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="diabetesTipsTypo">
                                    Diabetes Tips
                                </Typography>
                                <Button color="inherit" onClick={() => handleBack()} id="buttonAlign"><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridDiabetesTips">
                        <Card id="cardDiabetesTips">
                            {diabetesTips.length && diabetesTips.map((row, index) => (
                                <Grid item key={index}>
                                    <ul id="UlDiabetesTips">
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

export default DietForDiabetesTips;