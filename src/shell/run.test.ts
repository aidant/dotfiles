import { expect } from 'chai'
import 'mocha'

import { run } from './run'
import { Stream, Readable } from 'stream';
import { streamToBuffer } from './stream-to-buffer';

const echo = 'Hello World!!'
let stdout: Stream
let stderr: Stream
let exit: Promise<number>

describe('run', () => {
  it(`returns two streams and a promise`, () => {
    const result = run(`echo "${echo}"`)
    stdout = result.stdout
    stderr = result.stderr
    exit = result.exit

    expect(stdout instanceof Stream).true
    expect(stderr instanceof Stream).true
    expect(exit instanceof Promise).true
  })

  it(`should exit with code 0`, async () => {
    const code = await exit
    expect(code).to.equal(0)
  })

  it(`stdout matches ${echo}`, async () => {
    const result = await streamToBuffer(stdout)
    expect(result.toString()).to.match(new RegExp(echo))
  })

  it(`stderr should be empty`, async () => {
    const result = await streamToBuffer(stderr)
    expect(result.toString()).to.match(/(?!.+)/)
  })
})
