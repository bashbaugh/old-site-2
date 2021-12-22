import { memo, useEffect, useRef } from 'react'
import Paper from 'paper'

const NUM_BLOBS = 80
const ROTATION_FACTOR = 0.003
const MAX_ROTATION_FACTOR_VARIANCE = 0.002
const DISTANCE_DECEL_FACTOR = 10
const SPAWN_RATE = 100

const tool = new Paper.Tool()

const random = (min: number, max: number) => Math.random() * (max - min) + min

class Blob {
  path: paper.Path
  spawnTime: number

  // Blob lives on a polar coordinate system
  origin: paper.Point
  angle: number = 0 // Radians
  distance: number = 5

  targetDistance: number
  rotationFactorVariance: number

  updatePath() {
    this.path.position.x = this.origin.x + Math.cos(this.angle) * this.distance
    this.path.position.y = this.origin.y + Math.sin(this.angle) * this.distance
  }

  constructor(angle: number) {
    this.origin = new Paper.Point(window.innerWidth / 2, window.innerHeight / 2)
    this.angle = angle
    const maxDistance = Math.min(window.innerWidth / 2, window.innerHeight / 2)
    this.targetDistance = random(0.2 * maxDistance, 0.9 * maxDistance)
    this.rotationFactorVariance = random(
      -MAX_ROTATION_FACTOR_VARIANCE,
      MAX_ROTATION_FACTOR_VARIANCE
    )
    this.spawnTime = new Date().getTime()

    this.path = new Paper.Path.Circle({
      center: this.origin,
      radius: Math.floor(Math.random() * 6) + 3,
      fillColor: '#08DC9022',
    })
  }

  update(delta: number) {
    const targetDiff = this.targetDistance - this.distance
    // Decelerate towards the target distance
    this.distance += 1 - Math.min(1, (1 / targetDiff) * DISTANCE_DECEL_FACTOR)
    const progress = this.distance / this.targetDistance
    this.angle += progress * ROTATION_FACTOR + this.rotationFactorVariance
    this.updatePath()
  }
}

function draw() {
  const blobs: Blob[] = []

  // tool.onMouseMove = (e: paper.ToolEvent) => {
  //   blobs.push(new Blob(e))
  // }

  let spawnAngle = 1
  const spawnInterval = setInterval(() => {
    blobs.push(new Blob(spawnAngle))
    spawnAngle += 1
    if (blobs.length === NUM_BLOBS) clearInterval(spawnInterval)
  }, SPAWN_RATE)

  Paper.view.onFrame = (e) => {
    for (const blob of blobs) blob.update(e.delta)

    // if (blobs.length > NUM_BLOBS) {
    //   blobs[0].path.remove()
    //   blobs.shift()
    // }
  }
}

const Background: React.FC = (props) => {
  const ref = useRef()

  useEffect(() => {
    Paper.setup(ref.current)

    draw()

    return () => {
      Paper.view.remove()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      {...props}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  )
}

export default memo(Background)
