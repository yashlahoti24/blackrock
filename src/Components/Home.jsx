import React from "react";
import "../css/home.css";
import Plan from "./Plan";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
    <div className="certificate-container">
      <h2 className="container m-5 text">Select a plan</h2>
      <div className="certificate">
        <Link to="/plan1">
          <Plan title="50-30-20 Plan" />
        </Link>
        <Link to="/">
          <Plan title="80-20 Plan" />
        </Link>
        <Link to="/">
          <Plan title="70-20-10 plan" />
        </Link>
        <Link to="/">
          <Plan title="60-40 Plan" />
        </Link>
      </div>
    </div>
      </>
  );
}

export default Home;
