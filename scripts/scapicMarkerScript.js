var cameraMarker = document.getElementById("marker1");
var entity = document.createElement('a-entity');
entity.setAttribute('geometry', {
  primitive: 'plane'
});
entity.setAttribute('material', {
  src: 'http://assets.scapic.com/j3u23iow000s4d8b441umszq/files/gb819zsj4goxeyl',
  side: 'double'
});
entity.setAttribute('position', "0 0.4 0");
entity.setAttribute('rotation', "-90 0 0");
cameraMarker.appendChild(entity);
