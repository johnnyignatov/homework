var img = document.querySelectorAll('.img');
var box = document.querySelector('.box');
var container = document.querySelector('.container');
var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');
var lpos = 0;
leftBtn.addEventListener('click', function() {  
  lpos += 312;
// box.style.transform = "translate(-312px, 0)";
box.style.left = lpos + 'px';
// box.animate({left: lpos + 'px'}, 700);    
  
})
rightBtn.addEventListener('click', function() {  
  lpos -= 312;
// box.style.transform = "translate(-312px, 0)";
box.style.left = lpos + 'px';
// box.animate({left: lpos + 'px'}, 700);    
  
})
// if (lpos === 0) {
//   rightBtn.style.opacity = 0;
// } else if(lpos > 0) {
//   rightBtn.style.opacity = 1;

// }
 
img.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
  item.classList.toggle('show');
  })
  item.addEventListener('mouseleave', function() {
  item.classList.toggle('show');
  })
})
container.addEventListener('mouseleave', function () {
  img[1].style.opacity = 1;  
})
