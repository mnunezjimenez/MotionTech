function exerciseDetect(poses, exercise) {
	const jointData = exercise.exData;
	poses = poses.keypoints3D;
	let stepDone = [];

	jointData.map((joint, idx) => {
		let angle = getAngle(poses[joint.keypoints[0]], poses[joint.keypoints[1]], poses[joint.keypoints[2]]);
		showAngles(angle, joint.name)
		if (angle <= jointData[idx].reachValues[exerciseStep] + 10
			&& angle >= jointData[idx].reachValues[exerciseStep] - 10 && exerciseStep != exercise.exStep) {
			stepDone.push(true);
		}
		else {
			stepDone.push(false);
		}
	});
	return stepDone;
}

function getAngle(vector1, vector2, vector3) {
	let angle = 0, angle2D = 0;

	let x1 = vector1.x, y1 = vector1.y, z1 = vector1.z;
	let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
	let x3 = vector3.x, y3 = vector3.y, z3 = vector3.z;
	//center x 
	x1 = x1 - x2;
	x3 = x3 - x2;
	//center y
	y1 = y1 - y2;
	y3 = y3 - y2;
	//center z
	z1 = z1 - z2;
	z3 = z3 - z2;

	angle = Math.acos((x1 * x3 + y1 * y3 + z1 * z3) / (Math.sqrt((Math.pow(x1, 2) + Math.pow(y1, 2) + Math.pow(z1, 2))) * Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2) + Math.pow(z3, 2))));
	angle = parseFloat(((angle * (180 / Math.PI))).toFixed(0));
	return angle;
}