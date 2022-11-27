import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import PreviousRides from "./components/routes/user/PreviousRides";
import RideDetails from "./components/routes/user/RideDetails";
import DriverDashboard from "./components/routes/driver/DriverDashboard";
import UserDashboard from "./components/routes/user/UserDashboard";
import UserProfileUpdated from "./components/routes/user/UserProfileUpdated";

import Home from "./components/Home"
import LaunchPage from "./components/LaunchPage"
import UserAuth from "./components/routes/user/UserAuth";
import DriverAuth from "./components/routes/driver/DriverAuth" 

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
                <Route path="/user/auth" element={<UserAuth/>} />
                <Route path="/user/bookride" element={<RideDetails />} />
                <Route path="/user/previousrides" element={<PreviousRides />} />
                <Route path="/user/userprofile" element={<UserProfileUpdated />} />  
         
                <Route path="/driver/auth" element={<DriverAuth/>} />
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
