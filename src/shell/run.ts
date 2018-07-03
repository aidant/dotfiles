import { spawn } from 'child_process'
import { Stream } from 'stream'

type options = {
  shell?: string
}

type result = {
  stdout: Stream
  stderr: Stream
  exit: Promise<number>
}

export const run = (
  command: string,
  { shell = '/bin/sh' }: options = {}
): result => {
  const child = spawn(shell, [], { shell: false, stdio: 'pipe' })
  child.stdin.write(command)
  child.stdin.end()
  const exit: Promise<number> = new Promise((resolve, reject) => {
    child.on('error', reject)
    child.on('exit', resolve)
    child.on('exit', () => {
      child.stdout.destroy()
      child.stderr.destroy()
    })
  })
  return { stdout: child.stdout, stderr: child.stderr, exit }
}
