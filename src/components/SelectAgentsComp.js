import React, { Component } from "react";

// Import from bootstrap
import { Container, Row} from "react-bootstrap";

// Import agents data
import { agentsData } from "../AgentsData";
import AgentIcon from "./AgentIcon";

export default class SelectAgentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents: agentsData,
    };
  }

  render() {
    const { agentIndex } = this.props;
    const { agents } = this.state;
    return (
      <section className="select-agent-cont" id="agents">
        <Container>
          <h1>
            <strong>Select An Agent</strong>
          </h1>
          <Row>
            {agents &&
              agents.map((agent) => {
                if(agentIndex-1){
                  console.log(agent.id + "=" + agents[agentIndex].id);
                  if(agent.id === (agents[agentIndex].id)){
                    return(
                      <AgentIcon agentId={ agent.id } agentName={ agent.agentName } classIcon="agent-selected"/>
                      )}else{
                    return(
                      <AgentIcon agentId={ agent.id } agentName={ agent.agentName } classIcon=""/>
                    )};
                }else{
                  return(
                    <AgentIcon agentId={ agent.id } agentName={ agent.agentName } classIcon=""/>
                  )};
              })}
          </Row>
        </Container>
      </section>
    );
  }
}

