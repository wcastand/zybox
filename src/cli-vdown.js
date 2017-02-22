#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { volumeDown, getState } from './spotify'

program
.parse(process.argv)

volumeDown()
.chain(getState)
.fork(
  err => console.error(err),
  (s) => console.log(green('| Volume', s.volume, '/ 100'))
)
