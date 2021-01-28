import { useRef } from "react";
import { Container } from "reactstrap";

import VisibilitySensor from "react-visibility-sensor";

const CampusReloaded = ({ id }) => {
    var bgVideo = useRef(null);

    const playVideo = (isVisible) => {
        if (isVisible) bgVideo.current.play();
    };

    return (
        <Container fluid id={id} className="full-page text-light vignette">
            <VisibilitySensor partialVisibility onChange={playVideo}>
                <video ref={bgVideo} playsInline muted className="bg-media">
                    <source src="/videos/himalaya_temp.mp4" type="video/mp4" />
                </video>
            </VisibilitySensor>
        </Container>
    );
};

export default CampusReloaded;
