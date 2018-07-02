import { Applications } from '../types'

export const applications: Applications[] = [
  {
    name: 'discord/stable',
    group: ['social'],
    command: {
      macos: ['brew cask install discord'],
      ubuntu: [
        'cd ~/Downloads',
        'curl -sLo discord.deb https://discordapp.com/api/download?platform=linux&format=deb',
        'sudo dpkg -i discord.deb'
      ]
    }
  },
  {
    name: 'discord/ptb',
    group: ['social'],
    command: {
      macos: ['brew cask install discord-ptb'],
      ubuntu: [
        'cd ~/Downloads',
        'curl -sLo discord-ptb.deb https://discordapp.com/api/download/ptb?platform=linux&format=deb',
        'sudo dpkg -i discord-ptb.deb'
      ]
    }
  },
  {
    name: 'discord/canary',
    group: ['social'],
    command: {
      macos: ['brew cask install discord-canary'],
      ubuntu: [
        'cd ~/Downloads',
        'curl -sLo discord-canary.deb https://discordapp.com/api/download/canary?platform=linux&format=deb',
        'sudo dpkg -i discord-canary.deb'
      ]
    }
  },
  {
    name: 'slack',
    group: ['social'],
    command: {
      macos: ['brew cask install slack'],
      ubuntu: ['sudo snap install slack']
    }
  }
]
