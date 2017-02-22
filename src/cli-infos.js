#!/usr/bin/env node
import program from 'commander'
import { blue, green, red, yellow, white } from 'chalk'
import { getTrack, getState } from './spotify'

program.parse(process.argv)

getTrack()
.fork(
  err => console.error(err),
  (t) => prettyTrack(t)
)

const prettyTrack = t => {
  console.log(white('------------------------------------------------------'))
  console.log(blue('|  Title:   '), t.name)
  console.log(yellow('|  Artist:  '), t.artist)
  if (t.album !== t.name) {
    console.log(green('|  Album:   '), t.album)
  }
  console.log(red('|  Duration:'), formatDuration(t.duration))
  console.log(white('|  Url:     '), t.spotify_url)
  console.log(white('------------------------------------------------------'))
}

const formatDuration = d =>
  d > 360000 ? `${hour(d)}:${min(d)}:${sec(d)}` : `${min(d)}:${sec(d)}`

const hour = d => leftpad(Math.round(d / 1000 / 60 / 60), 2, '0')
const min = d => leftpad(Math.round(d / 1000 / 60), 2, '0')
const sec = d => leftpad(Math.round(d / 1000 % 60), 2, '0')

function leftpad (str, len, ch) {
  str = String(str)
  let i = -1
  if (!ch && ch !== 0) ch = ' '
  len = len - str.length
  while (++i < len) {
    str = ch + str
  }
  return str
}
