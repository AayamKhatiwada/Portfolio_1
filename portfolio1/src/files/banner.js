import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

// animation of circle arrow moving to right while hovering
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  // numbers of letter dispalyed in the screen
  const [loopNum, setLoopNum] = useState(0);

  // deleting the current letters in the screen
  const [isDeleting, setIsDeleting] = useState(false);

  // storing the current text we are displaying
  const [text, setText] = useState('');

  // storing how fast the word is being deleted or typed
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // words that will be displayed on the screen
  const toRotate = ["Web Developer", "Web Designer", "Mobile App developer"];
  const period = 2000;

  // useEffect to type or delete the current word
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // clearing the interval
    return () => { clearInterval(ticker) };

    // eslint-disable-next-line
  }, [text])     // it is used every time the text is updated

  const tick = () => {
    // to only store the value upto the index number of 2
    let i = loopNum % toRotate.length;

    // storing the current situation of the text that is displayed
    let fullText = toRotate[i];

    // if the state is deleting it will take text.length - 1 else it will take text.length + 1
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // chaning the pace while deleting the word
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    // if the text is full displayed then changing the pace and chaning setIsDeleting to true
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') { // when the text is fully deleted
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // chaning the word
      setDelta(500);
    }
  }

  return (
    <>
      {/* // body content of the portfolio */}
      <section className="banner" id="home">
        <Container>

          {/* setting the items in center and display in row format */}
          <Row className="aligh-items-center">

            {/* setting the size of the left box */}
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! It's me Aayam Khatiwada`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Mobile App developer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>An undergraduate, with a desire and dedication to learn new skills and improve it. Have a some
                      understanding on programming languages and also have basic understanding on platform. Self learner with the a strong passion on new and creative working and want to get experience
                      through mentorship.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                  </div>}
              </TrackVisibility>
            </Col>

            {/* setting the size of the right box */}
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>

                  // animation of the header image
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>

                    {/* header img displayed from assets */}
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}