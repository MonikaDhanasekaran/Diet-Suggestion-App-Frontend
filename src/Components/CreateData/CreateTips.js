import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, TextField, Typography, Grid, Button, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./CreateTips.css";

const CreateTips = () => {

    const navigate = useNavigate();
    const [addData, setAddData] = useState({
        meal: "",
        timing: "",
    });

    const handleInput = (value) => {
        return setAddData(data => {
            return { ...data, ...value }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const decodedToken = jwt.decode(localStorage.getItem("token"));
        if (decodedToken.exp * 1000 < Date.now()) {
            navigate("/")
        } else {
            const response = await axios.post("https://diet-suggestion-app.onrender.com/diet/data/create", addData, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            if (response) {
                setAddData({
                    meal: "",
                    timing: "",
                });
                navigate("/home");
            }
            setAddData(response.data);
        }
    }

    const handleBack = () => {
        navigate("/home");
    }

    return (
        <>
            <div id="CreatePage">
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
                            <Typography variant="h6" component="div" id="createTipsTypo" sx={{ flexGrow: 1 }}>
                                Add Data
                            </Typography>
                            <Button color="inherit" id="createTipsButton" onClick={handleBack}><ArrowBackIcon />Back</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid container>
                    <Card id="cardCreate">
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Typography id="cardTypo" variant="h4" component="div"> Add Data </Typography> <br />
                                <div>
                                    < TextField id="createMealTextField" type="text" name="email" label="Meal"
                                        value={addData.meal}
                                        onChange={(e) => handleInput({ meal: e.target.value })}
                                    />
                                </div>
                                <br />
                                <div>
                                    < TextField id="createTimingTextField" type="text" name="time" label="Timing"
                                        value={addData.timing}
                                        onChange={(e) => handleInput({ timing: e.target.value })}
                                    />
                                </div>
                                <br />
                                <Button variant="contained" id="createButton" type="submit" onClick={handleSubmit}> Add </Button> <br /><br />
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </>
    )
}

export default CreateTips;