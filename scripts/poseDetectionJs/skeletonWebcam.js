function drawSkeleton(results){
	let canvas = skeletonCanvas;
	let ctx = canvas.getContext('2d', { willReadFrequently: true });
	let videoContentWidth = vid.videoWidth;
	let videoContentHeight = vid.videoHeight;
	let videoElementWidth = vid.clientWidth;
	let videoElementHeight = vid.clientHeight;
	let videoContentAspectRatio = videoContentWidth / videoContentHeight;
	let videoElementAspectRatio = videoElementWidth / videoElementHeight;
	let canvasWidth;
	let canvasHeight;
	if (videoElementAspectRatio > videoContentAspectRatio) {
		// Scenario A
		canvasHeight = videoElementHeight;
		canvasWidth = videoContentAspectRatio * canvasHeight;
	} else {
		// Scenario B
		canvasWidth = videoElementWidth;
		canvasHeight = canvasWidth / videoContentAspectRatio;
	}

	canvas.height = canvasHeight;
	canvas.width = canvasWidth;
	let headRemoveCounter = 0;
	for (var j of results.keypoints) {
		if (headRemoveCounter > 10) {
			const keypoint = j
			const x = keypoint.x;
			const y = keypoint.y;
			if (j.score > 0.7) {
				ctx.beginPath();
				ctx.arc(x, y, 8, 0, 2 * Math.PI);
				ctx.strokeStyle = "white";
				ctx.lineWidth = 10;
				ctx.stroke();
			}
		}
		headRemoveCounter++;
	}
				//Draw Esqueleton 
				let poseEsqueleto = results.keypoints.map((pose) => {
		return ({ x: pose.x, y: pose.y, z: pose.z, visibility: pose.score })
	})

	headRemoveCounter = 0;
	BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS.forEach((keypoints) => {
		//draw segment 
		if (headRemoveCounter > 8) {
			ctx.beginPath();
			ctx.moveTo(poseEsqueleto[keypoints[0]].x * 1, poseEsqueleto[keypoints[0]].y * 1);
			ctx.lineTo(poseEsqueleto[keypoints[1]].x * 1, poseEsqueleto[keypoints[1]].y * 1);
			ctx.lineWidth = 3.5;
			ctx.strokeStyle = "white";
			ctx.stroke();
		}
		headRemoveCounter++;
	});

	headRemoveCounter = 0;
	for (var j of results.keypoints) {
		if (headRemoveCounter > 10) {
			const keypoint = j
			const x = keypoint.x;
			const y = keypoint.y;
			if (j.score > 0.7) {
				ctx.beginPath();
				ctx.arc(x, y, 10, 0, 2 * Math.PI);
				ctx.fillStyle = "black";
				ctx.fill();
			}
		}
		headRemoveCounter++;
	}
}


function getFpsImage(){
	let canva = canvas;
	let ctx = canva.getContext('2d', { willReadFrequently: true });
	let videoContentWidth = vid.videoWidth;
	let videoContentHeight = vid.videoHeight;
	let videoElementWidth = vid.clientWidth;
	let videoElementHeight = vid.clientHeight;
	let videoContentAspectRatio = videoContentWidth / videoContentHeight;
	let videoElementAspectRatio = videoElementWidth / videoElementHeight;
	let canvasWidth;
	let canvasHeight;
	if (videoElementAspectRatio > videoContentAspectRatio) {
		// Scenario A
		canvasHeight = videoElementHeight;
		canvasWidth = videoContentAspectRatio * canvasHeight;
	} else {
		// Scenario B
		canvasWidth = videoElementWidth;
		canvasHeight = canvasWidth / videoContentAspectRatio;
	}
	canva.height = canvasHeight;
	canva.width = canvasWidth;

	if (isNaN(canvasHeight) || isNaN(canvasWidth)) {
		return;
	}
	ctx.drawImage(vid, 0, 0, canvasWidth, canvasHeight);
	let frameImg = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
	return frameImg;
};