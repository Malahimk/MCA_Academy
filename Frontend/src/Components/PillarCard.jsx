import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';
// import useNavigate from react-router for internal navigation
// import { useNavigate } from 'react-router-dom';

const PillarCard = ({ data }) => {
    // const navigate = useNavigate(); // Use React Router's useNavigate instead of window.location.href

    const handleLinkClick2 = (event) => {
        event.preventDefault();
        const content = event.target.innerText;
        const url = `/${content.replace(/\s+/g, '').replace(/[^\w\s]/gi, '')}`;
        // Use navigate for internal routing to prevent full page reload
        // navigate(url);
        window.location.href = url; // Comment this out if using useNavigate
        window.scrollTo(0, 0);
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const clickedElement = event.target;
        const card = clickedElement.closest('.card');
        if (card) {
            const titleElement = card.querySelector('.cardTitle');
            if (titleElement) {
                const content = titleElement.innerText;
                const url = `/${content.replace(/\s+/g, '').replace(/[^\w\s]/gi, '')}`;
                // Use navigate for internal routing to prevent full page reload
                // navigate(url);
                window.location.href = url; // Comment this out if using useNavigate
                window.scrollTo(0, 0);
            }
        }
    };

    return (
        <div>
            <Container>
                {/* Add Heading for "Our Vertical" with the same style as "Our Mission" */}
                <h2 style={{ textAlign: 'center', color: '#ac0900', fontWeight: 'bold', margin: '40px 0' }}>Our Verticals</h2>
                
                {/* Change Row component to 'flex-nowrap' class to make sure the cards are in one line */}
                <Row className="flex-nowrap justify-content-center">
                    {data.map((values, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-3 mt-3 d-flex justify-content-center">
                            <motion.div
                                className="box"
                                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.2 }}
                            >
                                <InViewWrapper>
                                    <Card className="card pillarCard center-card pillarCardHeight h-100" style={{ margin: "0 10px" }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "40%", height: "30%", margin: "auto", padding: "20px 0" }}
                                            src={values.image}
                                            className="custom-card-img"
                                        />
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div>
                                                <Card.Title
                                                    className="cardTitle"
                                                    style={{ textAlign: "center", cursor: 'pointer', color: "#ac0900" }}
                                                    onClick={handleLinkClick}
                                                >
                                                    {values.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    <ul className='card-list'>
                                                        {values.content1 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content1}</li>
                                                        )}
                                                        {values.content2 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content2}</li>
                                                        )}
                                                        {values.content3 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content3}</li>
                                                        )}
                                                        {values.content4 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content4}</li>
                                                        )}
                                                    </ul>
                                                </Card.Text>
                                            </div>
                                            <Button onClick={handleLinkClick} style={{ backgroundColor: values.color, border: "none" }} className="mt-auto align-self-center">Learn More</Button>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: values.color, color: '#fff', textAlign: 'center', height: '7vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </InViewWrapper>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const InViewWrapper = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjusted threshold for more visible element before trigger
    });

    return <motion.div ref={ref}>{inView && children}</motion.div>;
};

export default PillarCard;
