#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { unmuteVolume } from './spotify'

program
.parse(process.argv)

unmuteVolume()
.fork(
  err => console.error(err),
  () => console.log(green('| Sound unmuted'))
)
