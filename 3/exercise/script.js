console.log("JS has started")

import './style.css'
import * as THREE from 'three'
// import gsap from 'gsap'

const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/////////Object
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// const mesh = new THREE.Mesh(geometry, material)
//scene.add(mesh)

const group = new THREE.Group()
// group.scale.y = 1.5
scene.add(group)

//////Object - Cube Left

const cube1Left = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube1Left.position.set(-2, -1, 0)
cube1Left.rotation.x = Math.PI * -0.4
cube1Left.scale.y = 3
group.add(cube1Left)

const cube2Left = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube2Left.position.set(-2, -2.5, 0)
cube2Left.rotation.x = Math.PI * -0.4
cube2Left.scale.y = 3
group.add(cube2Left)

const cube3Left = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube3Left.position.set(-2, 1, 0)
cube3Left.rotation.x = Math.PI * -0.4
cube3Left.scale.y = 3
cube3Left.scale.z = 1.5
group.add(cube3Left)

//////Object - Cube Right

const cube1Right = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube1Right.position.set(2, -1, 0)
cube1Right.rotation.x = Math.PI * -0.4
cube1Right.scale.y = 3
group.add(cube1Right)

const cube2Right = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube2Right.position.set(2, -2.5, 0)
cube2Right.rotation.x = Math.PI * -0.4
cube2Right.scale.y = 3
group.add(cube2Right)

const cube3Right = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube3Right.position.set(2, 1, 0)
cube3Right.rotation.x = Math.PI * -0.4
cube3Right.scale.y = 3
cube3Right.scale.z = 1.5
group.add(cube3Right)

// Object - Cloud 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
const cloud1Mesh = new THREE.Mesh(geometry, material)
scene.add(cloud1Mesh)

cloud1Mesh.position.z = -10
cloud1Mesh.rotation.x = Math.PI * 0.5
cloud1Mesh.scale.x = 2

// //Object - Position
// mesh.position.set(0, 0, -3)

// //Object - Scale
// mesh.scale.y = 2

// //Object - Rotation
// mesh.rotation.x = Math.PI * 0.75

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
// camera.lookAt(new THREE.Vector3(0, 0, 0))
camera.position.z = 2
scene.add(camera)



// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// renderer.render(scene, camera)

///// Animate
// let time = Date.now()
const clock = new THREE.Clock()
// gsap.to(cloud1Mesh.position, { duration: 1, delay: 1, x: 2 })

const moveCloud = () =>
{
    // // Time technique 1
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // // Time technique 2
    const elapsedTime = clock.getElapsedTime()

    // Update object
    cloud1Mesh.position.x = elapsedTime -15
    

    // Render
    renderer.render(scene, camera)

    if (cloud1Mesh.position.x > 17){
        console.log('I am done')
        clock.start()
        console.log(cloud1Mesh.position.x)
    }

    window.requestAnimationFrame(moveCloud)
}

moveCloud()