export type Command = {
  macos?: string[]
  ubuntu?: string[]
}

type StringArray = [string, string]
export type Symlink = {
  macos?: StringArray[]
  ubuntu?: StringArray[]
}

export type Applications = {
  name: string
  command?: Command
  group?: string[]
  symlink?: Symlink
}

export type Group = {
  install: Applications[]
}
