import * as fs from 'fs'
export function blocking(): void {
    console.log('~~ before read sync')
    const data = fs.readFileSync(
        'C:/Users/bugma/Desktop/node-typescript-starter/message.txt'
    )
    console.log('~~ after read sync', data.toString())
    console.log('~~ end')
}
export default blocking
