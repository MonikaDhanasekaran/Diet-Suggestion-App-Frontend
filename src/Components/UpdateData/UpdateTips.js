import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, TextField, Typography, Grid, Button, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./UpdateTips.css";

const UpdateData = () => {

    const navigate = useNavigate();
    const params = useParams();
    const dataID = params.dataID.toString();
    const [updateData, setUpdateData] = useState({
        meal: "",
        timing: "",
    });

    useEffect(() => {
        axios.get(`https://diet-suggestion-app.onrender.com/diet/getone/${dataID}`, {
            headers: {
                accesstoken: localStorage.getItem("token"),
            },
        }).then((response) => {
            setUpdateData(response.data);
        }).catch(error => {
            console.log("Error:", error);
        })
    }, [dataID]);

    const handleInput = (value) => {
        return setUpdateData(data => {
            return {
                ...data, ...value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://diet-suggestion-app.onrender.com/diet/data/update/${dataID}`, updateData, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            if (response) {
                setUpdateData({
                    meal: "",
                    timing: "",
                });
                navigate("/home");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const handleBack = () => {
        navigate("/home");
    }

    return (
        <>
            <div id="UpdatePage">
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
                            <Typography variant="h6" component="div" id="updateTipsTypo" sx={{ flexGrow: 1 }}>
                                Update Data
                            </Typography>
                            <Button color="inherit" id="updateTipsButton" onClick={handleBack}><ArrowBackIcon />Back</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid container>
                    <Card id="cardUpdate">
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Typography id="updateTypo" variant="h4" component="div"> Update Data </Typography> <br />
                                <div>
                                    < TextField id="updateMealTextField" type="text" name="email" label="Meal"
                                        value={updateData.meal}
                                        onChange={(e) => handleInput({ meal: e.target.value })}
                                    />
                                </div>
                                <br />
                                <div>
                                    < TextField id="updateTimingTextField" type="text" name="time" label="Timing"
                                        value={updateData.timing}
                                        onChange={(e) => handleInput({ timing: e.target.value })}
                                    />
                                </div>
                                <br />
                                <Button variant="contained" id="updateButton" type="submit"> Update </Button> <br /> <br />
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </>
    )
}

export default UpdateData;