import { spawn } from 'child_process'
import { Stream } from 'stream'

const onData = (stream: Stream, array: Array<Buffer>) => {
  stream.on('data', (data) => {
    if (typeof data === 'string') {
      array.push(Buffer.from(data, 'utf8'))
    } else {
      array.push(data)
    }
  })
}

type options = {
  buffer?: boolean
}

export const run = (command: string, { buffer = false }: options = {}) => new Promise((resolve, reject) => {
  const stderr: Buffer[] = []
  const stdout: Buffer[] = []
  const shell = spawn('/bin/sh', [], { shell: false })
  shell.on('error', reject)
  shell.on('exit', (code) => code === 0
    ? resolve(Buffer.concat(stdout).toString())
    : reject(Buffer.concat(stderr).toString())
  )
  onData(shell.stderr, stderr)
  onData(shell.stdout, stdout)
  shell.stdin.write(command)
  shell.stdin.end()
})
