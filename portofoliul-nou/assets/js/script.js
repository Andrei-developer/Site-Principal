const changeLink = document.getElementById("changeLink");
const videoAside = document.getElementById("video-aside");
const changeButton = document.getElementById("changeButton");
const changeButtonMobile = document.getElementById("changeButtonMobile");

const goTopBtn = document.getElementById("go-top-btn");
const ScrollLeft = document.getElementById("scrollLeft");
const ScrollRight = document.getElementById("scrollRight");
const projects = document.getElementById("projects");

const ThisYear = document.getElementById("ThisYear");
const date = new Date();

changeButton.addEventListener("click", function () {
  const changeLinkAttribute = changeLink.getAttribute("href");
  const changeButtonAttribute = changeButton.getAttribute("class");
  const videoAsideAttribute = videoAside.getAttribute("src");
  setTimeout(() => {
    if (changeLinkAttribute === "assets/css/dark-light/dark.css") {
      changeLink.setAttribute("href", "assets/css/dark-light/light.css");
    } else {
      changeLink.setAttribute("href", "assets/css/dark-light/dark.css");
    }
    if (videoAsideAttribute === "assets/video/background-black.mp4") {
      videoAside.setAttribute("src", "assets/video/background-white.mp4");
    } else {
      videoAside.setAttribute("src", "assets/video/background-black.mp4");
    }
  }, 600);
  if (changeButtonAttribute === "dark") {
    changeButton.classList.remove("dark");
    changeButton.classList.add("light");
  } else {
    changeButton.classList.remove("light");
    changeButton.classList.add("dark");
  }
});

changeButtonMobile.addEventListener("click", function () {
  const changeLinkAttribute = changeLink.getAttribute("href");
  const changeButtonMobileAttribute = changeButtonMobile.getAttribute("class");
  const videoAsideAttribute = videoAside.getAttribute("src");
  setTimeout(() => {
    if (changeLinkAttribute === "assets/css/dark-light/dark.css") {
      changeLink.setAttribute("href", "assets/css/dark-light/light.css");
    } else {
      changeLink.setAttribute("href", "assets/css/dark-light/dark.css");
    }
    if (videoAsideAttribute === "assets/video/background-black.mp4") {
      videoAside.setAttribute("src", "assets/video/background-white.mp4");
    } else {
      videoAside.setAttribute("src", "assets/video/background-black.mp4");
    }
  }, 600);
  if (changeButtonMobileAttribute === "dark") {
    changeButtonMobile.classList.remove("dark");
    changeButtonMobile.classList.add("light");
  } else {
    changeButtonMobile.classList.remove("light");
    changeButtonMobile.classList.add("dark");
  }
});

const Btn = document.querySelectorAll(".Btn");

Btn.forEach(function (element) {
  element.addEventListener("click", function () {
    Btn.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    element.classList.add("active");
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

ScrollRight.addEventListener("click", function () {
  projects.scrollTo({
    left: projects.scrollLeft + 380,
    behavior: "smooth",
  });
});

projects.addEventListener("scroll", function () {
  if (projects.scrollLeft >= 10) {
    ScrollLeft.style.display = "block";
  } else {
    ScrollLeft.style.display = "none";
  }
});

ScrollLeft.addEventListener("click", function () {
  projects.scrollTo({
    left: projects.scrollLeft - 380,
    behavior: "smooth",
  });
});

setInterval(() => {
  const year = date.getFullYear();
  ThisYear.innerHTML = year;
}, 100);

const SubmitBtn = document.getElementById("SubmitBtn");
const nume = document.getElementById("nume");
const email = document.getElementById("email");
const message = document.getElementById("message");

SubmitBtn.addEventListener("click", function () {
  setTimeout(() => {
    nume.value = "";
    email.value = "";
    message.value = "";
  }, 500);
});

const navbar = document.getElementById("navbar");
const closeNavBar = document.getElementById("closeNavBar");
const butoanele = document.getElementById("butoanele");
const logoButtonsResponsive = document.getElementById(
  "logo-buttons-responsive"
);
navbar.addEventListener("click", function () {
  butoanele.style.display = "flex";
  butoanele.classList.add("apareeNav");
  butoanele.classList.remove("dispareNav");
  setTimeout(() => {
    navbar.style.display = "none";
    logoButtonsResponsive.style.display = "block";
  }, 300);
});

closeNavBar.addEventListener("click", function () {
  butoanele.classList.remove("apareeNav");
  butoanele.classList.add("dispareNav");
  setTimeout(() => {
    navbar.style.display = "block";
    logoButtonsResponsive.style.display = "none";
  }, 300);
});

window.addEventListener("scroll", function () {
  const homeBtn = document.querySelectorAll(".homeBtn");
  const aboutMeBtn = document.querySelectorAll(".aboutMeBtn");
  const projectsBtn = document.querySelectorAll(".projectsBtn");
  const fullContactBtn = document.querySelectorAll(".contactBtn");

  const homeHeight = document.getElementById("Home").clientHeight;
  const aboutMeHeight = document.getElementById("aboutMe").clientHeight;
  const projectsHeight = document.getElementById("projects").clientHeight;
  const fullContact = document.getElementById("fullContact");

  const scrollY = window.scrollY;

  function setActive(buttons) {
    [homeBtn, aboutMeBtn, projectsBtn, fullContactBtn].forEach((btnGroup) => {
      btnGroup.forEach((btn) => btn.classList.remove("active"));
    });
    buttons.forEach((btn) => btn.classList.add("active"));
  }

  if (scrollY <= homeHeight) {
    setActive(homeBtn);
  } else if (scrollY <= homeHeight + aboutMeHeight) {
    setActive(aboutMeBtn);
  } else if (scrollY <= homeHeight + aboutMeHeight + projectsHeight - 200) {
    setActive(projectsBtn);
  } else if (scrollY <= fullContact.offsetTop) {
    setActive(fullContactBtn);
  }
});

// function removeActive() {
//   setTimeout(() => {
//     if (window.scrollY) {
//       Btn.forEach((RemoveActive) => {
//         RemoveActive.classList.remove("active");
//       });
//     }
//   }, 500);
// }

// window.addEventListener("touchmove", removeActive);
// window.addEventListener("wheel", removeActive);
