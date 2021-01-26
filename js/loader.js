let lastScroll = 0;

const preloader = document.getElementById("loading");
const main = document.getElementById("main");
function displayContent() {
  main.style.display = "none";
  setTimeout(() => {
    preloader.style.opacity = 0;
    preloader.style.display = "none";
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
    const headerVideo = document.getElementById("header-video");
    // const normalVideo = document.getElementById("normal-video");

    headerVideo.muted = true;
    headerVideo.playbackRate = 1.75;
    headerVideo.play();
    // headerVideo.onended = function () {
    //   document.querySelector("body").style.overflowY = "scroll";
    // };
    // normalVideo.muted = true;
    // normalVideo.play();
  }, 4000);
}
displayContent();

const video = $(".replay video").get(0);

function scrollVideo() {
  // const video = document.querySelector(".replay").get(0);
  // var video = document.querySelector(".replay"),
  //   videoLength = video.duration,
  //   scrollPosition = document.documentElement.scrollTop;
  // console.log(video, videoLength, scrollPosition);

  const scrollPosition = $(document).scrollTop();
  const videoLength = video.duration;
  // console.log(scrollPosition);

  // console.log(video, videoLength, scrollPosition);

  if (
    scrollPosition > 1100 &&
    (lastScroll > scrollPosition + 1 || lastScroll < scrollPosition - 1)
  ) {
    video.currentTime = ((scrollPosition - 1100) * videoLength) / 500;
    console.log(video.currentTime);

    lastScroll = scrollPosition;
  }
}

$(window).scroll(function (e) {
  scrollVideo();
});

function scrollVid() {
  var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element
    vid = document.querySelector(".replay video");
  // var vid = $('#v0')[0]; // jquery option

  // dynamically set the page height according to video length
  vid.addEventListener("loadedmetadata", function () {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  });

  // Use requestAnimationFrame for smooth playback
  function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }

  window.requestAnimationFrame(scrollPlay);
}

// scrollVid()
