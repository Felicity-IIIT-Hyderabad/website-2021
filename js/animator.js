function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function setupScroller(videoSelector) {
    let vid_container = document.querySelector(videoSelector);
    let vid = vid_container.children[0];
    let scrollUnitMultiplier = 10000;

    // adjusts height of the page so that person can actually scroll
    let heightElm = document.createElement("div");
    insertAfter(heightElm, vid);
    heightElm.style.position = "absolute";
    heightElm.style.width = "1px";
    heightElm.style.display = "block";

    function scrollPlay(){  
        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = vid_container.getBoundingClientRect(),
            offset   = elemRect.top - bodyRect.top;

        let diff = window.pageYOffset - offset;

        let should_fix = true;
        if (diff < 0) diff = 0, should_fix = false;

        let frameNumber = diff / scrollUnitMultiplier;
        if (frameNumber > vid.duration) frameNumber = vid.duration, should_fix = false;

        if (should_fix) {
            vid.style.position = 'fixed';
            vid.style.top = "0px";
            vid.style.left = "0px";
        } else {
            vid.style.position = "relative";
        }
        
        vid.pause();
        vid.currentTime = frameNumber;
        console.log(frameNumber, vid.duration);

        window.requestAnimationFrame(scrollPlay);
    }

    function onloadedmetadata(event) {
        heightElm.style.height = Math.floor(vid.duration) * scrollUnitMultiplier + "px";
        window.requestAnimationFrame(scrollPlay);
    }

    vid.play();
    vid.pause();
    vid.addEventListener('canplay', onloadedmetadata);
    // onloadedmetadata();
}

window.addEventListener("load", () => {
    setupScroller("#video-1");
});
