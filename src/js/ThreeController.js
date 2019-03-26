import * as THREE from 'three';
// import RotateCube from 'three-rotate-cube'
import RotateCube from './utils/ThreeRotateCube'

window.THREE = THREE;

export default class ThreeGraphic{
    constructor(){
        this.canvas = document.querySelector('#canvas');
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
        });
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        this.renderer.setPixelRatio(1);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);
        this.camera.position.set(0,2,5);
        this.camera.lookAt(0,0,0);
    
        this.rotCube = new RotateCube();
        this.scene.add(this.rotCube.obj);
        this.animate();
    }

    animate(){
        if(this.rotCube){
            this.rotCube.update();
        }
        this.renderer.render(this.scene,this.camera);
        requestAnimationFrame(this.animate.bind(this));
    }
}