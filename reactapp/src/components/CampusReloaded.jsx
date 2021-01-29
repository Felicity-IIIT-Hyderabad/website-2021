import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const CampusReloaded = ({ id }) => {
    const [visible, setVisible] = useState(false);

    const renderText = (isVisible) => {
        setVisible(isVisible);
    };

    const bigText = "CAMPUS";
    const smallText = "RELOADED";
    const loadDelay = 0.5;

    return (
        <VisibilitySensor partialVisibility onChange={renderText}>
            <div fluid id={id} className="full-page text-light vignette">
                <img src="/himalaya-static.png" alt="" className="bg-media" />
                {visible && (
                    <div className="cr-animated text-uppercase">
                        <div>
                            {bigText.split("").map((l, i) => {
                                const style = { "animation-delay": `${loadDelay + (i - 1) / 5}s` };
                                return (
                                    <span className="cr-big" key={i} style={style}>
                                        {l}
                                    </span>
                                );
                            })}
                        </div>
                        <div>
                            {smallText.split("").map((l, i) => {
                                const style = {
                                    "animation-delay": `${
                                        bigText.length * 0.25 + loadDelay + (i - 1) / 5
                                    }s`,
                                };
                                return (
                                    <span className="cr-small" key={i} style={style}>
                                        {l}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </VisibilitySensor>
    );
};

export default CampusReloaded;
