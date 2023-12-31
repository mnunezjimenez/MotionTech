const vid = document.getElementById('video');
const canvas = document.getElementById('fpscanvas');
const skeletonCanvas = document.getElementById('skeleton');

var exerciseStep = 0;
var repCount = 0;
var startTest = false;

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "https://docs.google.com/uc?export=open&id=1YvfaQHakoPN-mT34EmFvkQO3NQzwvDxR";


const BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS = [
  [0, 1],
  [0, 4],
  [1, 2],
  [2, 3],
  [3, 7],
  [4, 5],
  [5, 6],
  [6, 8],
  [9, 10],
  [11, 12],
  [11, 13],
  [11, 23],
  [12, 14],
  [14, 16],
  [12, 24],
  [13, 15],
  [15, 17],
  [16, 18],
  [16, 20],
  [15, 17],
  [15, 19],
  [15, 21],
  [16, 22],
  [17, 19],
  [18, 20],
  [23, 25],
  [23, 24],
  [24, 26],
  [25, 27],
  [26, 28],
  [27, 29],
  [28, 30],
  [27, 31],
  [28, 32],
  [29, 31],
  [30, 32],
];