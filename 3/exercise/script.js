console.log("JS has started")

import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/////////Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)


scene.add(mesh)

//Object - Position
mesh.position.set(1, 2, -3)

//Object - Scale
mesh.scale.y = 3
mesh.scale.set(2, 3, 2)

//Object - Rotation
mesh.rotation.x = Math.PI * 0.75

///////// Axes helper

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//////////Size
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.lookAt(new THREE.Vector3(0, - 1, 0))
scene.add(camera)



// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)