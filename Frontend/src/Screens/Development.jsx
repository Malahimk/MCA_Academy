import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import reveal from '../Animations/Variants';

const Development = () => {
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
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };
    return (
        <div>
            <Navbar />
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col style={{ position: "relative" }}>
                        <div className="image-container">
                            <motion.img
                                src="/images/l3.jpg"
                                alt="Leadership Banner"
                                className="banner-image"
                                style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="overlay"><h1 style={{
                                color: "white", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Development Centers</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mt-4'>
                    <div className="mission-section py-5 text-center">
                        {/* <h1 className='mission-heading'>Development Centers</h1> */}
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-4' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
                                            This program aims to provide participants with a comprehensive developmental experience focused on enhancing their leadership capabilities and personal effectiveness. Through a series of assessments, feedback sessions, and targeted developmental activities, attendees will gain valuable insights into their strengths and areas for growth, enabling them to create actionable plans for continuous improvement.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        className='mt-4'
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <ul className='card-list'>
                                            <h4 className='mission-heading2'>Who Should Attend?</h4> <br />
                                            <li>Individuals seeking leadership enhancement</li>
                                            <li>Mid to senior-level managers</li>
                                            <li>HR professionals involved in talent development</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Gain insights into strengths and areas for development</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Enhance self-awareness and emotional intelligence to build more effective relationships and lead teams successfully.</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop leadership competencies such as communication and decision-making</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Create personalized development plans</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Acquire strategies for continuous growth</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Duration</h4>
                                        <ul className='card-list'>
                                            <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
                                                2-day program
                                            </p>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>
                </Row>

            </Container>
            <FooterSection />
        </div >
    )
}

export default Development;
