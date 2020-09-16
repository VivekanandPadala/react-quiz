import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const Questionnaire = ({
  data: { question, correct_answer, incorrect_answers },
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{question[0].category}</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col sm='12' md='12'>
              <h4
                className='quizQuestion'
                dangerouslySetInnerHTML={{ __html: 'Q. ' + question }}></h4>
            </Col>
          </Row>
          <Row>
            <Col sm='6' md='6' className='choiceButton'>
              <Button color='primary' block>
                {correct_answer}
              </Button>
            </Col>
            <Col sm='6' md='6' className='choiceButton'>
              <Button color='primary' block>
                {incorrect_answers[0]}
              </Button>
            </Col>
            <Col sm='6' md='6' className='choiceButton'>
              <Button color='primary' block>
                {incorrect_answers[1]}
              </Button>
            </Col>
            <Col sm='6' md='6' className='choiceButton'>
              <Button color='primary' block>
                {incorrect_answers[2]}
              </Button>
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        {' '}
        <Button color='secondary' onClick={toggleModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Questionnaire;
