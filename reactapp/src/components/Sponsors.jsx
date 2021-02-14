import { Container, Row, Col } from "reactstrap";
import {  Card, CardImg, CardText, CardBody } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Navbar from "./Navbar";
import "./Sponsors.css";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebookF, faTwitterSquare, faInstagram, faYoutube);

const Sponsors = ({ id }) => {
    return (
        <div>
            <Navbar/>
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
                                    <CardImg top width="70%" src="/qualcomm.png" alt="Card image cap"  style={{ width: "100%", height: "100%" }}/>
                                </Card>
                                {/* <img src="/qualcomm.png" alt="image" style={{ alignSelf: "center", display: "flex" }} />         */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={3}>
                                <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Banking Partner</h1>                                
                            </Col>
                            <Col md={3}></Col>                            
                            <Col md={3}>
                                <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Kings of ML Sponsor</h1>                                
                            </Col>
                        </Row>                        
                        <Row>                            
                            <Col md={1}></Col>
                            <Col md={4}>
                                <Card style={{ backgroundColor: "#000", borderColor: "#000", width: "70%", height: "90%" }}>
                                    <CardText>
                                        <br/>
                                        <br/>                                        
                                    </CardText>                                  
                                    <CardImg top width="100%" src="/sbi.png" alt="Card image cap" />
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
                                    <CardText>
                                        <br/>
                                        <br/>                                        
                                    </CardText>                                  
                                    <CardImg top width="100%" src="/logos/aicrowd.jpg" alt="Card image cap" />
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
                        <Row className="d-flex align-items-center">
                            <Col md={4} className="d-flex flex-column align-items-start text-md-left">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/airtel.png" alt="Card image cap" />
                                    <CardBody>
                                        {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <div className="divider d-none d-md-block" />
                            <Col md={4} className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/ajio.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <div className="divider d-none d-md-block" />
                            <Col md={3} className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/ebay.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>                            
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4} className="d-flex flex-column align-items-start text-md-left">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/lic.png" alt="Card image cap" />
                                    <CardBody>
                                        {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <div className="divider d-none d-md-block" />
                            <Col md={4} className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/microsoft.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <div className="divider d-none d-md-block" />
                            <Col md={3} className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0">
                                <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
                                    <CardImg top width="50%" src="/logos/redfm.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>                            
                        </Row>

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
