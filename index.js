'use strict'
const child_process = require('child_process')

const init = (file, ENV) => {
  const ARGS = Object.keys(ENV)
    .map((key) => `${key}=${ENV[key]}`)
    .join(' ')
  child_process.exec(`${ARGS} node ${file}`, (error, stdout, stderr) => {
    console.log(`${stdout}`)
    console.log(`${stderr}`)
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
  })
}

module.exports = init
