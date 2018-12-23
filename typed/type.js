jQuery(document).ready(function() {
  var type = new Typed('#type', {
    strings: [
      'I',
      'Love',
      'Snow!'
    ],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
  var title1 = new Typed('#cardTitle1', {
    strings: [
      'Older',
    ],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    cursorChar: ' ',
  });
  var title2 = new Typed('#cardTitle2', {
    strings: [
      'Middle',
    ],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    cursorChar: ' ',
  });
  var title3 = new Typed('#cardTitle3', {
    strings: [
      'Younger',
    ],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    cursorChar: ' ',
  });
});
