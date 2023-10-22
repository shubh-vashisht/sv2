import * as THREE from "three";
import nm from "../images/NormalMap.png";

function ThreeSkills() {
  const textureLoader = new THREE.TextureLoader();

  const normalTexture = textureLoader.load(nm);
  const canvas = document.querySelector("canvas.webgl");
  const scene = new THREE.Scene();
  const geometry = new THREE.SphereGeometry(0.6, 64, 64);
  const material = new THREE.MeshStandardMaterial();

  material.metalness = 0.9;
  material.roughness = 0.2;
  material.color = new THREE.Color(0x292929);
  material.normalMap = normalTexture;

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const pointLight1 = new THREE.PointLight(0xffffff, 1);
  pointLight1.position.x = 2;
  pointLight1.position.y = 3;
  pointLight1.position.z = 4;
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xff0000, 10);
  pointLight2.position.x = -2.9;
  pointLight2.position.y = 1.93;
  pointLight2.position.z = -1.92;
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0x0196fd, 10);
  pointLight3.position.x = 1.73;
  pointLight3.position.y = -1.25;
  pointLight3.position.z = -0.99;
  scene.add(pointLight3);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  let mouseX = 0;
  let mouseY = 0;

  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  let onDocumentMouseMove = (event) => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  };
  document.addEventListener("mousemove", onDocumentMouseMove);
  const clock = new THREE.Clock();

  const tick = () => {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    const elapsedTime = clock.getElapsedTime();

    sphere.rotation.y = 0.5 * elapsedTime;

    sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);
    sphere.rotation.z -= 0.5 * (targetY - sphere.rotation.x);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();
}
export default ThreeSkills;
