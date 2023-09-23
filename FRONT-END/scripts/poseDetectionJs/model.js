var model, detectorConfig, detector;

(async function init() {
		model = poseDetection.SupportedModels.BlazePose;
		detectorConfig = {
				runtime: 'mediapipe', // or 'tfjs'
				modelType: 'full',
				solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/pose',
		};
		detector = await poseDetection.createDetector(model, detectorConfig);
})();