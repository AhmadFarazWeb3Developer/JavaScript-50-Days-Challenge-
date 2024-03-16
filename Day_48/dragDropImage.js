const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("image-view");
const imageList = document.getElementById("imageList");
const dropImage = document.getElementById("drop-image");
inputFile.addEventListener("change", () => {
  uploadImage();
});

const uploadImage = () => {
  let imageLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imageLink})`;
  addImages(imageLink);
  setTimeout(() => {
    imageView.style.backgroundImage = "none";
  }, 500);
  imageView.style.display = "block";
};

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

const addImages = (imageLink) => {
  let imageContainer = document.createElement("div");
  let image = document.createElement("img");

  image.src = imageLink;
  image.style.width = "250px";
  image.style.height = "200px";
  image.style.borderRadius = "6px";
  imageContainer.appendChild(image);
  imageList.appendChild(imageContainer);
};
