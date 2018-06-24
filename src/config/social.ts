import { Config } from '../types'

export const install: Config[] = [
  {
    name: 'discord/stable',
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
    command: {
      macos: ['brew cask install slack'],
      ubuntu: ['sudo snap install slack']
    }
  }
]
