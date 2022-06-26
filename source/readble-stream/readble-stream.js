import func from '../func/func.js'

export default function readable(duplex) {
  let str = ''

  return async function ()  {
    try {
      let data
      while (null !== (data = duplex.read())) {
        str += data
      }
      const [command, ...params] = str.split(' ')
      const [x, y] = params.map(Number)
      const runCommand = func()
      const result = await runCommand[command](x, y)
      duplex.write(`${command} ${result}\0`)
    } catch (error) {
        console.error(error.message)
    } 
      str = ''
  }
}