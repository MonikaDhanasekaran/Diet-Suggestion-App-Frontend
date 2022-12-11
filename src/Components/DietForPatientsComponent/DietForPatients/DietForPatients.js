import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./DietForPatients.css";

const DietForPatients = () => {

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
        ["Protein", 25],
        ["Fat", 25],
    ];

    const options = {
        title: "Diet for Patients",
        titleFontSize: 30,
        height: 500,
        is3D: true,
        slices: [{ color: "#090E25" }, { color: "#061E96" }, { color: "#557AEE" }]
    };

    const handleAcidity = () => {
        navigate("/acidity");
    }
    const handleDiabetes = () => {
        navigate("/diabetes");
    }

    const handleUricAcid = () => {
        navigate("/uricacid");
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
                            Diet For Patients
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div>
                                <Button
                                    variant="inherit"
                                    id="dietCategoriesButton"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Diet Categories
                                    <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                                </Button>
                                <Menu
                                    id="patientsCategoriesDropdown"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleAcidity}>Diet For Acidity</MenuItem>
                                    <MenuItem onClick={handleDiabetes}>Diet For Diabetes</MenuItem>
                                    <MenuItem onClick={handleUricAcid}>Diet For Uric Acid</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="inherit" onClick={handleBack} id="dietForPatientsButton"> <ArrowBackIcon /> Back</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div id="dietforpatientsDiv">
            </div>
            <Grid id="GridPatients">
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

export default DietForPatients;