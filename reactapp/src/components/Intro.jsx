import { Container } from "reactstrap";

const Intro = () => {
    return (
        <Container fluid className="full-page text-light">
            <video autoPlay muted className="bg-media" width="2000">
                <source src="/videos/websitemedium1.mp4" type="video/mp4" />
            </video>
        </Container>
    );
};

export default Intro;
