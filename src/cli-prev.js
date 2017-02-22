#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { previous, getTrack } from './spotify'

program
.parse(process.argv)

previous()
.chain(getTrack)
.fork(
  err => console.error(err),
  (t) => console.log(green('| Playing', t.name, 'By', t.artist))
)
