const { removeBackground } = require("@imgly/background-removal");

const imgElement = document.getElementById("animeImg");
const btn = document.getElementById("fetchBtn");

async function getAnimeGirlImage() {
  const res = await fetch("https://api.waifu.pics/sfw/waifu");
  const data = await res.json();
  return data.url;
}

async function urlToFile(url) {
  const res = await fetch(url);
  const blob = await res.blob();
  return blob;
}

btn.onclick = async function () {
  try {
    let imgUrl = await getAnimeGirlImage();
    let blob = await urlToFile(imgUrl);
    let noBgBlob = await removeBackground(blob);
    let finalUrl = URL.createObjectURL(noBgBlob);
    imgElement.src = finalUrl;
  } catch (err) {
    console.log("failed to process image", err);
    alert("couldn't load image, try again");
  }
};
