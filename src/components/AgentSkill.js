import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentsData } from "../AgentsData";
import { SKILL_ICON_URL } from "../utils/Const";
import ReactPlayer from "react-player";

export default class AgentSkill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      agents: agentsData,
    };
  }
  render() {
    let { agentName } = this.props;
    let { agents, index } = this.state;
    let agentIndex = agents
      .map((agent) => {
        return agent.agentName;
      })
      .indexOf(agentName);
    return (
      <>
        <Container className="mb-5">
          <div className="agent-skill-container">
            <Row className="p-5">
              <Col>
                <Row>
                  {agents[agentIndex].skills &&
                    agents[agentIndex].skills.map((skill) => (
                      <Col key={skill.id} md={2} className="mb-5">
                        <img src={SKILL_ICON_URL + agents[agentIndex].agentName + "/" + skill.skillName + ".webp"} alt="skill-icon" className="agent-skill-icon p-3" />
                      </Col>
                    ))}
                </Row>
                <div className="skill-description">
                  <h3>
                    <strong>{agents[agentIndex].skills[index].skillName}</strong>
                  </h3>
                  <p>{agents[agentIndex].skills[index].skillDesc}</p>
                </div>
              </Col>
              <Col style={{ overflow: "hidden" }}>
                <video autoPlay muted loop id="agentSkill">
                  <source src={agents[agentIndex].skills[index].skillVid} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
