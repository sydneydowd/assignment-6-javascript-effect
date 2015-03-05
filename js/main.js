var $btnShow = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');


$btnShow.on('click', function () {
	$box.toggleClass('js-box-show');
});

$btnMove.on('click', function () {
	$diamond.toggleClass('js-diamond-move');
});

$btnCollapse.on('click', function () {
	$panel.toggleClass('js-panel-collapse');
});


$btnBounce.on('click', function () {
	$circle.addClass('js-ball-bounce');
});

$circle.on('webkitAnimationEnd animationend' , function () {
	$circle.removeClass('js-ball-bounce');
});

