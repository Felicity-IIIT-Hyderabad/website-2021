let list = []; // list of video elements
let scrollUnitMultiplier = 100;

function setupScroller(videoSelector) {
    let vid_container = document.querySelector(videoSelector);
    let vid = vid_container.children[0];
    function onloadedmetadata() {
        list.push([vid_container, vid]);
    }
    if (window.isNaN(vid.duration)) {
        vid.addEventListener('loadedmetadata', onloadedmetadata);
    } else {
        onloadedmetadata();
    }
}

function scrollPlay(vid_container, vid) {
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = vid_container.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;

    let diff = window.pageYOffset - offset;

    let should_fix = true;
    if (diff < 0) diff = 0, should_fix = false;

    let frameNumber = diff / scrollUnitMultiplier;
    if (frameNumber > vid.duration) frameNumber = vid.duration, should_fix = false;

    if (should_fix) {
        vid.style.paddingTop = diff + 'px';
    } else {
        vid.style.position = "relative";
    }

    // after setting the time, we need to play the video
    // and then immediately pause it
    vid.currentTime = frameNumber;
    vid.play().then(() => {
        vid.pause();
    });
}

function refreshVideos() {
    for (let vid_elm of list) {
        let vid_container = vid_elm[0];
        let vid = vid_elm[1];
        scrollPlay(vid_container, vid);
    }
}

window.addEventListener("load", () => {
    setupScroller("#video-1");
});

let previousFire = Date.now();
let minInterval = 50;

window.addEventListener("scroll", () => {
    let curr = Date.now();
    if (curr - previousFire >= minInterval) {
        refreshVideos();
        previousFire = curr;
    }
});
