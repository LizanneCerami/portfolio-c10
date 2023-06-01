import { Col, Container, Row } from "react-bootstrap";


export default function About() {

  return(
    <section>
      <Container className="main-container">
        <Row>
          <Col className="button-effect">


          </Col>
          
          <Col className= "about-container" justify-content="center">
            <h1 className= "about-header1">Hi I'm Lizanne</h1>
            <p className="about-header2">I am FullStack Software Engineer with a thirst for learning! I am currently located in South Florida, but am originally fron Pennsylvania.  I have a thirst for knowledge, and Software Engineering allows me the creative freedom to learn and grow through my projects.  I enjoy creating with JavaScript, React.js, and especially React Native.  When I am not coding, I enjoy hanging out with my dog, Lucy, being around water, and sinking into a good book, all with good music playing in the background. It's a great day if I get to do all three together!</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}