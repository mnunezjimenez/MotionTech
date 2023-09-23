const video = document.getElementById('video');
// Access webcam
async function init() {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 3840, height: 2160, framerate: 60 } });
		handleSuccess(stream);
	} catch (e) {
		errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
	}
}

// Success
function handleSuccess(stream) {
	window.stream = stream;
	video.srcObject = stream;
}

// Load init
init();

