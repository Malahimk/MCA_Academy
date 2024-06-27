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
                        {/* <a href='https://www.instagram.com/' className='me-4 text-reset' style={{ fontSize: "40px" }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a> */}
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
                                {/* <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Contact</h5>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faPhone} className='me-2' />
                                    Monday-Friday <br />9:00am - 6:00pm <br />
                                    +971 4 3319501
                                </p> */}

                                <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Locations</h5>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Dubai</h6> <br/>
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    MCA Management Consultants (Head office) <br />
                                    404 -10, Business Cluster Bldg 2 <br />
                                    Dubai CommerCity, Ummramool <br/>
                                    T + 971 4 331 9501 <br/> F + 971 4 331 9502

                                </p>

                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Abu Dhabi</h6>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    801- Al AIN Insurance Building,  <br />
                                    Hamdan Street, Abu Dhabi, UAE <br />
                                    T+ 971 2 445 0050 <br/>
                                    F + 971 2 445 0075<br/>

                                </p>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Abu Dhabi</h6>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Abu Dhabi Global Market <br />
                                    B08 - Al Sarab Tower, ADGM, Al<br />
                                    Maryah Island, Abu Dhabi, UAE.<br />
                                   

                                </p>

                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Sharjah</h6>
                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    SAIF Office: P8-10-14
                                    <br />
                                    PO Box 121026, Sharjah, UAE.<br />
                                   
                                   

                                </p>

                                {/* <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    801 Al Ain Insurance Building <br />
                                    Hamdan Street, PO Box 33855 <br />
                                    Abu Dhabi UAE
                                </p> */}
                            </div>
                        </MDBCol>

                        <MDBCol md="4" lg="4" xl="4" className='mb-4'>
                            <div>
                                <h5 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Global Offices</h5><br/>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Saudi Arabia</h6>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Unit 27, 3rd Floor, Yusuf Bin Ahmed <br />
                                    Kanoo Building No.2,<br />
                                    6767 Al Madinah Al Munawarah <br />
                                    Rd, Al Faisaliyyah Dist, <br />
                                    Jeddah 23441, <br />
                                    Kingdom of Saudi Arabia <br />
                                    T+ 966 55 948 3774
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Bahrain</h6> <br/>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Suite no 606, 6th Floor Venture <br />
                                    Capital Bank Bldg247, Diplomat <br />
                                    AreaP.B.11409, Manama,  <br />
                                    Bahrain.<br />
                                    T +973 17 518 777
                                    <br />
                                    M +973 38 294537<br />
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Oman</h6> <br/>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Office no 208, Hatat House <br />
                                    Complex A <br />
                                    Wadi Adai, Governate of  <br />
                                    Muscat, PO Box 233, Oman<br />
                                    T +968 2457 1401 
                                    <br />
                                    M +968 9176 9455<br />
                                </p>

                                <p style={{ color: "#212529", fontWeight: 500 }}>
                                <h6 className='mission-heading' style={{ color: '#CE0932', fontWeight: 700 }}>Qatar</h6> <br/>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Regus Doha D-Ring, <br />
                                    1st Floor Regus Building, D-Ring <br />
                                    Road, PO Box 32522, <br />
                                    Doha, Qatar<br />
                                    T +974 55 295 733 
                                </p>


                               
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}