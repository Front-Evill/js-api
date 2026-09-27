const { removeBackground } = require("@imgly/background-removal");

const fileInput = document.getElementById("imgInput");
const preview = document.getElementById("previewImg");

fileInput.onchange = async function (e) {
  let file = e.target.files[0];
  if (!file) {
    return;
  }

  try {
    let result = await removeBackground(file);
    let url = URL.createObjectURL(result);
    preview.src = url;
  } catch (err) {
    console.log("something went wrong", err);
    alert("Couldn't remove the background, try another image");
  }
};
