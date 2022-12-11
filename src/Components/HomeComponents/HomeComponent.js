import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from "jsonwebtoken";
import { useNavigate, Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import GetAppIcon from '@mui/icons-material/GetApp';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Home.css";

const HomeComponent = () => {

    const navigate = useNavigate();
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        getCreatedData();
    }, []);

    const getCreatedData = async () => {
        const decodedToken = jwt.decode(localStorage.getItem("token"));
        if (decodedToken.exp * 1000 < Date.now()) {
            navigate("/")
        } else {
            const response = await axios.get("https://diet-suggestion-app.onrender.com/diet/data/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setGetData(response.data);
        }
    }

    const handleDelete = async (userID) => {
        try {
            const response = await axios.delete(`https://diet-suggestion-app.onrender.com/diet/data/delete/${userID}`, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            if (response) {
                getCreatedData();
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const handleLogout = () => {
        navigate("/");
    }

    const handleCreateTips = () => {
        navigate("/homePage");
    }

    const handleTips = () => {
        navigate("/dashboard");
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
                        <Typography variant="h6" component="div" id="dietHomeButton" sx={{ flexGrow: 1 }}>
                            Diet Suggestion App
                        </Typography>
                        <Button color="inherit" onClick={handleCreateTips} id="homeButton"><CreateIcon />CreateTips</Button>
                        <Button color="inherit" onClick={handleTips} id="homeButton"><GetAppIcon />GetTips</Button>
                        <Button color="inherit" onClick={handleLogout} id="homeButton"><LogoutIcon />Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="home">
                <table className="table table-dark table-striped" id="homeTable">
                    <thead id="headStyle">
                        <tr id="tableRow">
                            <th>Meal</th>
                            <th>Timing</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.length && getData.map((row, index) => (
                            <tr key={index} id="tableBody">
                                <td>{row.meal}</td>
                                <td>{row.timing}</td>
                                <td>
                                    <Link className="btn btn-link" to={`/update/${row._id}`}><ModeIcon />Edit</Link> &nbsp;
                                    <button className="btn btn-link" onClick={() => handleDelete(row._id)}><DeleteIcon />Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomeComponent;