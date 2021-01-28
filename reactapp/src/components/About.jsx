import { Container, Button } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = ({ id }) => {
    return (
        <Container
            id={id}
            className="full-page d-flex flex-column justify-content-center text-light"
        >
            <ScrollAnimation animateIn="fadeIn">
                <h1 className="font-weight-bold display-4"> About Us </h1>
            </ScrollAnimation>
            <div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
                        molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
                        officiis assumenda officia quibusdam deleniti eos cupiditate dolore
                        doloribus! <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus
                        aperiam harum alias officiis assumenda officia quibusdam deleniti eos
                        cupiditate dolore doloribus!
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Button
                        type="button"
                        color="warning"
                        onClick={() => null}
                        className="mr-2 font-weight-bold px-3"
                    >
                        LOGIN
                    </Button>
                    <Button
                        type="button"
                        color="dark"
                        onClick={() => null}
                        className="font-weight-bold px-3"
                    >
                        REGISTER
                    </Button>
                </ScrollAnimation>
            </div>
        </Container>
    );
};

export default About;
