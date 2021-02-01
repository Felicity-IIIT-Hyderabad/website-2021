import { Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <Row className="text-muted">
            <Col className="w-100 d-flex justify-content-center">
                <div className="mt-5 mb-3">&#169; Felicity 2021, IIIT Hyderabad</div>
            </Col>
        </Row>
    );
};

export default Footer;
