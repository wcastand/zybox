#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { pause } from './spotify'

program
.parse(process.argv)

pause()
.fork(
  err => console.error(err),
  (t) => console.log(green('| Pause'))
)
