import { Col, Container, Row } from "react-bootstrap";


export default function About() {

  return(
    <section>
      <Container className="main-container bg-danger">
        <Row>
          <Col className="button-effect">

             <img src="https://picsum.photos/300/300"
            alt="profile pic" />

          </Col>
          
          <Col>
            <h1>Hi I'm Lizanne</h1>
            <p>I am an aspiring Software Engineer.  I am currently enrolled in the Software Engineer Career Course at Boca Code, and I cannot wait to show off my new skills!</p>
            <p>Contact me: Lizanne.Cerami@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}