import { expect } from 'chai'
import 'mocha'

import { run } from './run'

describe('run', () => {
  const echo = 'Hello World!!'
  it('should resolve with strings', async () => {
    const { stdout, stderr, code } = await run(`echo "${echo}"`)
    expect(stdout).to.equal(echo)
    expect(stderr).to.equal('')
    expect(code).to.equal(0)
  })

  it('should resolve with buffers', async () => {
    const { stdout, stderr, code } = await run(`echo "${echo}"`, { buffer: false })
    expect(stdout).to.equal(Buffer.from(echo, 'utf8'))
    expect(stderr).to.equal(Buffer.from('', 'utf8'))
    expect(code).to.equal(0)
  })
})
