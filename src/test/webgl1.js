import * as THREE from 'three'
let camera, scene, renderer;
let geometry, material, mesh;


function init() {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(1, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
})

let speed = 1
let plus = 1
function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01 * speed;
  mesh.rotation.y += 0.03 * speed;
  renderer.render(scene, camera);
  speed = plus + speed
  if (speed > 10) {
    plus = -1
  }
  if (speed < 1) {
    plus = 1
  }
  // console.log(speed);
}


export default () => {
  init();
  animate();
}