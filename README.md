# Live Object Recognition with TensorFlow.js

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

This project demonstrates **real-time object recognition** in a webcam feed using **TensorFlow.js** and the **COCO-SSD** pre-trained model.

---

## Features

- 🔍 **Real-Time Detection**: Detects objects in a live webcam feed.
- 🎥 **Webcam Integration**: Uses browser APIs to access the user's camera.
- 🖼️ **Bounding Boxes**: Displays detected objects with bounding boxes and labels.
- 📊 **Confidence Scores**: Shows confidence percentages for detected objects.

---

## Setup and Usage

### 1. Clone the repository
```bash
git clone https://github.com/zaksiu12s/TF-LiveObjectDetection
cd TF-LiveObjectDetection
```

### 2. Install npm packages and run app with vite.
```bash
npm i
npm run dev
```

### 3. If you want to use cross ip on your local network you have to create key certificates with mkcert.
### 4. Then you have to change vite config file from production to commented section.
### 5. You should also have 2 files in the root level of folder. Something like localhost+2-key.pem and localhost+2-key.pem. Change the directory in vite config.
