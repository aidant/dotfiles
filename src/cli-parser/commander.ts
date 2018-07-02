import pkg from '../../package.json'
import commander from 'commander'

commander
  .version(pkg.version)

commander
  .command('install')
  .alias('i')
  .description('install and configure dotfiles')
  .arguments('git reposotory')
  .action(console.log)
