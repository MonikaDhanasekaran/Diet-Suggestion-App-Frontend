import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./WeightLossTips.css";

const WeightLossTipsComponent = () => {

    const [tips, setTips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getTips() {
            const decodedToken = jwt.decode(localStorage.getItem("token"));
            if (decodedToken.exp * 1000 < Date.now()) {
                navigate("/")
            } else {
                const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/weightLoss/get", {
                    headers: {
                        accesstoken: localStorage.getItem("token"),
                    },
                });
                setTips(response.data);
            }
        }
        getTips();
    }, []);

    const handleBack = () => {
        navigate("/weightLoss");
    }

    return (
        <>
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
                        <Typography variant="h6" component="div" id="weightlosstipsTypo" sx={{ flexGrow: 1 }}>
                            Weight Loss Tips
                        </Typography>
                        <Button color="inherit" onClick={handleBack} id="weightlossTipsButton"><ArrowBackIcon />Back</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="weightLossTipsDiv">
                <table className="table table-bordered" id="align-table">
                    <thead id="headStyle">
                        <tr id="tableRow">
                            <th>Timing</th>
                            <th>Meal and Workout</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tips.length && tips.map((row, index) => (
                            <tr key={index} id="tableBody">
                                <td>{row.timing}</td>
                                <td>{row.meal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WeightLossTipsComponent;