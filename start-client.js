const options = {
  cwd: 'client',
  shell: true,
  stdio: 'inherit'
}
require('child_process').spawn('npm',['start'],options)


