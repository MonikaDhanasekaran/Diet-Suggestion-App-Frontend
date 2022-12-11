import { Grid, Card, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./DietForAcidityTips.css";

const DietForAcidityTips = () => {

    const navigate = useNavigate();
    const [acidityTips, setAciditytips] = useState([]);

    useEffect(() => {
        async function getAcidityTips() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/acidity/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setAciditytips(response.data);
            }
        }
        getAcidityTips();
    }, [])

    const handleBack = () => {
        navigate("/acidity");
    }

    return (
        <>
            <div id='acidityTipsDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="acidityTipsTypo">
                                    Acidity Tips
                                </Typography>
                                <Button color="inherit" onClick={() => handleBack()} id="buttonAlign"><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid id="GridAcidityTips" container spacing={2}>
                        <Card id="cardAcidityTips">
                            {acidityTips.length && acidityTips.map((row, index) => (
                                <Grid item key={index}>
                                    <ul id="UlAcidityTips">
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

export default DietForAcidityTips;