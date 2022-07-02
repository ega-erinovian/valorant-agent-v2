import React from "react";
import { ROLE_IMG_URL } from "../utils/Const";

const AgentsDesc = ({ agentName, agentBio, agentRole }) => {
  return (
    <>
      <section className="agent-description-section text-white d-flex flex-column justify-content-center">
        <p>// Name</p>
        <h1>
          <strong>{agentName}</strong>
        </h1>
        <p>// Biography</p>
        <p>
          <strong>{agentBio}</strong>
        </p>
        <p>// Role</p>
        <div className="d-flex align-items-center">
          <img src={ROLE_IMG_URL + agentRole + ".webp"} style={{ width: "50px", height: "50px" }} />
          <h1 className="ms-3">
            <strong>{agentRole}</strong>
          </h1>
        </div>
      </section>
    </>
  );
};

export default AgentsDesc;
