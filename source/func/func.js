import robot from 'robotjs'
import drawCircle from '../drawCircle/drawCircle.js'
import drawSquare from '../drawSquare/drawSquare.js'
import drawRectangle from '../drawRect/drawRect.js'

export default function func(){
  const { x, y } = robot.getMousePos()

  return {
    mouse_up: (_y) => {
      robot.moveMouse(x, y - _y)
    },
    mouse_down: (_y) => {
      robot.moveMouse(x, y + _y)
    },
    mouse_left: (_x) => {
      robot.moveMouse(x - _x, y)
    },
    mouse_right: (_x) => {
      robot.moveMouse(x + _x, y)
    },
    mouse_position: () => {
      return `${x},${y}`
    },
    draw_circle: (radius) => {
      drawCircle(radius)
    },
    draw_square: (width) => {
        drawSquare(width)
    },
    draw_rectangle: (width, length) => {
        drawRectangle(width, length)
    },
  }
}