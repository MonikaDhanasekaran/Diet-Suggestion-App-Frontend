import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/AuthComponents/LoginComponent';
import RegisterComponent from './Components/AuthComponents/RegisterComponent';
import ForgotPasswordComponent from './Components/AuthComponents/ForgotPasswordComponent';
import HomeComponent from './Components/HomeComponents/HomeComponent';
import CreateTips from './Components/CreateData/CreateTips';
import UpdateTips from './Components/UpdateData/UpdateTips';
import DashboardComponent from './Components/HomeComponents/DashboardComponent';
import WeightGainComponent from './Components/WeightGainComponents/WeightGain';
import BodyBuildingComponent from './Components/BodyBuildingComponents/BodyBuilding/BodyBuildingComponent';
import BodyBuildingVegComponent from './Components/BodyBuildingComponents/BodyBuildingVeg/BodyBuildingVegComponent';
import BodyBuildingNonVegComponent from './Components/BodyBuildingComponents/BodyBuildingNonVeg/BodyBuildingNonVegComponent';
import MuscleBuildingComponent from './Components/MuscleBuildingComponents/MuscleBuilding';
import MuscleBuildingTips from './Components/MuscleBuildingComponents/MuscleBuildingTips';
import WeightLossComponent from './Components/WeightLossComponents/WeightLoss';
import WeightLossTipsComponent from './Components/WeightLossComponents/WeightLossTips';
import DietForPatients from './Components/DietForPatientsComponent/DietForPatients/DietForPatients';
import DietForAcidityComponent from './Components/DietForPatientsComponent/DietForAcidityComponents/DietForAcidity';
import DietForAcidityTips from './Components/DietForPatientsComponent/DietForAcidityComponents/DietForAcidityTips';
import DietForDiabetesComponent from './Components/DietForPatientsComponent/DietForDiabetesComponents/DietForDiabetes';
import DietForDiabetesTips from './Components/DietForPatientsComponent/DietForDiabetesComponents/DietForDiabetesTips';
import DietForUricAcidComponent from './Components/DietForPatientsComponent/DietForUricAcidComponents/DietForUricAcid';
import DietForUricAcidTips from './Components/DietForPatientsComponent/DietForUricAcidComponents/DietForUricAcidTips';
import MondayComponent from './Components/DietWeekDaysTips/Monday/MondayTips';
import TuesdayComponent from './Components/DietWeekDaysTips/Tuesday/TuesdayTips';
import WednesdayComponent from './Components/DietWeekDaysTips/Wednesday/WednesdayTips';
import ThursdayComponent from './Components/DietWeekDaysTips/Thursday/ThursdayTips';
import FridayComponent from './Components/DietWeekDaysTips/Friday/FridayTips';
import SaturdayComponent from './Components/DietWeekDaysTips/Saturday/SaturdayTips';
import SundayComponent from './Components/DietWeekDaysTips/Sunday/SundayTips';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginComponent /> } />
          <Route path="/signup" element={ <RegisterComponent /> } />
          <Route path="/forgotpassword" element={ <ForgotPasswordComponent /> } /> 
          <Route path="/home" element={ <HomeComponent /> } />
          <Route path="/homePage" element={ <CreateTips /> } />
          <Route path="/update/:dataID" element={ <UpdateTips /> } />
          <Route path="/dashboard" element={ <DashboardComponent /> } />
          <Route path="/weightgain" element={ <WeightGainComponent /> } />
          <Route path="/monday" element={ <MondayComponent /> } />
          <Route path="/tuesday" element={ <TuesdayComponent /> } />
          <Route path="/wednesday" element={ <WednesdayComponent /> } />
          <Route path="/thursday" element={ <ThursdayComponent /> } />
          <Route path="/friday" element={ <FridayComponent /> } />
          <Route path="/saturday" element={ <SaturdayComponent /> } />
          <Route path="/sunday" element={ <SundayComponent /> } />
          <Route path="/weightloss" element={ <WeightLossComponent /> } />
          <Route path="/tips" element={ <WeightLossTipsComponent /> } />
          <Route path="/bodybuilding" element={ <BodyBuildingComponent /> } />
          <Route path="/veg" element={ <BodyBuildingVegComponent /> } />
          <Route path="/nonVeg" element={ <BodyBuildingNonVegComponent /> } />
          <Route path="/musclebuilding" element={ <MuscleBuildingComponent /> } />
          <Route path="/muscleTips" element={ <MuscleBuildingTips /> } />
          <Route path="/dietforpatients" element={ <DietForPatients /> } />
          <Route path="/acidity" element={ <DietForAcidityComponent /> } />
          <Route path="/acidityTips" element={ <DietForAcidityTips /> } />
          <Route path="/diabetes" element={ <DietForDiabetesComponent /> } />
          <Route path="/diabetesTips" element={ <DietForDiabetesTips /> } />
          <Route path="/uricacid" element={ <DietForUricAcidComponent /> } />
          <Route path="/uricacidTips" element={ <DietForUricAcidTips /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
