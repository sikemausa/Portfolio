  var path = document.querySelector('.path');
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition =
  'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 8s ease-in-out';
  path.style.strokeDashoffset = '0';
