const NUMBER_OF_LEAVES = 10;
const width = window.screen.width;

function effectinit() {
    var picList = $(".act-effect").attr("data-pic").split(',');
    var container = document.getElementById('effectbox');
    $("#effectbox").empty();
    for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
        container.appendChild(createALeaf(picList));
    }
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}
function pixelValue(value) {
    return value + 'px';
}
function durationValue(value) {
    return value + 's';
}
function createALeaf(effects_imgs) {
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    image.src = effects_imgs[randomInteger(0, effects_imgs.length)];
    leafDiv.style.top = "-10px";
    leafDiv.style.left = pixelValue(randomInteger(0, width));
    var spinAnimationName = (Math.random() < 1.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(6, 12));
    var spinDuration = durationValue(randomFloat(3, 7));
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var leafDelay = durationValue(randomFloat(0, 0));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
    image.style.webkitAnimationDuration = spinDuration;
    leafDiv.appendChild(image);
    return leafDiv;

}
$("#effect-btn").click(function () {
    $("#effectwin").show()
})
$('#select-effect li').click(function () {
    $('#select-effect li').removeClass("act-effect")
    $(this).addClass("act-effect")
    effectinit();
})
$("#effect-btns").click(function () {
    var da=$('#select-effect .act-effect').data("pic")
    $("#effect_id").val(da)
    $("#effectwin").hide()
})

