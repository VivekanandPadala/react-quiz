// eslint-disable-next-line
import React from 'react';
import './Assets/css/App.css';
import { Container, Row, Col } from 'reactstrap';
import QuizCard from './Components/QuizCard';
import cardsData from './Components/CardsData.js';
import Questionnaire from './Components/Questionnaire';

const App = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const createCard = (cardsData) => {
    return (
      <Col sm='12' md='4' className='cardAlignment'>
        <QuizCard
          key={cardsData.id}
          title={cardsData.title}
          img={cardsData.imgUrl}
          desc={cardsData.description}
        />
      </Col>
    );
  };
  return (
    <div>
      <Container className='appContainer'>
        {/* <Questionnaire /> */}
        <Row>
          <Col sm='12' md='12'>
            <h1 className='heading'>Quiz App</h1>
          </Col>
        </Row>
        <Row>{cardsData.map(createCard)}</Row>
      </Container>

      <footer className='footer'>
        Designed and Developed by{' '}
        <a
          className='footerLink'
          href='https://vivekanand.netlify.app'
          target='_blank'
          rel='noopener noreferrer'>
          Vivekanand Padala
        </a>{' '}
        &copy; {getYear()}
      </footer>
    </div>
  );
};

export default App;
