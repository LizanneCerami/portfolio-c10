import { Col, Container, Row } from "react-bootstrap";


export default function Skill() {

  return(
    <section>
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Skills that Pay the Bills</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>CSS</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}