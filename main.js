//GLOBAL VARIABLES
var logo = document.getElementById('logo');
var triangles = document.querySelectorAll('g > polygon');
var circles = document.getElementById('circles');
var plus_shapes = document.getElementById('_x2B__shapes');
var page_titles = document.getElementById('page_titles');
var navi_trigger = document.getElementById('navi-trigger');
var top_left = document.getElementById('top_left');
var bottom_right = document.getElementById('bottom_right');
var top_right = document.getElementById('top_right');
var bottom_left = document.getElementById('bottom_left');
var top_left_shapes = document.getElementById('top_left_shapes');
var bottom_right_shapes = document.getElementById('bottom_right_shapes');
var top_right_shapes = document.getElementById('top_right_shapes');
var bottom_left_shapes = document.getElementById('bottom_left_shapes');
var nav_shapes = document.querySelectorAll('svg.nav-bg > polygon');
var reverse_trigger = new Array(top_right, top_left, bottom_left, bottom_right);
var research = document.getElementById('research');
var designStudio = document.getElementById('designStudio');
var publications = document.getElementById('publications');
var projects = document.getElementById('projects');
var bool = true;
var bool1 = true;
var bool2 = true;
var bool3 = true;


// NAV CONTENT
// move the front page
jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$(navi_trigger).on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});



//NAV FILL & REVERSE ANIMATION
navi_trigger.onclick = function() {
	var nav_animation = new TimelineMax({
		yoyo: true
	});

	nav_animation.staggerFromTo(nav_shapes, 0.1, {
		opacity: 0,
		scale:0,
		transformOrigin: 'center center',
		// ease: Elastic.easeInOut,
	}, {
		opacity: 1,
		scale: 1,
		fill:'#6EBCDB',
		ease: Elastic.easeInOut,
	},
	 0.00475);

	//NAV REVERSE ANIMATION
	navi_trigger.onclick = function() {
		if (nav_animation.reversed()) {
			nav_animation.play();
		} else {
			nav_animation.reverse();
		}
	};
	
};



//LOGO ANIMATION 
var logo_animation = new TimelineMax ({

});

logo_animation.from(logo, 1.5, {
	css: {
		opacity: 0,
		scale: 0,
		transformOrigin: 'center center'
	},
	ease: Elastic.easeInOut
});



//TRIANGLE ANIMATION
var triangles_animation = new TimelineMax({
	yoyo: true
});

triangles_animation.staggerFromTo(triangles, 2, {
	opacity: 0,
	scale:0,
	transformOrigin: 'center center',
	// ease: Elastic.easeInOut,
}, {
	opacity: 1,
	scale: 1,
	ease: Elastic.easeInOut,
},
 0.00475);
	


//CIRLCES ANIMATION
var circle_animation = new TimelineMax({

});

circle_animation.from(circles, 3.5, {
	css: {
		opacity: 0,
		scale: 0,
		transformOrigin: 'center center'
	},
	ease: Elastic.easeInOut
});



//PLUS SHAPES ANIMATION
var plus_shapes_animation = new TimelineMax({

});

plus_shapes_animation.from(plus_shapes, 3.5, {
	css: {
		opacity: 0,
		scale: 0,
		transformOrigin: 'center center'
	},
	ease: Elastic.easeInOut
});



//PAGE TITLES ANIMATION
var page_titles_animation = new TimelineMax({
		
});

page_titles_animation.from(page_titles, 3.5, {
	css: {
		opacity: 0,
		scale: 0,
		transformOrigin: 'center center'
	},
	ease: Elastic.easeInOut
});



//REVERSE ANIMATION - For triangles, logo and page titles
function reverse() {
	logo_animation.reverse();
	triangles_animation.reverse();
	page_titles_animation.reverse();
};

//Click Animaitons
for (var i = 0; i < reverse_trigger.length; i++) {
	//constructor for the move animation
	var mov_animation = new TimelineMax( {

	});
	//top right circle and plus shape
	reverse_trigger[0].addEventListener = function() {
		if (bool) {
			// play the animation
			mov_animation.to ([top_left, bottom_right, bottom_left, top_left_shapes, bottom_right_shapes, bottom_left_shapes], 1, {
				css: {
					opacity: 0,
					scale: 0,
					transformOrigin: 'center center'
				},
				ease: Elastic.easeInOut
			});
			// moves the circle and the plus shape to the left
			mov_animation.to ([top_right, top_right_shapes], 0.5, {
				css: {
					x: "-925px",
					rotation: 45,
					transformOrigin: 'center center'
				}
			});
			//display text
			mov_animation.fromTo (publications, 1, {
				css: {
					display: 'none',
					opacity: 0
				}
			}, {
				css: {
					display: 'block',
					opacity: 1
				}
			});
			bool = false;
			console.log("1");
		} else {
			bool = true;
			mov_animation.reverse();
			console.log("2");
		}
		if (logo_animation.reversed() && triangles_animation.reversed() && page_titles_animation.reversed()) {
		    logo_animation.play();
		    triangles_animation.play();
		    page_titles_animation.play();
		} else {
		    logo_animation.reverse();
		    triangles_animation.reverse();
		    page_titles_animation.reverse();
		}
	};
	//top left circle and plus shape
	reverse_trigger[1].onclick = function() {
		if (bool) {
			mov_animation.to ([top_right, bottom_right, bottom_left, top_right_shapes, bottom_right_shapes, bottom_left_shapes], 1, {
				css: {
					opacity: 0,
					scale: 0,
					transformOrigin: 'center center'
				},
				ease: Elastic.easeInOut
			});
			mov_animation.to ([top_right, top_right_shapes], 1, {
				opacity: 0
			});
			// moves the circle and the plus shape to the left
			mov_animation.to ([top_left, top_left_shapes], 0.5, {
				css: {
					x: "-450px",
					rotation: 45,
					transformOrigin: 'center center'
				}
			});
			//display text
			mov_animation.fromTo (research, 0.5, {
				css: {
					display: 'none',
				opacity: 0
				}
			}, {
				css: {
					display: 'block',
					opacity: 1
				}
			});
			bool = false;
			console.log("1");
		} else {
			bool = true;
			mov_animation.reverse();
			console.log("2");
		}
		if (logo_animation.reversed() && triangles_animation.reversed() && page_titles_animation.reversed()) {
		    logo_animation.play();
		    triangles_animation.play();
		    page_titles_animation.play();
		} else {
		    logo_animation.reverse();
		    triangles_animation.reverse();
		    page_titles_animation.reverse();
		}

	};
	//bottom left circle and plus shape
	reverse_trigger[2].onclick = function() {
		if (bool) {
			mov_animation.to ([top_right, bottom_right, top_left, top_right_shapes, bottom_right_shapes, top_left_shapes], 1, {
				css: {
					opacity: 0,
					scale: 0,
					transformOrigin: 'center center'
				},
				ease: Elastic.easeInOut
			});
			// moves the circle and the plus shape to the left
			mov_animation.to ([bottom_left, bottom_left_shapes], 0.5, {
				css: {
					x: "-447px",
					y: "-480px",
					rotation: 45,
					transformOrigin: 'center center'
				}
			});
			//display text
			mov_animation.fromTo (projects, 0.5, {
				css: {
					display: 'none',
				opacity: 0
				}
			}, {
				css: {
					display: 'block',
					opacity: 1
				}
			});
			bool = false;
			console.log("1");
		} else {
			bool = true;
			mov_animation.reverse();
			console.log("2");
		}
		if (logo_animation.reversed() && triangles_animation.reversed() && page_titles_animation.reversed()) {
		    logo_animation.play();
		    triangles_animation.play();
		    page_titles_animation.play();
		} else {
		    logo_animation.reverse();
		    triangles_animation.reverse();
		    page_titles_animation.reverse();
		}
	};
	//bottom right circle and plus shape
	reverse_trigger[3].onclick = function() {
		if (bool) {
			mov_animation.to ([top_right, bottom_left, top_left, top_right_shapes, bottom_left_shapes, top_left_shapes], 1, {
				css: {
					opacity: 0,
					scale: 0,
					transformOrigin: 'center center'
				},
				ease: Elastic.easeInOut
			});
			mov_animation.to ([bottom_right, bottom_right_shapes], 0.5, {
				css: {
					x: "-925px",
					y: "-480px",
					rotation: 45,
					transformOrigin: 'center center'
				}
			});
			//display text
			mov_animation.fromTo (designStudio, 0.5, {
				css: {
					display: 'none',
				opacity: 0
				}
			}, {
				css: {
					display: 'block',
					opacity: 1
				}
			});
			bool = false;
			console.log("1");
		} else {
			bool = true;
			mov_animation.reverse();
			console.log("2");
		}
		if (logo_animation.reversed() && triangles_animation.reversed() && page_titles_animation.reversed()) {
		    logo_animation.play();
		    triangles_animation.play();
		    page_titles_animation.play();
		} else {
		    logo_animation.reverse();
		    triangles_animation.reverse();
		    page_titles_animation.reverse();
		}
	};
};



