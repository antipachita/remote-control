import pkg from 'robotjs'
const { dragMouse, mouseToggle, getMousePos, moveMouseSmooth } = pkg;
export default function drawRectangle (width,  length){
    const mousePos = getMousePos();
    mouseToggle('down', 'left');
    moveMouseSmooth(mousePos.x + Number(width), mousePos.y);
    moveMouseSmooth(mousePos.x + Number(width), mousePos.y + Number(length));
    moveMouseSmooth(mousePos.x, mousePos.y + Number(length));
    moveMouseSmooth(mousePos.x, mousePos.y);
    mouseToggle('up');
}