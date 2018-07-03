import { Readable } from 'stream'

export const streamToBuffer = (stream: Readable): Promise<Buffer> => new Promise((resolve) => {
  const buffers: Buffer[] = []

  stream.on('data', (data) => {
    if (typeof data === 'string') {
      buffers.push(Buffer.from(data, 'utf8'))
    } else {
      buffers.push(data)
    }
  })

  stream.on('end', () => {
    resolve(Buffer.concat(buffers))
  })
})
