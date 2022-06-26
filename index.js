import {httpServer} from './src/http_server/index.js';
import { WebSocketServer } from 'ws';
import { createWebSocketStream } from 'ws';
import readable from './source/readble-stream/readble-stream.js'

const HTTP_PORT = 3000;
const WSS_PORT = 8000;

httpServer.listen(HTTP_PORT).on('listening', () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`)
});

export const wss = new WebSocketServer({ port: WSS_PORT })
wss.on('connection', function(){
    return  (websocket) => {
    const socketStream = createWebSocketStream(websocket, {
      encoding: 'utf8',
      decodeStrings: false,
    })
    
    socketStream.on('readable', readable(socketStream))
  }
}());
