import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import PreviousRides from "./components/routes/user/PreviousRides";
import RideDetails from "./components/routes/user/RideDetails";
import DriverDashboard from "./components/routes/driver/DriverDashboard";
import UserDashboard from "./components/routes/user/UserDashboard";
import UserProfile from "./components/routes/user/UserProfile";

import Home from "./components/Home"
import LaunchPage from "./components/LaunchPage"

function App() {
  return (
    <div>
      {/* In app.js
     <RideDetails/>
     ------------
     <PreviousRides/> */}

    {/* Learn about order of routing */}
    
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
              <Route path="/user" element={<UserDashboard/>} />
                <Route path="/user/bookride" element={<RideDetails />} />
                <Route path="/user/previousrides" element={<PreviousRides />} />
                <Route path="/user/userprofile" element={<UserProfile />} />  
         
            <Route path="/driver" element={<DriverDashboard/>}>
            </Route>

          <Route path="/" element={<LaunchPage/>}>
          </Route>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
