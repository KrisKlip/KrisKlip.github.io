// init controller
var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3400})
					.setPin("#rocket")
					
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 10000})
					.setPin("#astronaut")
					
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#grass", 1, {transform:"translateY(10000px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 300})
					.setTween("#grass", 1, {opacity:0})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-change", duration: 6000})
					.setTween("#grass", 1, {opacity:1})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud1", 1, {transform:"translateY(9000px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud2", 1, {transform:"translateY(10000px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud3", 1, {transform:"translateY(8000px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud4", 1, {transform:"translateY(8230px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud5", 1, {transform:"translateY(10450px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#cloud6", 1, {transform:"translateY(8450px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-start", duration: 3600})
					.setTween("html", 1, {backgroundColor:"#000"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-change", duration: 3600})
					.setTween("html", 1, {backgroundColor:"#4CBAF7"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3600})
					.setTween("#bird1", 1, {transform:"translateY(5450px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3600})
					.setTween("#bird2", 1, {transform:"translateY(6450px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3600})
					.setTween("#bird3", 1, {transform:"translateY(5700px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3600})
					.setTween("#bird4", 1, {transform:"translateY(5100px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 3600})
					.setTween("#bird5", 1, {transform:"translateY(5780px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#stars1", 1, {transform:"translateY(6450px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#", duration: 7200})
					.setTween("#stars2", 1, {transform:"translateY(6850px)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});

$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-change", duration: 1000})
					.setTween("#stars1", 1, {opacity:0})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-change", duration: 1000})
					.setTween("#stars2", 1, {opacity:0})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#color-change", duration: 1000})
					.setTween("#rocket", 1, {transform:"rotate(-180deg)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#eject", duration: 3000})
					.setTween("#astronaut", 1, {transform:"rotate(-180deg)"})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#eject", duration: 3000})
					.setTween("#success", 1, {opacity:1})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
$(function () { // wait for document ready
							// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#eject", duration: 3000})
					.setTween("#balloons", 1, {opacity:1})	
					//({name: "1 (duration: 1200)"}) // add indicators (requires plugin)
					.addTo(controller);
});
// $(function () { // wait for document ready
// 							// build scene
// 	var scene = new ScrollMagic.Scene({triggerElement: "#trigger16", duration: 1000})	
// 					.setTween("#", 0.5, {transform:"rotate(50deg)"})		
// 					//({name: "22 (duration: 500)"}) // add indicators (requires plugin)
// 					.addTo(controller);
// });