import React, { Component } from "react";

// Import from bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import constant url
import { AGENT_ICON_URL } from "../utils/Const";

// Import agents data
import { agentsData } from "../AgentsData";

export default class SelectAgentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents: agentsData,
    };
  }

  render() {
    const { agents } = this.state;
    return (
      <section className="select-agent-cont" id="agents">
        <Container>
          <h1>
            <strong>Select An Agent</strong>
          </h1>
          <Row>
            {agents &&
              agents.map((agent) => (
                <Col key={agent.id} lg={1} md={3} xs={4} className="mb-3">
                  <a href={"/agents/" + agent.agentName}>
                    <img src={AGENT_ICON_URL + agent.agentName + ".webp"} alt="agent-icon" className="agent-icon" />
                  </a>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    );
  }
}
