import { Config, Symlink } from '../types'

export const install: Config[] = [
  {
    name: 'docker',
    command: {
      macos: [
        'brew install docker docker-compose',
        'brew cask install docker'
      ],
      ubuntu: [
        'sh -c "$(curl -fsSL https://get.docker.com)"',
        'sudo curl -L https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep "tag_name" | cut -d \'"\' -f 4)/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose',
        'sudo chmod +x /usr/local/bin/docker-compose'
      ]
    }
  },
  {
    name: 'node',
    command: {
      macos: [
        'brew install node',
        'brew install nvm'
      ],
      ubuntu: [
        'curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -',
        'sudo apt-get install -y nodejs',
        'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash'
      ]
    }
  },
  {
    name: 'mongodb-compass',
    command: {
      macos: ['brew cask install mongodb-compass']
    }
  },
  {
    name: 'iterm2',
    command: {
      macos: ['brew cask install iterm2']
    }
  },
  {
    name: 'vs-code',
    command: {
      macos: ['brew cask install visual-studio-code'],
      ubuntu: ['sudo snap install vscode']
    },
    symlink: [
      ['~/.vs-code', '/.vs-code']
    ]
  },
  {
    name: 'zsh',
    command: {
      macos: [
        'brew install zsh zsh-completions',
        'sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"',
        'chsh -s $(which zsh)'
      ],
      ubuntu: [
        'sudo apt install zsh',
        'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"',
        'chsh -s $(which zsh)'
      ]
    }
  },
  {
    name: 'fira-code',
    command: {
      macos: [
        'brew tap caskroom/fonts',
        'brew cask install font-fira-code'
      ]
    }
  },
  {
    name: 'ssh',
    command: {
      macos: ['brew install openssh']
    },
    symlink: [
      ['~/.ssh', '/.ssh']
    ]
  },
  {
    name: 'git',
    command: {
      macos: ['brew install git']
    },
    symlink: [
      ['~/.gitconfig', '/.gitconfig']
    ]
  }
]
