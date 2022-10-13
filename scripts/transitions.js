function setStartingPositions() {
  ['headshot', 'work']
    .forEach(elemClass => document.querySelector('.' + elemClass).classList.add('stage-left'));
  ['about']
    .forEach(elemClass => document.querySelector('.' + elemClass).classList.add('stage-right'));
}
setStartingPositions();

function slideElements() {
  ['headshot', 'about', 'work']
    .forEach(elemClass => document.querySelector('.' + elemClass).classList.remove('stage-left', 'stage-right'));
}

window.addEventListener('load', slideElements);
