#!/usr/bin/env node
import program from 'commander'

program
.version('0.0.1')
.command('play', 'Play track')
.command('pause', 'Pause track')
.command('resume', 'PlayPause track')
.command('next', 'Next track')
.command('prev', 'Prev track')
.command('vup', 'Volume up')
.command('vdown', 'Volume down')
.command('mute', 'Mute')
.command('unmute', 'Unmute')
.command('set', 'Set volume, repeat, shuffle, ...')
.command('infos', 'Get information for the current track', { isDefault: true })
.parse(process.argv)
