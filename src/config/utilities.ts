import { Config } from '../types'

export const install: Config[] = [
  {
    name: 'chrome',
    command: {
      macos: ['brew cask install google-chrome'],
      ubuntu: [
        'cd ~/Downloads',
        'curl -sLo google-chrome-stable.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb',
        'sudo dpkg -i google-chrome-stable.deb'
      ]
    }
  },
  {
    name: 'alfred',
    command: {
      macos: ['brew cask install alfred']
    }
  }
]
