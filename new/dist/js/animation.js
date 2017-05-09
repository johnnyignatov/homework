window.sr = ScrollReveal();
sr.reveal('#logo', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.social__list', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
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
