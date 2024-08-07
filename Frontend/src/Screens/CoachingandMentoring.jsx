import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaUserTie, FaUserFriends, FaUserClock, FaPeopleCarry, FaChalkboardTeacher } from 'react-icons/fa'; // Import icons
import coachingacademy from '../Api/CoachingandMentoring';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const CoachingandMentoring = () => {

    function FooterSection({ children }) {
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0,
        });

        return (
            <motion.div
                ref={ref}
                variants={reveal("left", 0.2)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                <Footer />
            </motion.div>
        );
    }

    const getIcon = (index) => {
        switch (index) {
            case 0:
                return <FaUserTie size={35} className="mb-3" />;
            case 1:
                return <FaUserFriends size={35} className="mb-3" />;
            case 2:
                return <FaUserClock size={35} className="mb-3" />;
            case 3:
                return <FaPeopleCarry size={35} className="mb-3" />;
            case 4:
                return <FaChalkboardTeacher size={35} className="mb-3" />;
            default:
                return <FaUserTie size={35} className="mb-3" />;
        }
    };

    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="imageBox">
                                <motion.img
                                    src="/images/mentor.jpg"
                                    alt=""
                                    className="img-fluid"
                                    whileHover={{ scale: 1.1, rotateY: 10, transition: { duration: 0.5 } }}
                                />
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6} className="py-5">
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <h2 className="text-left mb-4 mission-heading" style={{ color: "#ac0900", fontWeight: 700 }}>Coaching & Mentoring</h2>
                            <p style={{ color: "#212529", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                Our coaching and mentoring programs provide tailored guidance for senior leaders, fostering leadership effectiveness and career growth. Executive Coaching offers one-on-one sessions to refine strategic thinking. Young Leader Coaching supports emerging talents. Diversity and Inclusion Coaching promotes inclusivity.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="mt-5 bg-light py-4 rounded justify-content-center">
                    <Col xs={12} className="text-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <h3 className='mission-heading' style={{ color: "#ac0900", fontWeight: 700 }}>Our Coaching & Mentoring Programs</h3>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    {coachingacademy.map((program, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-4 mt-3 d-flex align-items-stretch">
                            <InView triggerOnce>
                                {({ inView, ref }) => (
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={reveal("up", index * 0.3)}
                                        ref={ref}
                                        style={{ display: 'flex', flexGrow: 1, margin: '10px' }}
                                    >
                                        <Card className="allCards h-100 shadow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch', height: '100%' }}>
                                            <Card.Body className="d-flex flex-column align-items-center" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                {getIcon(index)}
                                                <Card.Title style={{ color: "#ac0900", fontWeight: 600, textAlign: "center" }}>{program[`heading${index + 1}`]}</Card.Title>
                                                <Card.Text style={{ color: "#212529", fontWeight: 600, textAlign: "justify" }}>{program[`point${index + 1}`]}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                )}
                            </InView>
                        </Col>
                    ))}
                    {coachingacademy.length % 3 === 2 && <Col xs={12} md={{ span: 4, offset: 4 }} style={{ marginTop: '10px', marginBottom: '10px' }}></Col>}
                </Row>
            </Container>
            <FooterSection />
        </div>
    );
};

export default CoachingandMentoring;
