export interface Command {
  macos?: string[]
  ubuntu?: string[]
}

export type Symlink = Array<[string, string]>

export interface Config {
  name: string
  command?: Command
  group?: string[]
  symlink?: Symlink
}

export interface Group {
  install: Config[]
}
