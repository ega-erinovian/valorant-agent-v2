import React from 'react'
import { Container } from 'react-bootstrap'

const AboutComp = () => {
  return (
    <>
    <section className="about-container">
        <Container>
            <h1 className='about-title' style={{textTransform: 'uppercase'}}><strong>welcome to my valorant web!</strong></h1>
            <p>This web is a upgraded version from my previous project <a href="https://valorant-agents.netlify.app/" target="_blank" rel="noreferrer">"Valorant Agent"</a> which i created few months ago without using any framework. I created this web using ReactJS (that's why i called it `upgraded version`), my apology if there are many bugs or features that didn't work as you and i expected. Maybe i will add a lot more features to this website like map info, weapons info, etc. You can check my github, or social media down below and maybe leave this project a star on my github haha. If u want to use this project for your personal use it's very okay i leave this project public, and you guys can ask me first if you guys want to.</p>
        </Container>    
    </section>
    </>
  )
}

export default AboutComp