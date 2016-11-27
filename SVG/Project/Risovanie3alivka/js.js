$(document).ready(function() {
	var tool;
	$('#painter').on('click',function() {
		tool = 'painter';
	});
	$('#colorer').on('click',function() {
		tool = 'colorer';
	});

	var trigger = false;
	$('#svg').on('mousedown',function(e) {
  		var body = document.getElementById('svg');
		var x = getPosition(e).x;
  		var y = getPosition(e).y;
  		if (tool=='painter'){
	  		var pol = newEl('polyline',{'points': x + ',' + y});
	  		body.appendChild(pol);
			trigger = true;
		}
	});
	
	$('#svg').on('mousemove',function(e) {
		var x = getPosition(e).x;
  		var y = getPosition(e).y;
  		pol = document.getElementById('svg').lastChild;
 			
 		if(trigger){var coords = ',' + x + ',' + y;
	 		var attrs = pol.getAttribute('points');
	 		changeattrs = attrs + coords;
	 		pol.setAttribute('points',changeattrs);
 		}
			
	});

	$('#svg').on('mouseup',function() {
		trigger = false;
	});
	$(document).on('click',function(event) {
		if ($(event.target).closest("#svg").length) return;
    	trigger = false;
    	event.stopPropagation();
	});
	$('#svg').on('mouseleave',function() {
		trigger = false;
	});


	$('#svg').on('click',function() {
		if(tool == 'colorer'){

		}
	})





	function newEl(name,attr){  // Создаем новый элемент
  		var newSVG = document.createElementNS('http://www.w3.org/2000/svg', name);
  		newSVG.setAttribute('fill','rgba(255,255,255,0)');
  		for (var k in attr){
  			newSVG.setAttribute(k,attr[k]);
  		}
  		return newSVG;
  	}

	function getPosition(e) { // Определяем положние курсора
		var posx = 0;
		var posy = 0;

		if (!e) var e = window.event;

		if (e.pageX || e.pageY) {
		  posx = e.pageX;
		  posy = e.pageY;
		}
		else if (e.clientX || e.clientY) {
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		function getCoords(elem) {
		  var box = elem.getBoundingClientRect();

		  return {
		    top: box.top + pageYOffset,
		    left: box.left + pageXOffset
		  };
		}

		var svgbody = document.getElementById('svg');
		var coordTop = Math.floor(getCoords(svgbody).top);
		var coordLeft = Math.floor(getCoords(svgbody).left);

		return {
			x: posx - coordLeft,
			y: posy - coordTop
		}
	}

})




