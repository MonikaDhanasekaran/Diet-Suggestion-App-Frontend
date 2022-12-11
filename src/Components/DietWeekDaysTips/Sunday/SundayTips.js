import { Grid, Card, CardMedia, CardContent, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Sunday.css";

const SundayComponent = () => {

    const navigate = useNavigate();
    const [sunday, setSunday] = useState([]);

    useEffect(() => {
        async function getSunday() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/weightGainSunday/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setSunday(response.data);
            }
        }
        getSunday();
    }, [])

    const handleBack = () => {
        navigate("/weightgain");
    }

    return (
        <>
            <div className='sundayDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="sunday">
                                    Sunday Tips
                                </Typography>
                                <Button color="inherit" id="sundayButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridSunday">
                        {sunday.length && sunday.map((row, index) => (
                            <Grid item key={index}>
                                <Card id="cardSunday">
                                    <CardMedia
                                        component="img"
                                        id="cardMedia"
                                        height="170"
                                        width="50%"
                                        image={row.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" id="meal">
                                            {row.meal}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" id="timing">
                                            Timing : {row.timing}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SundayComponent;