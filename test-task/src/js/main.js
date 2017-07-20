var img = document.querySelectorAll('.carousel-img');
var box = document.querySelector('.carousel-hider');
var container = document.querySelector('.carousel');
var leftBtn = document.querySelector('.carousel-arrow-left');
var rightBtn = document.querySelector('.carousel-arrow-right');
var lpos = 0;

// moving block to left on ckick

leftBtn.addEventListener('click', function() {  
  lpos += 312;
box.style.left = lpos + 'px';
})
rightBtn.addEventListener('click', function() {  
  lpos -= 312;
box.style.left = lpos + 'px';  
  
})

// changing opacity for images on hover

img.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    item.classList.toggle('show');
  })
  item.addEventListener('mouseleave', function() {
    item.classList.toggle('show');
  })
})