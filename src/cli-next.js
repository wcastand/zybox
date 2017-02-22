#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { next, getTrack } from './spotify'

program
.parse(process.argv)

next()
.chain(getTrack)
.fork(
  err => console.error(err),
  (t) => console.log(green('| Playing', t.name, 'By', t.artist))
)
