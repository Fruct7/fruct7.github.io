window.addEventListener("load", () => {
  setTimeout(()=>{
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    preloader.classList.add("fade-out");
    mainContent.classList.add("show");
  },2000);
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Telegram");
  telegramDiv.addEventListener("click", function () {
    window.open("https://t.me/TienMinh294", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Github");
  telegramDiv.addEventListener("click", function () {
    window.open("https://github.com/Fruct7", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Facebook");
  telegramDiv.addEventListener("click", function () {
    window.open("https://facebook.com/TienMinh294", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Instagram");
  telegramDiv.addEventListener("click", function () {
    window.open("https://www.instagram.com/glucozo007/", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Tiktok");
  telegramDiv.addEventListener("click", function () {
    window.open("https://tiktok.com/@_tiennminhh", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Youtube");
  telegramDiv.addEventListener("click", function () {
    window.open(
      "https://www.youtube.com/channel/UCCgn4tXIBfOmYu1jaLSMW4w",
      "_blank"
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var telegramDiv = document.querySelector(".Zalo");
  telegramDiv.addEventListener("click", function () {
    window.open("https://zalo.me/0987790643", "_blank");
  });
});
