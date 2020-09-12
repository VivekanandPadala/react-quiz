import React from "react";
import "./Assets/css/App.css";
import { Container, Row, Col } from "reactstrap";
import QuizCard from "./Components/QuizCard";

function App() {
  return (
    <div>
      <Container className="appContainer">
        <Row>
          <Col sm="12" md="12">
            <h1 className="heading">Quiz App</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="4">
            <QuizCard />
          </Col>
          <Col sm="12" md="4">
            <QuizCard />
          </Col>
          <Col sm="12" md="4">
            <QuizCard />
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        Developed and Designed by Vivekanand Padala
      </footer>
    </div>
  );
}

export default App;
