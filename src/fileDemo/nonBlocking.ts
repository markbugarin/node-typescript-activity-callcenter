import * as fs from 'fs'
export default function nonBlocking(): void {
    console.log('~~ before read async')
    fs.readFile(
        'C:/Users/bugma/Desktop/node-typescript-starter/message.txt',
        (err, data) => {
            if (err) {
                console.error('~~ error from reading file', err)
                return
            }
            console.log('~~ message.txt', data.toString())
        }
    )
    console.log('~~ end')
}
