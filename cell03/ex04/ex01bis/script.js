$(document).ready(function() {
    let size = 200;
    let colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $('#balloon').click(function() {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        updateBalloon();
    });

    $('#balloon').mouseout(function() {
        size = Math.max(200, size - 5);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    });

    function updateBalloon() {
        $('#balloon').css({
            width: size + 'px',
            height: size + 'px',
            backgroundColor: colors[colorIndex]
        });
    }
});
