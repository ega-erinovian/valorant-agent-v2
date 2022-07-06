import React from 'react'

// Import from bootstrap
import { Col } from "react-bootstrap";

// Import constant url
import { AGENT_ICON_URL } from "../utils/Const";

const AgentIcon = ({agentId, agentName, classIcon}) => {
  return (
    <>
        <Col key={agentId} lg={1} md={3} xs={4} className="mb-3" >
            <a href={"/agents/" + agentName}>
                <img src={AGENT_ICON_URL + agentName + ".webp"} alt="agent-icon" className={"agent-icon " + classIcon} />
            </a>
        </Col>
    </>
  )
}

export default AgentIcon