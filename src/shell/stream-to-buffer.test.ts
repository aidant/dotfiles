import { expect } from 'chai'
import 'mocha'

import { streamToBuffer } from './stream-to-buffer'
import { Duplex } from 'stream'

const input = ['Hello ', 'World!!']
const stream = new Duplex()
let output: Buffer

stream.push(input[0])
stream.push(input[1])
stream.push(null)

describe('shell/stream-to-buffer', () => {
  it(`resolves with a buffer`, async () => {
    output = await streamToBuffer(stream)
    expect(output.constructor).to.equal(Buffer)
  })

  it(`contains the whole input`, () => {
    expect(output.toString('utf8')).to.equal(input.join(''))
  })
})
