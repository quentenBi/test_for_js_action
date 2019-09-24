const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('greet');
  console.log(`Hello ${name}`);
  core.setOutput('time', new Date().toTimeString());
} catch (err) {
  core.setFailed(err.message);
}
