// import { createWebSocketStream } from 'ws'
// import readable from '../readble-stream/readble-stream.js'



// export function connect() {
//   return async (websocket) => {
//     const socketStream = createWebSocketStream(websocket, {
//       encoding: 'utf8',
//       decodeStrings: false,
//     })
    
//     socketStream.on('readable', readable(socketStream))
//   }
// }