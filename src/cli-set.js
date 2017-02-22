#!/usr/bin/env node
import program from 'commander'
import { green, yellow } from 'chalk'
import { setVolume, isRepeating, isShuffling, toggleRepeating, toggleShuffling } from './spotify'

program
.option('-v, --volume <v>', 'Set the volume 0 - 100', parseInt)
.option('-r, --repeat', 'Toggle repeat')
.option('-s, --shuffle', 'Toggle shuffle')
.parse(process.argv)

if (program.volume) {
  setVolume(program.volume).fork(
    err => console.error(err),
    () => console.log(green('| Volume set to', program.volume))
  )
}

if (program.repeat) {
  toggleRepeating()
  .chain(isRepeating).fork(
    err => console.error(err),
    (r) => console.log(r ? green('| Repeat on') : yellow('| Repeat off'))
  )
}

if (program.shuffle) {
  toggleShuffling()
  .chain(isShuffling).fork(
    err => console.error(err),
    (r) => console.log(r ? green('| Shuffle on') : yellow('| Shuffle off'))
  )
}
