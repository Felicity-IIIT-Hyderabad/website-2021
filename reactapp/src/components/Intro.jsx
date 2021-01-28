import { Container } from "reactstrap";

const Intro = () => {
    return (
        <Container fluid className="full-page text-light vignette">
            <video autoPlay muted className="bg-media">
                <source src="/videos/websitemedium1.mp4" type="video/mp4" />
            </video>
        </Container>
    );
};

export default Intro;
