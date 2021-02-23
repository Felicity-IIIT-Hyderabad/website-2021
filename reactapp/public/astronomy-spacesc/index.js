
$(document).ready(function() {

    $("#slider ul").hover(function() {
        clearInterval(starter);
        clearInterval(rotate);
    }, function() {
        rotate = setInterval(a, 7000);
    });

    var rotate;
    var a = function() {

        moveRight();
    }
    var starter = setInterval(a, 7000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }
    $('a.control_prev').click(function() {
        clearInterval(starter);
        clearInterval(rotate);
        moveLeft();
        rotate = setInterval(a, 7000);

    });
    $('a.control_next').click(function() {
        clearInterval(starter);
        clearInterval(rotate);
        $(moveRight);
        rotate = setInterval(a, 7000);
    });
}); 
