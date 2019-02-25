// @ts-ignore
import fs from 'fs'
import { SourceTextModule, Linker } from './source-text-module'
import { createContext } from 'vm'
import path from 'path'

const cache: { [specifier: string]: Script } = {}

const linker: Linker = async (specifier) => {
  const module = specifier in cache
    ? cache[specifier]
    : cache[specifier] = new Script(path.resolve('build/modules', specifier + '.mjs'))

  await module.initialize()
  return module.source
}

export class Script {
  static sandbox = createContext(Object.create(null))

  source: SourceTextModule

  constructor (public specifier: string) {}

  async initialize () {
    const code = await fs.promises.readFile(this.specifier, { encoding: 'utf8' })
    this.source = new SourceTextModule(code, {
      context: Script.sandbox,
      url: path.resolve(this.specifier)
    })
    await this.source.link(linker)
  }

  async execute () {
    this.source.instantiate()
    return this.source.evaluate()
  }
}
