function setStartingPositions() {
  ['headshot', 'tools']
    .forEach(elemClass => document.querySelector('.' + elemClass).classList.add('stage-left'));
  ['about', 'work']
    .forEach(elemClass => document.querySelector('.' + elemClass).classList.add('stage-right'));
}
setStartingPositions();

//function slideElements() {
  //['headshot', 'about', 'tools', 'work']
    //.forEach(elemClass => document.querySelector('.' + elemClass).classList.remove('stage-left', 'stage-right'));
//}

//window.addEventListener('load', slideElements);

function removeStartingPositions(e) {
  e.target.classList.remove('stage-left', 'stage-right');
}

['headshot', 'about', 'tools', 'work'].forEach(elemClass => {
  document.querySelector('.' + elemClass).addEventListener('animationend', removeStartingPositions);
})
