const init = () => {
  // シーンの作成
  const scene = new THREE.Scene();

  //   カメラの作成
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = -10;
  camera.position.y = 30;
  camera.position.z = 2;
  camera.lookAt(scene.position);

  //   レンダラーの作成
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(window.innerWidth, window.innerHeight);

  //   デバッグ用のツール
  const axes = new THREE.AxisHelper(20);
  scene.add(axes);

  // 球の追加
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 0;
  scene.add(sphere);

  document.getElementById('output').appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

window.onload = init();
