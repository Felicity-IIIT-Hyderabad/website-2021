import { Container, Row, Col } from "reactstrap";
import {  Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "./Sponsors.css";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
library.add(fab, faFacebookF, faTwitterSquare, faInstagram, faYoutube);

const Sponsors = ({ id }) => {
    return (
        <div>
		    <div className="image-absolute-sponsors">
                <div id="sponsor-circle3"></div>
                <div id="sponsor-circle2"></div>
                <div id="sponsor-circle1"></div>
            </div>

            <div id={id} className="d-flex flex-column text-light contact-page dark-blue">
                <Container className="px-5 px-md-0">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="font-weight-bold infopage-title my-5 mx-5 event-heading text-white"> OUR SPONSORS </div>
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                                <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Title Sponsor</h1>
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000", width: "100%", height: "90%" }}>
                                    <Link><CardImg top width="70%" src="/qualcomm.png" alt="Card image cap"  style={{ width: "100%", height: "100%" }} onClick={() => window.open("https://www.qualcomm.com/")}/></Link>
                                </Card>
                                {/* <img src="/qualcomm.png" alt="image" style={{ alignSelf: "center", display: "flex" }} />         */}
                            </Col>
                        </Row>               
                        <Row>                            
                            <Col md={1}></Col>
                            <Col md={4}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000", width: "70%", height: "90%" }}>
                                    <CardTitle>
                                        <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Banking Partner</h1>
                                    </CardTitle>
                                    <CardText>
                                        <br/>
                                        <br/>                                        
                                    </CardText>
                                    <Link><a><CardImg top width="100%" src="/sbi.png" alt="Card image cap" onClick={() => window.open("https://www.onlinesbi.com/")}/></a></Link>
                                    <CardBody>
                                        {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                        <CardText>
                                            <br/>
                                            <br/>
                                            <br/>                                                                                        
                                        </CardText>                                    
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={2}></Col>                            
                            <Col md={4}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000", width: "70%", height: "90%" }}>
                                    <CardTitle>
                                        <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Kings of ML Sponsor</h1>                                
                                    </CardTitle>
                                    <CardText>
                                        <br/>
                                        <br/>                                        
                                    </CardText>                                  
                                    <Link><CardImg top width="100%" src="/logos/aicrowd.jpg" alt="Card image cap" onClick={() => window.open("https://www.aicrowd.com/")}/></Link>
                                    <CardBody>
                                        {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                        <CardText>
                                            <br/>
                                            <br/>
                                            <br/>                                                                                        
                                        </CardText>                                    
                                    </CardBody>
                                </Card>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>

                            </Col>
                            <Col md={4}></Col>
                        </Row>
                        <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Past Sponsors</h1>
                        <div className="horizontal-divider my-border-black" />
                        <Row className="d-flex align-items-center">
                            <Col md={4} className="my-border-right">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/airtel.png" alt="Card image cap" />
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/ajio.png" alt="Card image cap" />
                                </Card>
                            </Col>
                            <Col md={4} className="my-border-left">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/ebay.png" alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <div className="horizontal-margin" />
                        <Row className="d-flex align-items-center">
                            <Col md={4} className="my-border-right">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/lic.png" alt="Card image cap" />
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/microsoft.png" alt="Card image cap" />
                                </Card>
                            </Col>
                            <Col md={4} className="my-border-left">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top className="past-sponsor-logo" src="/logos/redfm.png" alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>s

                    </ScrollAnimation>
                    {/* <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col md={6}>
                            <div className="mb-5 lead">
                    IIIT Hyderabad

                    Professor CR Rao Rd, 

                    Gachibowli, Hyderabad, 

                    Telangana 500032, India
                    </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-5 lead">
                        &#169; Felicity 2021, IIIT Hyderabad
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation> */}
                    {/* <Col> */}
                    {/*     <ScrollAnimation animateIn="fadeIn"> */}
                    {/*         <MapEmbed /> */}
                    {/*     </ScrollAnimation> */}
                    {/* </Col> */}
                    <Footer />
                </Container>
            </div>
        </div>
    );
};

export default Sponsors;
