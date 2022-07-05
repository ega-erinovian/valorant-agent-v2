import React, { Component } from "react";
import { agentsData } from "../AgentsData";
import { AGENT_ART_URL, AGENT_VIDEO_URL} from "../utils/Const";
import { Container, Row, Col } from "react-bootstrap";
import SelectAgentsComp from "./SelectAgentsComp";
import AgentsDesc from "./AgentsDesc";
import AgentSkill from "./AgentSkill";

export default class AgentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents: agentsData,
    };
  }

  render() {
    let { agents } = this.state;
    let currentURL = window.location.href.split("/");
    let agentIndex = agents
      .map((agent) => {
        return agent.agentName;
      })
      .indexOf(currentURL[4]);
    return (
      <div className="agents-header-container">
        <video autoPlay muted loop id="myVideo">
          <source src={AGENT_VIDEO_URL + "agent-header-bg.mp4"} type="video/mp4" />
        </video>
        <div className="header-overlay"></div>
        <Container className="agents-header-section text-white">
          <div className="img-container w-100 d-flex justify-content-center" id="agentArt">
            <img src={AGENT_ART_URL + currentURL[4] + ".webp"} alt="header-char"  />
          </div>
        </Container>
        <Container>
          <Row className="agent-header-text">
            <Col lg={8}>
              <div className="agent-number" id="agentNumber">
                <h1><strong>{agents[agentIndex].id}</strong></h1>
              </div>
            </Col>
            <Col>
              <AgentsDesc id="agentDesc" agentName={agents[agentIndex].agentName} agentBio={agents[agentIndex].bio} agentRole={agents[agentIndex].role} />
            </Col>
          </Row>
        </Container>
        <AgentSkill agentName={agents[agentIndex].agentName} />
        <SelectAgentsComp />
      </div>
    );
  }
}
