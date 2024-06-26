import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
export default function Footer() {
    const bounceAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 1,
            repeat: Infinity
        }
    };
    return (
        <MDBFooter bgColor='light' className='mt-5 text-center text-lg-start text-muted'>
            <section className='p-4 border-bottom'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='me-lg-4 mb-3 mb-lg-0'>
                        <span style={{ color: '#212529', fontWeight: 600, fontSize: '1.2rem' }}></span>
                    </div>
                    <div className='d-flex'>
                      
                        <a href='https://www.linkedin.com/company/mcagulf/mycompany/' className='me-4 text-reset' style={{ fontSize: "40px" }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='https://www.instagram.com/' className='me-4 text-reset' style={{ fontSize: "40px" }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <MDBContainer className='text-center text-md-start mt-4'>
                    <MDBRow className='mt-3'>

                        <MDBCol md="4" lg="3" xl="4" className='mb-4'>
                            <motion.img
                                className="logo-default"
                                src="https://www.mcagulf.com/wp-content/uploads/2024/05/MCA-New-Logo-252px.png"
                                alt="MCA UAE"
                                srcSet="https://www.mcagulf.com/wp-content/uploads/2024/05/MCA-Retina-New-Logo-420px.png 2x"
                                style={{ marginTop: "20px", maxWidth: '230px', height: 'auto', cursor: 'pointer' }}
                                onClick={() => window.open('https://www.mcagulf.com', '_blank')}
                                whileHover={{ scale: 1.1 }}
                            />
                            <div style={{ position: 'relative' }}> {/* Add a wrapper with relative positioning */}
                                <motion.span
                                    style={{ position: 'absolute', top: '-10px', right: '210px', fontSize: '24px', cursor: 'pointer' }}
                                    animate={bounceAnimation}
                                >
                                </motion.span> <br />
                                <motion.span
                                    style={{ whiteSpace: 'nowrap', fontSize: '1.1rem', color: '#212529', fontWeight: 600, cursor: 'pointer' }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => window.open('https://www.mcagulf.com', '_blank')}
                                >
                             Visit our MCA Gulf Website
                                </motion.span>
                            </div>

                        </MDBCol>

                        <MDBCol md="4" lg="4" xl="4" className='mb-4'>
                            <div>
                                <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Contact</h5>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faPhone} className='me-2' />
                                    Monday-Friday <br />9:00am - 6:00pm <br />
                                    +971 4 3319501
                                </p>

                                <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Locations</h5>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Dubai, UAE (Head Office) <br />
                                    MCA Management Consultants <br />
                                    404 -10, Business Cluster Bldg 2 <br />
                                    Dubai CommerCity, Ummramool
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    801 Al Ain Insurance Building <br />
                                    Hamdan Street, PO Box 33855 <br />
                                    Abu Dhabi UAE
                                </p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4" lg="4" xl="4" className='mb-4'>
                            <div>
                                <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Global Offices</h5>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Mohamed Habib Certified Accountants <br />
                                    208, Hatat House Complex A <br />
                                    Wadi Adai, Muscat, Oman
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    MCA Pyramid Consulting WLL <br />
                                    606, Venture Capital Bank Bldg 247 <br />
                                    Diplomat Area, Bahrain
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Arafat Business Center, Barwa Towers <br />
                                    C- Ring Road, Al Sadd, Tower 2 <br />
                                    PO Box 31928, Doha, Qatar
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    27, Yusuf Bin Ahmed Kanoo Building 2 <br />
                                    6767 Al Madinah Al Munawarah Rd <br />
                                    Al Faisaliyyah Dist, Jeddah, KSA 23441
                                </p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}