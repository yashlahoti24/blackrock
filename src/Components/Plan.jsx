import React from "react";
import "../css/plan.css";

function Plan(props) {
  return (
    <div className="card-client">
      <p className="name-client" style={{ color: "GrayText" }}>
        {props.title}
      </p>
    </div>
  );
}

export default Plan;
