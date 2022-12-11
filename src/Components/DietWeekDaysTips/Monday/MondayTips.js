import { Grid, Card, CardMedia, CardContent, Typography, Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Monday.css"

const MondayComponent = () => {

    const navigate = useNavigate();
    const [monday, setMonday] = useState([]);

    useEffect(() => {
        async function getMonday() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/weightGainMonday/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setMonday(response.data);
            }
        }
        getMonday();
    }, []);

    const handleBack = () => {
        navigate("/weightgain");
    }

    return (
        <>
            <div className='mondayDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="monday">
                                    Monday Tips
                                </Typography>
                                <Button color="inherit" id="mondayButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridMonday">
                        {monday.length && monday.map((row, index) => (
                            <Grid item key={index}>
                                <Card id="cardMonday">
                                    <CardMedia
                                        id="cardMedia"
                                        component="img"
                                        height="170"
                                        width= "50%"
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

export default MondayComponent;