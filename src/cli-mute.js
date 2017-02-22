#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { muteVolume } from './spotify'

program
.parse(process.argv)

muteVolume()
.fork(
  err => console.error(err),
  () => console.log(green('| Sound muted'))
)
