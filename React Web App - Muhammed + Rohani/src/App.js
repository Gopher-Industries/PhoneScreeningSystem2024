import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/home";
import Login from "./Components/LoginSignin/LoginSignin";
import Signup from "./Components/Signup/Signup";
import SetupMfa from "./Components/SetupMfa/SetupMfa";
import Navbar from "./Components/LandingPage/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TicketDetail from "./Components/TicketDetail/TicketDetail";
import Calendar from "./Components/Calendar/Calendar";
import TicketHistory from "./Components/TicketHistory/TicketHistory";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="/setup-mfa" Component={SetupMfa} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/TicketDetail" Component={TicketDetail} />
          <Route path="/Calendar" Component={Calendar} />
          <Route path="/TicketHistory" Component={TicketHistory} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
