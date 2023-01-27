import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(500 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "Mobile App developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };

  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500 - Math.random() * 100);
    }
  }

  const changeToConnect = () => {
    let newLink = '';
    if (window.location.href.includes("#")) {
      newLink = window.location.href.slice(0, window.location.href.indexOf("#"))
    }
    window.location.href = newLink + "#connect"
  }

  return (
    <>
      <section className="banner" id="home">
        <Container>

          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! It's me Aayam Khatiwada`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
              <p>An undergraduate, with a desire and dedication to learn new skills and improve it. Have a some
                understanding on programming languages and also have basic understanding on platform. Self learner with the a strong passion on new and creative working and want to get experience
                through mentorship.</p>
              <button onClick={() => changeToConnect()}>Let's Connect <ArrowRightCircle size={25} /></button>

            </Col>

            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}