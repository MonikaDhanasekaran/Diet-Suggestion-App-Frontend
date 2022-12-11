import { Grid, Card, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./DietForUricAcidTips.css";

const DietForUricAcidTips = () => {

    const navigate = useNavigate();
    const [uricacidTips, setUricacidTips] = useState([]);

    useEffect(() => {
        async function getUricacidTips() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/");
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/uricacid/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setUricacidTips(response.data);
            }
        }
        getUricacidTips();
    }, [])

    const handleBack = () => {
        navigate("/uricacid");
    }

    return (
        <>
            <div id='uricAcidTipsDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="uricacidTipsTypo">
                                    Uric Acid Tips
                                </Typography>
                                <Button color="inherit" onClick={() => handleBack()} id="buttonAlign"><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridUricAcidTips">
                        <Card id="cardUricAcidTips">
                            {uricacidTips.length && uricacidTips.map((row, index) => (
                                <Grid item key={index}>
                                    <ul id="UlUricAcidTips">
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

export default DietForUricAcidTips;