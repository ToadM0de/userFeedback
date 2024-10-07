var userName = "Ivy Ditzenberger";

function initListeners() {
  $(".save").on("click", (e) => {
    $(".modal").css("display", "none");
    console.log(`This is where you would put the code to handle save`);
  });

  $("#contact").on("click", (e) => {
    openModal(`Contact <span>us</span>`, true);
  });

  $("#open").on("click", (e) => {
    console.log("open modal");
    openModal(`Thank you ${userName} for <span>signing</span> up!!!`, false);
  });

  $(".close-modal").on("click", (e) => {
    console.log("click modal");
    $(".save").css("display", "block");
    $(".modal").css("display", "none");
  });
}

function openModal(feedbackText, needSaveButton) {
  $(".feedback").html(feedbackText);
  if (!needSaveButton) {
    $(".save").css("display", "none");
  }

  $(".modal").css("display", "flex");
}

$(window).on("load", function () {
  console.log("loaded");
  //$(".modal").css("display", "none");
});

$(document).ready(function () {
  initListeners();
});
