import * as shell from './shell/run'

const run = async () => {
  console.log(await shell.run('echo "Hello World"'))
  console.log(await shell.run('curl -s https://google.com | grep 301'))
}

run()
  .catch(console.error)
