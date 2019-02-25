import { Application, platforms } from 'v1'

const installer = new Application({
  name: 'git',
  groups: ['development'],
  platforms: ['osx', 'windows', 'ubuntu']
})

installer.dependencies(
  platforms.osx('brew'),
  platforms.windows('curl'),
)

installer.symlink(
  platforms.osx('.gitconfig', '~/.gitconfig'),
)

installer.run(
  platforms.osx('brew install git'),
  platforms.ubuntu('sudo apt install git'),
  platforms.windows('curl https://github.com/git-for-windows/git/releases/download/v2.20.1.windows.1/Git-2.20.1-64-bit.exe'),
)

console.log(installer)
