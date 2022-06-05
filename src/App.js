import './App.css';
import { LandingPage } from "./LandingPage/LandingPage";
import { PLogin } from "./Login/PLogin";
import { Psignup } from "./Login/PLogin";
import {BookNow} from "./Passenger/BookNow"
import {PreviousBooking} from "./Passenger/PreviousBooking"
import {MainHeader} from "./Headers/Headers"
import {LoginHeader} from "./Headers/Headers"



// User Data
// import { ListPassengers, addPassenger } from "./UserData";


import React from "react";
// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>



        <Routes>
          <Route path="/passenger-login" element = {<PLogin />} />
          <Route path="/passenger-signup" element = {<Psignup />} />
          <Route path="/passenger-book-now" element = {<BookNow />} />
          <Route path="/passenger-book-prev-list" element = {<PreviousBooking />} />
          <Route path="/" element = {<LandingPage/>} />

        </Routes>
      </div>
    </Router>
    // <PLogin/>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}