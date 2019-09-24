const core = require('@actions/core');
const { Toolkit } = require('actions-toolkit');
const tools = new Toolkit();

try {
  const name = core.getInput('greet');
  console.log(`Hello ${name}`);
  core.setOutput('time', new Date().toTimeString());

  console.log(JSON.stringify(tools.context), void 0, 2);
  console.log('\n\n');
  console.log(JSON.stringify(tools.github), void 0, 2);
} catch (err) {
  core.setFailed(err.message);
}
