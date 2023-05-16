function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show-menu");
}

// logo javascript


function rotateImages() {
  const images = document.querySelectorAll('#imageContainer img');
  images.forEach((img, index) => {
    img.classList.add('rotate' + (index + 1));
  });
}

window.addEventListener('load', rotateImages);
