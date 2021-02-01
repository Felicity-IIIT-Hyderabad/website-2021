import { Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <Row className="text-muted">
            <Col className="w-100 d-flex justify-content-center">
                <div className="my-5">&#169; Felicity 2021, IIIT Hyderabad</div>
            </Col>
        </Row>
    );
};

export default Footer;
