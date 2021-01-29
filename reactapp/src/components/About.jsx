import { Container, Button } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = ({ id }) => {
    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> About Us </h1>
                </ScrollAnimation>
                <div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="mb-5 lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                            harum alias officiis assumenda officia quibusdam deleniti eos cupiditate
                            dolore doloribus! <br /> Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
                            ratione temporibus aperiam harum alias officiis assumenda officia
                            quibusdam deleniti eos cupiditate dolore doloribus!
                        </div>
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => null}
                            className="mr-2 font-weight-bold px-3"
                            size="lg"
                        >
                            LOGIN
                        </Button>
                        <Button
                            type="button"
                            color="dark"
                            onClick={() => null}
                            className="font-weight-bold px-3"
                            size="lg"
                        >
                            REGISTER
                        </Button>
                    </ScrollAnimation>
                </div>
            </Container>
        </div>
    );
};

export default About;
