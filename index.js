import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

const videoElement = document.getElementById("webcam");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Get user media (camera)
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    // Set the video element's source to the webcam stream
    videoElement.srcObject = stream;
    videoElement.onloadeddata = () => {
      // Start detecting objects once the video is loaded
      detectObjects();
    };
  })
  .catch((error) => {
    console.error("Error accessing the webcam: ", error);
  });

// Load the coco-ssd model
async function detectObjects() {
  const model = await cocoSsd.load();
  console.log("Model loaded");

  // Continuously detect objects in each frame
  function detectFrame() {
    model.detect(videoElement).then((predictions) => {
      // Clear previous drawing
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Set canvas size equal to video element size
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;

      // Draw bounding boxes and labels on the canvas
      predictions.forEach((prediction) => {
        context.beginPath();
        context.rect(
          prediction.bbox[0],
          prediction.bbox[1],
          prediction.bbox[2],
          prediction.bbox[3]
        );
        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.fillStyle = "red";
        context.stroke();
        context.fillText(
          `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
          prediction.bbox[0],
          prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
        );
      });

      // Call the function again to process the next frame
      requestAnimationFrame(detectFrame);
    });
  }

  // Start the live object detection loop
  detectFrame();
}
