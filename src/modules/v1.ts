interface Platforms {
  [key: string]: (...values: unknown[]) => { platform: typeof key, payload: typeof values }
}

export const platforms: Platforms = new Proxy({}, {
  get: (_, platform) => (...values) => ({ platform, payload: values })
})

const error = {
  platform: (platform) => new TypeError(`Unexpected platform: '${platform}'`)
}

export class Application {
  application: string
  groups: Set<string>
  platforms: Set<string>
  private _dependencies: Map<string, Set<string>>
  private _symlinks: Map<string, Set<string>>
  private _commands: Map<string, Set<string>>

  constructor ({ name, groups, platforms }) {
    this.application = name
    this.groups = new Set(groups)
    this.platforms = new Set(platforms)
    this._dependencies = new Map(platforms.map((key) => [key, new Set()]))
    this._symlinks = new Map(platforms.map((key) => [key, new Set()]))
    this._commands = new Map(platforms.map((key) => [key, new Set()]))
  }

  private _set (property: string) {
    return (...values) => {
      const map = this[property]
      for (const dependency of values) {
        const set = map.get(dependency.platform)
        if (!set) throw error.platform(dependency.platform)
        set.add(dependency.payload)
      }
    }
  }

  dependencies = this._set('_dependencies')
  symlink = this._set('_symlinks')
  run = this._set('_commands')
}
