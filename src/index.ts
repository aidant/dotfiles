import { Script } from './script'
import fs from 'fs'
import path from 'path'

Script.sandbox.console = console

fs.promises.readdir('src/applications')
  .then(async (files) => {
    for (const file of files) {
      const module = new Script(path.join('src/applications', file))
      await module.initialize()
      await module.execute()
    }
  })
  .catch(console.error)
