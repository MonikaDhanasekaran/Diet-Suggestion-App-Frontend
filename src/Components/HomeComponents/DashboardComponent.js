import React from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import "./Home.css";

const DashboardComponent = () => {

    const navigate = useNavigate();

    const data = [
        ["Diet", "Per Day"],
        ["Fruits & Vegetables", 40],
        ["Protein", 25],
        ["Cellulose", 25],
        ["Fat", 10],
    ];

    const options = {
        title: "Balanced Diet",
        titleFontSize: 30,
        height: 500,
        slices: [{ color: "#690636" }, { color: "#993B69" }, { color: "#990C50" }, { color: "#5F3047" }],
        is3D: true,
    };

    const handleWeightGain = () => {
        navigate("/weightgain");
    }

    const handleWeightLoss = () => {
        navigate("/weightLoss");
    }

    const handleBodyBuilding = () => {
        navigate("/bodybuilding");
    }

    const handleMuscleBuilding = () => {
        navigate("/musclebuilding");
    }

    const handlePatients = () => {
        navigate("/dietforpatients");
    }

    const handleLogout = () => {
        navigate("/");
    }

    const handleHome = () => {
        navigate("/home");
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'papyrus',
                                fontSize: "30px",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Diet Categories
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleWeightGain}
                                id="dashboardButton"
                            >
                                Weight Gain
                            </Button>
                            &nbsp;
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleWeightLoss}
                                id="dashboardButton"
                            >
                                Weight Loss
                            </Button>
                            &nbsp;
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleBodyBuilding}
                                id="dashboardButton"
                            >
                                Body Building(Gym)
                            </Button>
                            &nbsp;
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleMuscleBuilding}
                                id="dashboardButton"
                            >
                                Muscle Building
                            </Button>
                            &nbsp;
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handlePatients}
                                id="dashboardButton"
                            >
                                Diet for Patients
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="inherit" onClick={handleHome} id="dashboardAlignButton"> <HomeIcon sx={{ fontSize: "25px" }}/> Home</Button>
                            <Button variant="inherit" onClick={handleLogout} id="dashboardAlignButton"> <LogoutIcon /> Logout</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className="dietImg">
            </div>
            <div id="GridDashboard">
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
    );
}

export default DashboardComponent;