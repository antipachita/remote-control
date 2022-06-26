import pkg from 'robotjs'
const { dragMouse, mouseToggle, getMousePos } = pkg;
export default function drawCircle (radius) {
    const mousePos = getMousePos();

    for (let i = 0; i <= Math.PI * 2; i += 0.05) {
      const x = mousePos.x + (Number(radius) * Math.cos(i)) - (Number(radius));
      const y = mousePos.y + (Number(radius) * Math.sin(i));
      dragMouse(x, y);
      mouseToggle('down', 'left');
    }
    
    mouseToggle('up');
}