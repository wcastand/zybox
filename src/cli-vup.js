#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { volumeUp, getState } from './spotify'

program
.parse(process.argv)

volumeUp()
.chain(getState)
.fork(
  err => console.error(err),
  (s) => console.log(green('| Volume', s.volume, '/ 100'))
)
