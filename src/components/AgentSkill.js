import React, { Component} from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { agentsData } from "../AgentsData";
import { SKILL_ICON_URL } from "../utils/Const";

export default class AgentSkill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      agents: agentsData,
      skillVid: "",
    };
  }

  selectSkill(n){
    let skillIcon = document.querySelectorAll("#skillIcon")
    switch (n) {
      case 0:
        skillIcon[0].classList.add("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 1:
        skillIcon[1].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 2:
        skillIcon[2].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 3:
        skillIcon[3].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        break;
      default:
        skillIcon[0].classList.add("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
    }
  }

  render() {
    let { agentName } = this.props;
    let { agents, index, skillVid } = this.state;
    let agentIndex = agents
      .map((agent) => {
        return agent.agentName;
      })
      .indexOf(agentName);
    return (
      <>
        <Container className="agent-skill">
          <h1 className="agent-skill-title"><strong>AGENT ABILITIES</strong></h1>
          <div className="agent-skill-container">
            <Row>
              <Col className="p-5">
                <Row>
                  {agents[agentIndex].skills &&
                    agents[agentIndex].skills.map((skill) => (
                      <Col key={(skill.id)} md={2} sm={4} className="mb-5">
                        <img src={SKILL_ICON_URL + agents[agentIndex].agentName + "/" + skill.skillName + ".webp"} alt="skill-icon" id="skillIcon" className="agent-skill-icon p-3" onClick={() => {
                          this.selectSkill((skill.id-1))
                          this.setState({index: skill.id-1})
                        }} />
                      </Col>
                    ))}
                </Row>
                <div className="skill-description">
                  <h3 className="d-flex align-items-center">
                    <Badge className="me-3" bg="secondary">{agents[agentIndex].skills[index].skillKey}</Badge>
                    <strong>{agents[agentIndex].skills[index].skillName}</strong>
                  </h3>
                  <p>{agents[agentIndex].skills[index].skillDesc}</p>
                </div>
              </Col>
              <Col style={{ overflow: "hidden" }}>
                <video preload="true" muted loop playsInline autoPlay className="agent-skill-vid" >
                  <source src={agents[agentIndex].skills[index].skillVid} type="video/mp4"/>
                </video>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
