import { Container } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = ({ id }) => {
    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container className="px-5 px-md-0">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5">About Us</h1>
                </ScrollAnimation>
                <div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="mb-5 lead">
                            Felicity is IIIT Hyderabad&apos;s annual cultural and tech fest held every
                            year at the beginning of the spring semester. Felicity encompasses and
                            embraces the diverse plethora of interests of IIIT Hyderabad, with
                            everyone playing a role. Despite the disruptions in place, travel to the
                            past with Felicity 2021 and relive your exhilarating memories.
                        </div>
                    </ScrollAnimation>
                </div>
            </Container>
        </div>
    );
};

export default About;
