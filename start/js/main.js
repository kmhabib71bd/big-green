// (function($){
 // var header = $('#header');
// TweenLite.to(('#header'), 1, {opacity: 0, y:50});shudhu evabeo seletc kora jabe.
// h1 = $("h1"),
// intro = $(".intro"),
// firstItem = $("li:first-child"),
// secondItem = $("li:nth-child(2)"),
// lastItem = $("li:last-child");
//jader jQuery jana nei tar pure javascript use koreo selector select korte parbe.
// var header = document.getElementById('header'),
// <-----------Start Portion------------->
//   h1 = document.getElementsByTagName('h1');
//   intro = document.getElementsByClassName("intro");
//   firstItem = document.getElementsByClassName("list")[0].firstElementChild;
//   secondItem = document.getElementsByClassName("list")[0].children[1];//[0] dhara unorderlist and [1] dhara list er 1st indexer elements ka bujai.
//  thirdItem = document.getElementsByClassName("list")[0].children[2];
//   lastItem = document.getElementsByClassName("list")[0].lastElementChild;
// TweenLite.to(thirdItem, 1, {opacity: 0, y:50});
// })(jQuery);
// <---------2/css animation portion------------->
// (function($){
// 	var img = $('img'),
// 	 h2 = $('h2');
// // TweenLite.fromTo(img, 1, { x:-200}, {x:200} );
// // TweenLite.set(img, { x:-200} ); // set method nirdishto place a object ka set kore.
// TweenLite.from(img, 1, { x:-200} );
// TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1} );

// })(jQuery);
// <-----------3/easing-------------->
(function($){
	var img = $('img'),
	 h2 = $('h2');
// TweenLite.fromTo(img, 1, { x:-200}, {x:200} );
// TweenLite.set(img, { x:-200} ); // set method nirdishto place a object ka set kore.
TweenLite.from(img, 1, { x:-200, ease:Power2.easeOut} );
TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1} );

})(jQuery);