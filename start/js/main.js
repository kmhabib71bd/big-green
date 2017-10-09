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
// TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1} ); // autoAlpha: 0, te opacity 0 hoy and visibility none thake.

// })(jQuery);
// <-----------3/easing-------------->
// (function($){
// 	var img = $('img'),
// 	 h2 = $('h2');
// // TweenLite.fromTo(img, 1, { x:-200}, {x:200} );
// // TweenLite.set(img, { x:-200} ); // set method nirdishto place a object ka set kore.
// TweenLite.from(img, 1, { x:-200, ease:SlowMo.ease} );
// TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1} );

// })(jQuery);

// <-----------4/Adding Callback functions-------------->
// (function($){
// 	var img = $('img'),
// 	 h2 = $('h2'),
// 	 i =0;
// // TweenLite.fromTo(img, 1, { x:-200}, {x:200} );
// // TweenLite.set(img, { x:-200} ); // set method nirdishto place a object ka set kore.
// TweenLite.from(img, 1, { 
// 				x:-200, 
// 				ease:SlowMo.ease, 
// 				onStart: onStart,
// 				onUpdate: onUpdate,
// 				onComplete: onComplete} ); //ekhane onStart holo function.
// // TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1} );
// function onStart(){
//  console.log('animation started');
// }
// function onUpdate(){
//  //console.log('animation is in progress');
//  h2.text(i++);//ekhane h2 variable text() function add kore shekhane i++ korano hoecha.
// }
// function onComplete(){
//  console.log('animation completed');
// }
// })(jQuery);

// <-----------5 /Animating Multiple Objects-------------->
// (function($){
// 	var img = $('img'),
// 	 h2 = $('h2'),
// 	 h1 = $('h1'),
// 	 intro =$('.intro'),
// 	 listItem = $('ul li');
// 	 tl = new TimelineLite();
//  // TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
//  //  TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
//  //   TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});
//  //    TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8});
// 	// TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay:1});
// 	tl.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
// 	.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 	.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 	.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 	.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');
// 	//timeline a delay use korte hoyna, ektar por arekta amnite chole ashbe.
// 	//ekhane '-=0.15' purboborti twin ka over lap kore -0.15s dhara.
// })(jQuery);



// <-------#6  /Adding Tweens To A Timeline-------?
// (function($){
// 	var img = $('img'),
// 	 h2 = $('h2'),
// 	 h1 = $('h1'),
// 	 intro =$('.intro'),
// 	 listItem = $('ul li');
// 	 tl = new TimelineLite();
//  // // TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
//  // //  TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
//  // //   TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});
//  // //    TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8});
// 	// // TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay:1});
// 	// tl.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
// 	// .from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '+=1')
// 	// .from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 3)//3 second por shuru hobe.
// 	// .from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2)
// 	// .from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2.5);
// 	// //timeline a delay use korte hoyna, ektar por arekta amnite chole ashbe.
// 	// //ekhane '-=0.15' purboborti twin ka over lap kore -0.15s dhara.
// 	// //+ dile oto second por ashbe. na dile oto shomoy por jeta age ashar age ashbe. 
// 	tl.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
// 	.add('intro')
// 	.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')//shob intro shate ashbe
// 	.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})//3 second por shuru hobe.
// 	.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')//intro ashar 3 second por ashbe ei h2
// 	.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');
// })(jQuery);


// <-------#7  Controlling Timeline Playback - #7-------?
(function($){
	var img = $('img'),
	 h2 = $('h2'),
	 h1 = $('h1'),
	 intro =$('.intro'),
	 listItem = $('ul li');
	 tl = new TimelineLite();
 // // TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
 // //  TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
 // //   TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});
 // //    TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8});
	// // TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay:1});
	// tl.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
	// .from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '+=1')
	// .from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 3)//3 second por shuru hobe.
	// .from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2)
	// .from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2.5);
	// //timeline a delay use korte hoyna, ektar por arekta amnite chole ashbe.
	// //ekhane '-=0.15' purboborti twin ka over lap kore -0.15s dhara.
	// //+ dile oto second por ashbe. na dile oto shomoy por jeta age ashar age ashbe. 
	tl.from(h1, 1, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
	.add('intro')
	.from(intro, 1, {y:-15, autoAlpha: 0, ease:Power1.easeOut})//shob intro shate ashbe
	.from(img, 1, {y:-15, autoAlpha: 0, ease:Power1.easeOut})//3 second por shuru hobe.
	.from(h2, 1, {y:-15, autoAlpha: 0, ease:Power1.easeOut})//intro ashar 3 second por ashbe ei h2
	.from(listItem, 1, {y:-15, autoAlpha: 0, ease:Power1.easeOut});
	tl.pause();

	$('#btnPlay').on('click',function(){
		tl.play();
	});
	$('#btnPause').on('click',function(){
		tl.pause();
	});
	$('#btnResume').on('click',function(){
		tl.resume();
	});
	$('#btnReverse').on('click',function(){
		tl.reverse();
	});
	$('#btnSpeedUp').on('click',function(){
		tl.timeScale(8);
	});
	$('#btnSlowDown').on('click',function(){
		tl.timeScale(0.5);
	});
	$('#btnSeek').on('click',function(){
		tl.seek(1);
	});
	$('#btnProgress').on('click',function(){
		tl.progress(0.5);//1 seconder half 50%
	});
	$('#btnRestart').on('click',function(){
		tl.restart();
	});
})(jQuery);