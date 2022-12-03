import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'https://cdn.skypack.dev/three@0.130.0/build/three.module.js';
import * as ORBIT from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js';

const dp3 = ["3d/0/scene.gltf","3d/1/scene.gltf","3d/2/scene.gltf","3d/3/scene.gltf"];
const chosen3d = dp3[Math.floor(Math.random()*dp3.length)];

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(40,1);
camera.position.set(2,-10,1);
//Orbit
const controls = new ORBIT.OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance=10;
controls.maxPolarAngle = 3.14 / 2 ;
controls.update();

scene.background = new THREE.Color('black');
let light = new THREE.DirectionalLight(0xffff00,10);
scene.add(light);

let loader = new GLTFLoader();
loader.load(chosen3d,function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene,camera);
    function animate(){
        requestAnimationFrame(animate)
        controls.update();
        gltf.scene.rotation.y +=0.05;
        //gltf.scene.rotation.x +=0.1;
        // gltf.scene.rotation.z +=0.1;
        renderer.render(scene,camera);
    }
    animate()
});