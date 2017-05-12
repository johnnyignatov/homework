window.sr = ScrollReveal();
sr.reveal('#logo', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
sr.reveal('.social__list', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
sr.reveal('.promo', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.2
});
// sr.reveal('.nav', {
//   duration: 2000,
//   origin: 'top',
//   distance: '100px'
// });
sr.reveal('.news__block:nth-child(odd)', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  viewFactor: 0.2
});
sr.reveal('.news__block:nth-child(even)', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  viewFactor: 0.2
});

//-------PRODUCT CARDS---------//

sr.reveal('.card:nth-child(1)', {
  duration: 1000,
  origin: 'left',
  distance: '50px',
  viewFactor: 0.2
});
sr.reveal('.card:nth-child(3)', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  viewFactor: 0.2
});
sr.reveal('.card:nth-child(2)', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  viewFactor: 0.2
});
