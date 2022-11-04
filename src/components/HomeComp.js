import React, { Component } from "react";

// Import constant url
import { AGENT_ART_URL } from "../utils/Const";

// Import Components
import SelectAgentsComp from "./SelectAgentsComp";

export default class HomeComp extends Component {
  render() {
    return (
      <div>
        <section className="header-section mt-5">
          <div className="header-content"></div>
          <div className="img-container d-flex justify-content-center" id="agentArt">
            <img src={AGENT_ART_URL + "All.webp"} alt="header-char"/>
          </div>
        </section>
        <SelectAgentsComp />
      </div>
    );
  }
}
