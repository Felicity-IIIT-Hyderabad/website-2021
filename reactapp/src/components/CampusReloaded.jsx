import { Container } from "reactstrap";

const CampusReloaded = ({ id }) => {
    return (
        <Container fluid id={id} className="full-page text-light vignette">
            <img src="/himalaya-static.png" alt="" className="bg-media" />
        </Container>
    );
};

export default CampusReloaded;
