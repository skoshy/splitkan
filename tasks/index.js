const { sh, cli } = require('tasksfile')
const PORT = 53000;

function hello(options, name = 'Mysterious') {
  console.log(`Hello ${name}!`)
}

function server() {
  sh(`react-native start --port=${PORT}`, { nopipe: true });
}

function run(options, platform = 'android') {
  sh(`react-native run-${platform} --port=${PORT}`, { nopipe: true }); // add --scheme "Blah" to specify a scheme
}

function resetNpmPackages() {
  sh(`shx rm -rf node_modules`);
  sh(`yarn install`);
}

cli({
  hello,
  server,
  run,
  resetNpmPackages,
})
