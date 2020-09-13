import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";

const QuizCard = (props) => {
  const [questions, setQuestions] = useState([]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  return (
    <>
      {questions.length > 0 && (
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            {questions[0].category}
          </ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col sm="12" md="12">
                  <h4
                    className="quizQuestion"
                    dangerouslySetInnerHTML={{ __html: "Q. " + questions[0].question }}
                  ></h4>
                </Col>
              </Row>
              <Row>
                <Col sm="6" md="6" className="choiceButton">
                  <Button color="primary" block>
                    {questions[0].correct_answer}
                  </Button>
                </Col>
                <Col sm="6" md="6" className="choiceButton">
                  <Button color="primary" block>
                    {questions[0].incorrect_answers[0]}
                  </Button>
                </Col>
                <Col sm="6" md="6" className="choiceButton">
                  <Button color="primary" block>
                    {questions[0].incorrect_answers[1]}
                  </Button>
                </Col>
                <Col sm="6" md="6" className="choiceButton">
                  <Button color="primary" block>
                    {questions[0].incorrect_answers[2]}
                  </Button>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            {" "}
            <Button color="secondary" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )}
      <Card className="quizCard">
        <CardImg
          top
          width="250px"
          height="250px"
          src={props.img}
          alt="Cards Image"
        />
        <CardBody>
          <CardTitle className="cardTitle">{props.title}</CardTitle>
          <CardText className="cardDesc">{props.desc}</CardText>
          <Button color="success" block onClick={toggleModal}>
            Start
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default QuizCard;
