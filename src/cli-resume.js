#!/usr/bin/env node
import program from 'commander'
import { green } from 'chalk'
import { playPause, getState } from './spotify'

program
.parse(process.argv)

playPause()
.chain(getState)
.fork(
  err => console.error(err),
  (s) => console.log(green('|', s.state))
)
