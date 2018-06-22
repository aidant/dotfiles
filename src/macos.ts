type script = string | string[]

interface versions {
  [key: string]: script
}

interface install {
  name: string
  if?: script
  command?: script
  validate?: script
  versions?: versions
  parent?: script
}

interface symlink {
  name: string
  symlink: string[]
}

export const install: install[] = [
  {
    name: 'brew',
    if: 'which brew',
    command: '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"',
    validate: 'brew -v'
  },
  {
    name: 'docker',
    command: [
      'brew install docker docker-compose',
      'brew cask install docker'
    ],
    parent: 'brew'
  },
  {
    name: 'discord',
    versions: {
      stable: 'brew cask install discord',
      ptb: 'brew cask install discord-ptb',
      canary: 'brew cask install discord-canary'
    },
    parent: 'brew'
  }
]

export const symlink: symlink[] = [
  {
    name: 'ssh/config',
    symlink: ['~/.ssh', '/ssh']
  }
]
