import pkg from 'robotjs'
const { dragMouse, mouseToggle, getMousePos, moveMouseSmooth } = pkg;
export default function drawSquare (width){
    const mousePos = getMousePos();
    mouseToggle('up', 'right');
    moveMouseSmooth(mousePos.x + Number(width), mousePos.y);
    moveMouseSmooth(mousePos.x + Number(width), mousePos.y + Number(width));
    moveMouseSmooth(mousePos.x, mousePos.y + Number(width));
    moveMouseSmooth(mousePos.x, mousePos.y);
    mouseToggle('up');
}