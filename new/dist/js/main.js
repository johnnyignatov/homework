function changeClass() {
  var className = document.getElementById('subnav').classList.add('subnav--visible');
}

function deleteClass() {
  document.getElementById('subnav').classList.remove('subnav--visible');
}

var imgFlag = 'img1';
function changeImage() {
  var img = document.getElementById('banner');
  if (imgFlag == 'img1') {
    img.src = 'img/image_2.png';
    imgFlag = 'img2';
  } else {
    img.src = 'img/cable-computer-sata-s-ata-40604.jpeg';
    imgFlag = 'img1';
  }
}

// setInterval('changeImage()', 3000);

function moveRight() {
  var arrow = document.getElementById('banner__right');
  arrow.id = 'banner__right--active';
}

function moveLeft() {
  var arrow = document.getElementById('banner__left');
  arrow.id = 'banner__left--active';
}

function moveBackRight() {
  var arrow = document.getElementById('banner__right--active');
  arrow.id = 'banner__right';
}
function moveBackLeft() {
  var arrow = document.getElementById('banner__left--active');
  arrow.id = 'banner__left';
}

// function changeBackground() {
//   document.getElementById('article').style.background = '#777';
// }
