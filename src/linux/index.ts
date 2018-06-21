import { spawn } from '../common/shell'

const shell = spawn('bash')
shell.run('echo "Hello World"')
shell.stop()
