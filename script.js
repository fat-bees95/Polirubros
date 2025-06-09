function toggleText(imageElement) {
  const textDiv = imageElement.nextElementSibling;
  if (textDiv.style.display === "block") {
    textDiv.style.display = "none";
  } else {
    textDiv.style.display = "block";
  }
}