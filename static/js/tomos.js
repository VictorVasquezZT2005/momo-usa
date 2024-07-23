document
.getElementById("view-pdf")
.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("manga-volumes-section").style.display =
    "none";
  document.getElementById("pdf-viewer-section").style.display = "block";
});

document
.getElementById("back-to-volumes")
.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("pdf-viewer-section").style.display = "none";
  document.getElementById("manga-volumes-section").style.display =
    "block";
});