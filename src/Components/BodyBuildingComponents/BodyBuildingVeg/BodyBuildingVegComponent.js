import { Grid, Card, CardMedia, CardContent, Typography , Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./BodyBuildingVeg.css"

const BodyBuildingVegComponent = () => {

    const navigate = useNavigate();
    const [veg, setVeg] = useState([]);

    useEffect(() => {
        async function getVeg() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/bodyBuildingVeg/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setVeg(response.data);
            }
        }
        getVeg();
    }, [])

    const handleBack = () => {
        navigate("/bodybuilding");
    }

    return (
        <>
            <div className='vegDiv'>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="vegDiet">
                                    Diet Plan - Veg
                                </Typography>
                                <Button color="inherit" id="vegButton" onClick={() => handleBack()}><ArrowBackIcon />Back</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <br />
                    <Grid container spacing={2} id="GridVeg">
                        {veg.length && veg.map((row, index) => (
                            <Grid item key={index}>
                                <Card id="cardVeg">
                                    <CardMedia
                                        component="img"
                                        id="cardMedia"
                                        height="155"
                                        width="50%"
                                        image={row.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" id="meal">
                                            {row.timing}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" id="timing">
                                            {row.meal}
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

export default BodyBuildingVegComponent;