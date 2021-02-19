import { Container } from "reactstrap";

const PrivacyPolicy = () => {
    return (
        <>
            <Container style={{ color: "#eee", paddingTop: "5rem", fontSize: "1.2rem" }}>
                <h1>Privacy Policy</h1>
          We use your information strictly for communicating information (for example, announcements) related to our events. We understand that the information you are providing is sensitive and we ensure that we will not use this information outside Felicity.

                <span style={{ display: "block", paddingTop: "3rem" }} />

                <h1>Data Deletion Request</h1>
              If for any reason you want your data (i.e., email and your name) stored on our server to be deleted, you can <a href="mailto:contact@felicity.iiit.ac.in?subject=Data Deletion Request" style={{ color: "#33a2ff" }}>send us a mail</a>
            </Container>
        </>
    );
};

export default PrivacyPolicy;
