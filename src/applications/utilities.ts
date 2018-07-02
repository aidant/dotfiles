import { Applications } from '../types'

export const applications: Applications[] = [
  {
    name: 'chrome',
    command: {
      macos: ['brew cask install google-chrome'],
      ubuntu: [
        'cd ~/Downloads',
        'curl -sLo google-chrome-stable.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb',
        'sudo dpkg -i google-chrome-stable.deb'
      ]
    },
    group: ['utilities']
  },
  {
    name: 'alfred',
    command: {
      macos: ['brew cask install alfred']
    },
    group: ['utilities']
  }
]
