export default class ThreeRotateCube{
    constructor(){
        this.obj;
        this.createMesh();
    }

    createMesh(){
        let geo = new THREE.BoxGeometry(1,1,1);
        let mat = new THREE.MeshNormalMaterial();
        this.obj = new THREE.Mesh(geo,mat);
    }

    update(){
        this.obj.rotateY(0.05);
    }
}