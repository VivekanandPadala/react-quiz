import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Questionnaire from "./Questionnaire";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";

const QuizCard = (props) => {
  const [questions, setQuestions] = useState([]);
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
        <Questionnaire
          data={questions[0]}
        />
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
          <Button color="success" block>
            Start
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default QuizCard;
