#!/usr/bin/env node
'use strict'
const spawn = require('child_process').spawn
    , acpi  = require('acpiclient')
    , path  = require('path')

const args = (function args() {
  let idx = process.argv.indexOf(path.resolve(__filename))
  return process.argv.slice(idx + 1)
})()

const limit = parseInt(args[0]) || 10
    , cmd   = args.slice(1)

if (!cmd.length)
  return console.log('Usage: battery-alert [remaining] [command]')

const checkRate = 60 * 1000  // every minute

var intervalId = setInterval(() => {
  acpi(function (err, data) {
    if (err) throw err
    console.info(data.batteries[0])

    if (data.batteries[0].status === 'Discharging' && data.batteries[0].charge < limit) {
      clearInterval(intervalId)
      console.info(`Alert triggered. Executing: ${cmd.join(' ')}`)
      spawn(cmd[0], cmd.slice(1), { env: process.env, stdio: 'inherit' })
    }
  })
}, checkRate)
