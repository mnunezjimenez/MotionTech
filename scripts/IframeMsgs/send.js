
function sendReps(rep) {
	if (window && window.parent) { window.parent.postMessage({ rep: rep }, '*'); }
}

function sendAngle(angle, name) {
	if (window && window.parent) { window.parent.postMessage({ angle: angle, jointName: name }, '*'); }
}

function sendData() {
	if (window && window.parent) { window.parent.postMessage('jdeijdoejd', '*'); };

}

sendData();