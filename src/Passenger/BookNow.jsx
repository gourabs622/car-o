import React from "react";
import "./BookNow.css";
import { MainHeader } from "../Headers/Headers";

import { db_places_SP } from "../Places";

export const BookNow = () => {
  return (
    <div className="book-now">
      <MainHeader />
      <div className="booknow-body">
        <form className="needs-validation">
          <div className="col-md-4">
            <label htmlFor="pass-pickupLocation" className="bn-label">
              Enter Pickup Location
            </label>
            <input
              list="pass-pickup-inp"
              className="form-control"
              id="pass-pickupLocation"
              name="browser"
              placeholder="J-10"
              required=""
            />
            {/* List of pickup and drop locations */}
            <datalist id="pass-pickup-inp">
              {db_places_SP.map((places)=>(
                <option value={places}>{places}</option>
              ))}
            </datalist>
            <div className="bn-pl-invalid bn-invalid">No Such Places!</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="pass-dropLocation" className="bn-label">
              Enter Drop Location
            </label>
            <input
              list="pass-pickup-inp"
              className="form-control"
              id="pass-dropLocation"
              name="browser"
              placeholder="Gate"
              required=""
            />
            <datalist id="pass-pickup-inp">
            {db_places_SP.map((places)=>(
                <option value={places}>{places}</option>
              ))}
            </datalist>

            <div className="bn-dl-invalid bn-invalid">No Such Places!</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="bn-pass-cnt" className="bn-label">
              Number of Passengers
            </label>
            <select className="form-select" id="bn-pass-cnt" required="">
              <option selected disabled defaultValue="">
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <div className="bn-pc-invalid bn-invalid">
              Please select a valid state.
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>

          <p style={{ color: "#07ff28", fontWeight: "bold" }}>
            Per Person Rs.10/-
          </p>
        </form>
      </div>
    </div>
  );
};
