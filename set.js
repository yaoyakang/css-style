// 2018-1-27 重新上传
setRem();
document.addEventListener('touchstart', function (ev) {
    ev.preventDefault();
});
window.onientationchange = function () {
    setRem();
}
window.onresize = function () {
    setRem();
}

function setRem() {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth / 16 + 'px';
}



