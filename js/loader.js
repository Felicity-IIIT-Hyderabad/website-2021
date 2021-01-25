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
    const normalVideo = document.getElementById("normal-video");

    headerVideo.muted = true;
    headerVideo.playbackRate = 1.75;
    headerVideo.play();
    headerVideo.onended = function () {
      document.querySelector("body").style.overflowY = "scroll";
    };
    normalVideo.muted = true;
    normalVideo.play();
    // headerVideo.onended = function () {
    //   document.querySelector("body").style.overflowY = "scroll";
    // };
  }, 40);
}
displayContent();
