import React from "react";

// Import constant url
import { ROLE_IMG_URL } from "../utils/Const";

const AgentsDesc = ({ agentName, agentBio, agentRole }) => {
  return (
    <>
      <section className="agent-description-section d-flex flex-column justify-content-center">
        <p>|| Name</p>
        <h1 className="agent-name">
          <strong>{agentName}</strong>
        </h1>
        <p>|| Biography</p>
        <p>
          {agentBio}
        </p>
        <p>|| Role</p>
        <div className="d-flex align-items-center agent-role-wrapper">
          <img src={ROLE_IMG_URL + agentRole + ".webp"} alt="agent-role-icon" />
          <h1 className="ms-3 agent-role-text">
            <strong>{agentRole}</strong>
          </h1>
        </div>
      </section>
    </>
  );
};

export default AgentsDesc;
