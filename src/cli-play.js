#!/usr/bin/env node
import program from 'commander'
import { green, red } from 'chalk'
import { play, playTrack, playTrackInContext, getTrack } from './spotify'

program
.option('-t, --track <id>', 'Play a specific track')
.option('-c, --context <id>', 'Play in a specific context')
.parse(process.argv)

if (program.context && !program.track) {
  console.log(red('| Need to specify a track id'))
} else if (program.track && program.context) {
  playTrackInContext(program.track, program.context)
  .chain(getTrack)
  .fork(
    err => console.error(err),
    (t) => console.log(green('| Start to play', t.name))
  )
} else if (program.track) {
  playTrack(program.track)
  .chain(getTrack)
  .fork(
    err => console.error(err),
    (t) => console.log(green('| Start to play', t.name))
  )
} else {
  play()
  .chain(getTrack)
  .fork(
    err => console.error(err),
    (t) => console.log(green('| Start to play', t.name))
  )
}
