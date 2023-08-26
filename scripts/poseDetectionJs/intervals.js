/* Get image fps */
setInterval(function () {
	if (detector) {
		captureFrame();
	}
}, 100);
//set to 65 ms
