const { sh, cli } = require('tasksfile')
const PORT = 53000;

function hello(options, name = 'Mysterious') {
  console.log(`Hello ${name}!`)
}

function server() {
  sh(`react-native start --port=${PORT}`);
}

cli({
  hello,
  server
})
