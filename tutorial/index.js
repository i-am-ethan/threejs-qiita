const init = () => {
  // シーンの作成
  const scene = new THREE.Scene();

  //   カメラの作成
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  //   レンダラーの作成
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(window.innerWidth, window.innerHeight);

  //   デバッグ用のツール
  const axes = new THREE.AxisHelper(20);
  scene.add(axes);

  // 長方形の描画
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);

  //四角の描画
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  scene.add(cube);

  // 球の追加
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);

  document.getElementById('output').appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

window.onload = init();

const datControls = new (function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.03;
})();

const gui = new dat.GUI();
gui.add(datControls, 'rotationSpeed', 0, 0.5);
gui.add(datControls, 'bouncingSpeed', 0, 0.5);
