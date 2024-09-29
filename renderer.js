const { ipcRenderer } = require("electron");
document.addEventListener("DOMContentLoaded", () => {
  const fs = require("fs");
  const path = require("path");
  const { gsap } = require("gsap");

  const studentList = document.getElementById("student-list");
  const studentDetailsOverlay = document.getElementById(
    "student-details-overlay"
  );
  const studentDetails = document.getElementById("student-details");
  const videoModal = document.getElementById("video-modal");
  const closeVideoButton = document.getElementById("close-video");
  const fullscreenVideo = document.getElementById("fullscreen-video");
  const closeDetailsButton = document.getElementById("close-details");
  const closeAppButton = document.getElementById("close-app-button2");
  const goToHomeBtn = document.getElementById("logout-btn");

  videoModal.style.display = "none";

  const toggleButton = document.getElementById("toggle-button");

  let videoIntervalId;
  const videoDuration = 110 * 1000; // 1 minute 50 seconds
  const videoDelay = 15 * 60 * 1000; // 15 minutes

  // Load student data
  const studentDataPath = path.join(__dirname, "natStudents.json");
  const students = JSON.parse(fs.readFileSync(studentDataPath, "utf-8"));

  // Populate student names and IDs
  students.forEach((student) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="student-item">
            <p class="frt-rw">${student.id}</p>
            <p class="snd-rw"><img src="${student.image}"/>${student.name}</p>
            <p class="thd-rw"><span><i class="ri-list-view"></i> View</span></p>
          </div>
        `;
    div.addEventListener("click", () => {
      showStudentDetails(student);
      pauseSlider();
      stopVideoLoop(); // Stop video loop if student details are shown
    });
    studentList.appendChild(div);
  });

  // Show student details
  function showStudentDetails(student) {
    studentDetails.innerHTML = `
          <div class="stdt-frame">
            <div class="stdt-img"><img src="${student.image}" alt=""/></div>
            <div class="stdt-cnt">
              <h1>Experience</h1>
              <h2>${student.name}</h2>
              <p>Year Group - 2024</p>
              <p class="mssg">${student.message}</p>
              <p class="achv">Achievements ---</p>
              <p class="st-awds">${student.details}</p>
            </div>
          </div>
        `;
    studentDetailsOverlay.style.display = "block";
    gsap.fromTo(
      studentDetailsOverlay,
      { opacity: 0, y: -50, scale: 0.9 },
      { duration: 0.7, opacity: 1, y: 0, scale: 1, ease: "power3.out" }
    );
    studentDetails.style.display = "block";
    closeDetailsButton.style.display = "block";
  }

  // Close student details
  closeDetailsButton.addEventListener("click", () => {
    gsap.to(studentDetailsOverlay, {
      duration: 0.7,
      opacity: 0,
      y: 50,
      scale: 0.9,
      ease: "power3.in",
      onComplete: () => {
        studentDetailsOverlay.style.display = "none";
      },
    });
    resumeSlider();
  });

  // Function to pause the slider
  function pauseSlider() {
    $(".student-list").slick("slickPause");
  }

  // Function to resume the slider
  function resumeSlider() {
    $(".student-list").slick("slickPlay");
  }

  // Function to show video modal
  function showVideoModal() {
    if (studentDetailsOverlay.style.display === "block") return; // Don't show video if student details are open

    videoModal.style.display = "block";
    gsap.fromTo(
      videoModal,
      { opacity: 0, scale: 0.9 },
      { duration: 0.7, opacity: 1, scale: 1, ease: "power3.out" }
    );
    fullscreenVideo.play();

    studentList.style.display = "none";
    // Hide modal after 1 minute 50 seconds
    setTimeout(hideVideoModal, videoDuration);
  }

  // Function to hide video modal
  function hideVideoModal() {
    gsap.to(videoModal, {
      duration: 0.7,
      opacity: 0,
      scale: 0.9,
      ease: "power3.in",
      onComplete: () => {
        videoModal.style.display = "none";
        studentList.style.display = "block";
        fullscreenVideo.pause();
        fullscreenVideo.currentTime = 0; // Reset video to start
      },
    });
  }

  // Start the video loop
  function startVideoLoop() {
    showVideoModal(); // Show immediately on start
    videoIntervalId = setInterval(showVideoModal, videoDelay);
    toggleButton.textContent = "Stop";
  }

  // Stop the video loop
  function stopVideoLoop() {
    clearInterval(videoIntervalId);
    toggleButton.textContent = "Play";
  }

  // Toggle button event listener
  toggleButton.addEventListener("click", () => {
    if (toggleButton.textContent === "Play") {
      startVideoLoop();
    } else {
      stopVideoLoop();
    }
  });

  // Close video modal
  closeVideoButton.addEventListener("click", hideVideoModal);

  // Initialize Slick Carousel for continuous scrolling
  $(document).ready(() => {
    $(".student-list").slick({
      vertical: true,
      infinite: true,
      slidesToShow: 10, // Show one slide at a time for a marquee effect
      slidesToScroll: 1,
      speed: 1500, // Adjust speed for smooth scrolling
      autoplay: true,
      autoplaySpeed: 0, // No delay between scrolls
      cssEase: "linear", // Linear easing for smooth scrolling
      pauseOnHover: false,
      draggable: true,
      swipe: true, // Allow swiping to change slides
      swipeToSlide: true,
    });
  });

  // Initialize the toggle button text
  toggleButton.textContent = "Play";

  goToHomeBtn.addEventListener("click", function () {
    window.location.href = "index.html"; // Navigate to the student list page
  });

  // Close the app button event listener
  closeAppButton.addEventListener("click", () => {
    ipcRenderer.send("close-app");
  });
});
