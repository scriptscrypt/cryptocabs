import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import PreviousRides from "./components/routes/user/PreviousRides";
import RideDetails from "./components/routes/user/RideDetails";
import Home from "./components/Home"
import DriverDashboard from "./components/routes/driver/DriverDashboard";
import UserDashboard from "./components/routes/user/UserDashboard";
import UserProfile from "./components/routes/user/UserProfile";


function App() {
  return (
    <div className="App">
      {/* In app.js
     <RideDetails/>
     ------------
     <PreviousRides/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="user" element={<UserDashboard/>} >
                <Route path="bookride" element={<RideDetails />} />
                <Route path="previousrides" element={<PreviousRides />} />
                <Route path="userprofile" element={<UserProfile />} />
                
            </Route>
            <Route path="driver" element={<DriverDashboard/>}>
            </Route>

          </Route>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
