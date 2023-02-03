import React, { useState } from "react";
import axios from 'axios';
import { validateEmail } from "../Validations/helpers";
import { useNavigate, Link } from 'react-router-dom';
import { Card, Typography, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./Auth.css";

const RegisterComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        role: "",
    });

    const handleSubmit = async (e) => {
        if (validateEmail(formData.email || "")) {
            alert("Email is invalid");
        } else if (
            !formData.password ||
            !formData.confirmPassword ||
            String(formData.password).trim().toLocaleLowerCase() !== String(formData.confirmPassword).trim().toLocaleLowerCase()
        ) {
            alert("Passwords doesn't match");
        } else {
            e.preventDefault();
            const response = await axios.post("https://diet-suggestion-app.onrender.com/diet/signup", {
                ...formData,
            });
            console.log(response);
            navigate("/");
        }
    }

    return (
        <div id="registerPage">
            <Card id="cardRegister">
                <div className="row">
                    <div className="col-xl-6 d-none d-xl-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            alt="Sample photo" className="img-fluid"
                            style={{ height: "100%", borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                    </div>
                    <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                            <Typography id="registerTypo" component="h1" variant="h4"> Sign up </Typography>
                            <br />
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1m">Name</label>
                                        <input type="text" id="form3Example1m" className="form-control form-control-lg"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1n">Username</label>
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg"
                                            value={formData.userName}
                                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1m1">Email</label>
                                        <input type="text" id="form3Example1m1" className="form-control form-control-lg"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1n1">Password</label>
                                        <input type="password" id="form3Example1n1" className="form-control form-control-lg"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1n1">Confirm Password</label>
                                        <input type="password" id="form3Example1n1" className="form-control form-control-lg"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <Grid item xs={12} sm={6}>
                                            <FormControl variant="filled" style={{ width: "90%", marginTop: "22px" }}>
                                                <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                >
                                                    <MenuItem value="admin">Admin</MenuItem>
                                                    <MenuItem value="user">User</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="form3Example1n1">Mobile Number</label>
                                        <input type="number" id="form3Example1n1" className="form-control form-control-lg"
                                            value={formData.mobileNumber}
                                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained" id="registerButton" type="submit" onClick={handleSubmit}> Register </Button> <br /><br />
                            Already have an account? <Link to="/">Sign in</Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RegisterComponent;
