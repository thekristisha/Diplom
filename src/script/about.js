console.log('this is about page');
import '../style/about.css';
var elem = document.querySelector('.git-history__swiper');
var flkty = new Flickity( elem, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  draggable: true,
});