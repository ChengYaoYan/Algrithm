const chalk = require('chalk')

// paperFolding: 折纸问题
function paperFolding (n) {
  process(1, n, true)
}

function process (i, n, down) {
  if (i > n) {
    return
  }

  // down为true打印凹，down为false打印凸
  process(i + 1, n, true)
  console.log(down ? chalk.blue('凹') : chalk.red('凸'))
  process(i + 1, n, false)
}

paperFolding(6)
