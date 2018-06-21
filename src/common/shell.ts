import child from 'child_process'

export const spawn = (shell: 'bash' | 'sh') => {
  const app = child.spawn(`/bin/${shell}`, [], { shell: false })
  app.on('error', console.error)
  app.on('exit', (code) => (process.exitCode = code))
  app.stdout.pipe(process.stdout)
  app.stderr.pipe(process.stderr)

  const stop = () => app.stdin.end()
  const run = (command: string) => {
    app.stdin.write(command + '\n')
  }

  return {
    run,
    stop
  }
}
