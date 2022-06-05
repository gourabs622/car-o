import React from "react";
import { NavLink } from "react-router-dom";
import "./PLogin.css";
import { LoginHeader } from "../Headers/Headers";
import { User_DB_passenger as UDP, addPassenger } from "../UserData";
import { useNavigate, Link } from "react-router-dom";


export const PLogin = () => {
  //Login handel
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    //Navigating to other page while successful loggin

    let user_email = event.target[0].value;
    let user_pass = event.target[1].value;

    event.target[0].value = "";
    event.target[1].value = "";

    let matched = false;
    for (let i = 0; i < UDP.length; i++) {
      if (UDP[i].email == user_email && UDP[i].password == user_pass) {
        console.log("Matched MOthe!!");
        alert("Login Successfully!");
        matched = true;
        navigate('/passenger-book-now');
        break;
      }
    }
    if (!matched) {
      alert("Invalid Credentials. Please Provide Valid one.!");
      console.log("Not Matched!!!!!!!");
    }
  };


  return (
    <div className="passengerLogin">
      <LoginHeader />

      <div className="pl-body">
        <div className="pl-body-name">Passenger Login</div>

        <form onSubmit={handleSubmit}>
          <div className="row-mb-3">
            <label htmlFor="inputEmail3" className="email-lebel">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                // ref={node => this.inpEmail = node}
                required=""
              />
            </div>
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                // ref={node => this.inpPass = node}
                required=""
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <p className="pl-no-acc">
          Don't have any account ....{" "}
          <NavLink style={{ textDecoration: "none" }} to={"/passenger-signup"}>
            click here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

// Signup

export const Psignup = () => {
  return (
    <div className="passengerLogin">
      <LoginHeader />
      <div className="pl-body">
        <div className="pl-body-name">Passenger Signup</div>
        <form className="row g-3 needs-validation" noValidate="">
          <div className="row-mb-3">
            <label htmlFor="validationTooltip01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-fname"
              placeholder="Yota"
              required=""
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="validationTooltip02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-lname"
              placeholder="Roy"
              required=""
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="new-pass-mail"
              placeholder="example@mail.com"
              required=""
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="new-pass-phone"
              placeholder="(+91)"
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-add1"
              placeholder="1234 Main St"
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-add2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="validationTooltip03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-city"
              required=""
            />
          </div>

          <div className="row-mb-3">
            <label htmlFor="validationTooltip04" className="form-label">
              State
            </label>
            <select className="form-select" id="new-pass-state" required="">
              <option disabled="" value="">
                Choose...
              </option>
              <option>WestBengal</option>
              <option>Pakistan</option>
            </select>
          </div>

          <div className="row-mb-3">
            <label htmlFor="validationTooltip05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="new-pass-zip"
              required=""
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              id="new-pass-form-submit"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>

        <p className="pl-no-acc">
          Have an Account ....{" "}
          <NavLink style={{ textDecoration: "none" }} to={"/passenger-login"}>
            click here
          </NavLink>
        </p>
      </div>
    </div>
  );
};
