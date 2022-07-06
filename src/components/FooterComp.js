import React from 'react'

// Import from bootstrap
import { Row, Col } from "react-bootstrap";

// Import constant url
import { AGENT_VIDEO_URL } from "../utils/Const";

// Import icon
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiNetlify, SiGithub } from "react-icons/si";

const FooterComp = () => {
  return (
    <>
        <footer>
            <video autoPlay muted loop id="myVideo">
              <source src={AGENT_VIDEO_URL + "valo-cinematic.mp4"} type="video/mp4" />
            </video>
            <div className="footer-text text-white">
              <img src="../assets/img/riot-logo.webp" alt="riot-games-logo"/>
              <h5>Made with dedication by egaerinovian</h5>
              <p>All the images and videos are property of Riot Games&trade;</p>
              <Row>
                <Col>
                  <a href='https://www.instagram.com/egaerinovian/' target="_blank" rel="noreferrer" className="btn btn-light"><FaInstagram/></a>
                </Col>
                <Col>
                  <a href='https://www.linkedin.com/in/ega-erinovian/' target="_blank" rel="noreferrer" className="btn btn-light"><FaLinkedinIn/></a>
                </Col>
                <Col>
                  <a href='https://app.netlify.com/teams/egaputra69/overview' target="_blank" rel="noreferrer" className="btn btn-light"><SiNetlify/></a>
                </Col>
                <Col>
                  <a href='https://github.com/ega-erinovian' target="_blank" rel="noreferrer" className="btn btn-light"><SiGithub/></a>
                </Col>
              </Row>
            </div>
        </footer>
    </>
  )
}

export default FooterComp