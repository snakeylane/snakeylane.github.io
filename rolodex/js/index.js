var imgdex = document.getElementById('imgdex'),
    figs = imgdex.querySelectorAll('figure'),
    imgcount = figs.length;
    ranger.max = imgcount;
    ranger.value = 1;

for (var i=0; i < imgcount; i++) {
       var rotation = parseFloat(-5-5*(imgcount-i));
       figs[i].style.webkitTransform = 'rotateX(' + rotation + 'deg)';
       figs[i].style.transform = 'rotateX(' + rotation + 'deg)';
 }

document.querySelector('#imgdex figure:first-child figcaption').style.opacity = 1;

function updateImage(slider) {
	var currentimg = document.querySelector('#imgdex figure:nth-child('+slider.value+')');
	if (slider.oldvalue !== undefined) {
		var oldimg = document.querySelector('#imgdex figure:nth-child('+(slider.oldvalue)+')');
	} else {
		slider.oldvalue = imgcount;
		var oldimg = document.querySelector('#imgdex figure:nth-child('+(slider.oldvalue)+')');
	}
	if (slider.value < slider.oldvalue) {
		// going forwards
    var rotation = parseFloat(-5-5*(imgcount+1-slider.value));
		currentimg.style.webkitTransfo3m = 'rotateX('+rotation+'deg)';
		currentimg.style.transform = 'rotateX('+rotation+'deg)';
	}
	if (slider.value > slider.oldvalue) {
		// going backwards
		var rotation = parseFloat(-92 -  (imgcount - slider.value));
		oldimg.style.webkitTransform = 'rotateX(' + rotation + 'deg)';
		oldimg.style.transform = 'rotateX(' + rotation + 'deg)';
   }
   if (slider.value !== slider.oldvalue) {
	   currentimg.querySelector('figcaption').style.opacity = 1;
	   oldimg.querySelector('figcaption').style.opacity = 0;
   }
}
