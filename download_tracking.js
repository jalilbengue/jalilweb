document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.getElementById("download-button");

  downloadButton.addEventListener("click", function () {
    var downloadCount = localStorage.getItem("downloadCount");

    if (downloadCount === null) {
      downloadCount = 1;
    } else {
      downloadCount = parseInt(downloadCount) + 1;
    }

    localStorage.setItem("downloadCount", downloadCount);
  });
  var downloadCount = localStorage.getItem("downloadCount");

  var downloadCountElement = document.getElementById("download-count");
  if (downloadCountElement && downloadCount !== null) {
    downloadCountElement.textContent = downloadCount;
  }
});
