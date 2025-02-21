import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import finance from '../Api/Finance';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const NewScreen3 = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    const generateURL = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };


    const boxStyle = {
        flex: 1,
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        margin: "10px",
    };


    const scrollToSection = (sectionId) => {
        console.log("Scrolling to section:", sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };

    const AnimatedColumn = ({ children, delay, direction }) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: '-100px 0px',
        });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={reveal(direction, delay)}
                transition={{ delay }}
            >
                {children}
            </motion.div>
        );
    };

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const FooterSection = () => {
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
    };


    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={8} lg={8} xl={8}>
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <div className="py-5">
                                <h2 className="text-left mb-4 mission-heading" style={{ color: "#CE0932", fontWeight: 700 }}>
                                MySustainOnline
                                </h2>
                                <p style={{ color: "#212529", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                Marking a new chapter in delivering transformational learning designed <br />to prepare future leaders. This partnership aligns MCA Academy’s mission to drive <br /> regional growth with MySustainOnline’s expertise in sustainability training <br />and workforce empowerment. MySustainOnline provides scalable, expert-led, and  <br />customized learning solutions to help organizations integrate sustainability into their business strategy.<br /> Together, we will equip professionals with the knowledge and skills needed to <br /> drive sustainable business transformation, develop leadership in green initiatives, and align <br /> corporate practices with global sustainability goals.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={4} className="d-flex justify-content-end align-items-center">
                        <img
                            src="/images/MYSOBlue.png" // Replace with your image URL
                            alt="ISB Executive Education"
                            className="img-fluid"
                            style={{
                                maxWidth: "400px", // Adjust width as needed
                                height: "auto",
                                objectFit: "cover", // Ensure image fits properly within the container
                            }}
                        />
                    </Col>
                </Row>
            </Container>


            <Container>

                <Row id='international-financial-reporting-standards'>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={12} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Key Highlights</h4>
                                        <ul className='card-list'>
                                            <li>One-stop sustainability training with 130+ micro-courses in 15 languages</li>
                                            <li>Blended learning approach – e-learning, in-person training, webinars, and corporate academies</li>
                                            <li>Scalable, role-based training designed to integrate seamlessly into corporate learning systems</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                {/* <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <ul className='card-list'>
                                            <h4 className='mission-heading2'>FT Executive Education Custom 2024 Rankings</h4> <br />
                                            <li>#1 in India</li>
                                            <li>#2 in Asia</li>
                                            <li>#26 Globally</li>
                                        </ul>
                                    </motion.div>
                                </Col> */}
                            </div>
                        )}
                    </InView>
                </Row>


               




            </Container>

            <br /> <br />
            <FooterSection />
        </div >
    );
};

export default NewScreen3;
