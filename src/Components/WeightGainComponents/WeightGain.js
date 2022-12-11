import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Container, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./WeightGain.css";

const WeightGainComponent = () => {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const data = [
        ["Diet", "Per Day"],
        ["Carbohydrate", 50],
        ["Protein", 30],
        ["Fat", 20],
    ];

    const options = {
        title: "Weight Gain Diet",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#959523" }, { color: "#F9F908" }, { color: "#4D4D01" }]
    };

    const handleMonday = () => {
        navigate("/monday");
    }

    const handleTuesday = () => {
        navigate("/tuesday");
    }

    const handleWednesday = () => {
        navigate("/wednesday");
    }

    const handleThursday = () => {
        navigate("/thursday");
    }

    const handleFriday = () => {
        navigate("/friday");
    }

    const handleSaturday = () => {
        navigate("/saturday");
    }

    const handleSunday = () => {
        navigate("/sunday");
    }

    const handleBack = () => {
        navigate("/dashboard");
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'papyrus',
                                fontSize: "30px",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Weight Gain
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div>
                                <Button
                                    variant="inherit"
                                    id="weekdayTipsButton"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Weekday Tips
                                    <ArrowDropDownIcon sx={{ fontSize: "30px" }}/>
                                </Button>
                                <Menu
                                    id="weightgainDropdown"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleMonday}>Monday</MenuItem>
                                    <MenuItem onClick={handleTuesday}>Tuesday</MenuItem>
                                    <MenuItem onClick={handleWednesday}>Wednesday</MenuItem>
                                    <MenuItem onClick={handleThursday}>Thursday</MenuItem>
                                    <MenuItem onClick={handleFriday}>Friday</MenuItem>
                                    <MenuItem onClick={handleSaturday}>Saturday</MenuItem>
                                    <MenuItem onClick={handleSunday}>Sunday</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="inherit" onClick={handleBack} id="weightgainButton"> <ArrowBackIcon /> Back</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div id="weightGainDiv">
            </div>
            <div id="GridWeightGain">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"65%"}
                    height={"10px"}
                    alignItems={"center"}
                />
            </div>
        </>
    )
}

export default WeightGainComponent;