async function getAnimeGirlImage() {
  const res = await fetch("https://api.waifu.pics/sfw/waifu");
  const data = await res.json();
  return data.url;
}

const imgElement = document.getElementById("animeImg");
const btn = document.getElementById("fetchBtn");

btn.onclick = async function () {
  try {
    let url = await getAnimeGirlImage();
    imgElement.src = url;
  } catch (err) {
    console.log("failed to fetch image", err);
    alert("couldn't load image, try again");
  }
};
