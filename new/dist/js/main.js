function changeClass() {
  document.getElementById('subnav').classList.add('subnav--visible');
}

function deleteClass() {
  document.getElementById('subnav').classList.remove('subnav--visible');
}

var imgFlag = 'img1';
function changeImage() {
  var img = document.getElementById('banner');
    if (imgFlag == 'img1') {
    img.src = 'dist/img/image_2.png';
    imgFlag = 'img2';
  } else {
    img.src = 'dist/img/bg-1.jpeg';
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

function changeStyle() {
  document.getElementById('btn').classList.add('btn-primary');
  document.getElementById('btn').classList.remove('btn-default');
}
function changeStyleBack() {
  document.getElementById('btn').classList.remove('btn-primary');
  document.getElementById('btn').classList.add('btn-default');
}
