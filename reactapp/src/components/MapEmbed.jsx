const MapEmbed = () => {
    return (
        <iframe
            title="map"
            width="100%"
            height="450"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=IIIT+Hyderabad`}
            allowFullScreen
        ></iframe>
    );
};

export default MapEmbed;
