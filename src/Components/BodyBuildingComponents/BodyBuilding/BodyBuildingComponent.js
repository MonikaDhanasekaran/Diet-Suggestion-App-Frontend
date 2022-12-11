import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Container, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./BodyBuilding.css";

const BodyBuildingComponent = () => {

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
        ["Healthy Carbs", 25],
        ["Protein", 25],
        ["Veggies", 50],
    ];

    const options = {
        title: "Body Building Diet",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#805114" }, { color: "#C6B471" }, { color: "#4F2D02" }]
    };

    const handleVeg = () => {
        navigate("/veg");
    }

    const handleNonVeg = () => {
        navigate("/nonVeg");
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
                            Body Building
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div>
                                <Button
                                    variant="inherit"
                                    id="categoriesButton"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Categories
                                    <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                                </Button>
                                <Menu
                                    id="categoriesDropdown"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleVeg}>Veg</MenuItem>
                                    <MenuItem onClick={handleNonVeg}>Non-Veg</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="inherit" onClick={handleBack} id="bodybuildingButton"> <ArrowBackIcon /> Back</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div id="bodyBuildingDiv">
            </div>
            <Grid id="GridBodyBuilding">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"65%"}
                    height={"10px"}
                    alignItems={"center"}
                />
            </Grid>
        </>
    )
}

export default BodyBuildingComponent;