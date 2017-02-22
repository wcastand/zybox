#!/usr/bin/env node
import Task from 'data.task'
import Spotify from 'spotify-node-applescript'

export const playTrack = id =>
  new Task((reject, resolve) =>
    Spotify.playTrack(id, () => resolve(id)))

export const playTrackInContext = (id, ctx) =>
  new Task((reject, resolve) =>
    Spotify.playTrackInContext(id, ctx, () => resolve(id)))

export const getTrack = () =>
  new Task((reject, resolve) =>
    Spotify.getTrack((err, track) => err ? reject(err) : resolve(track)))

export const getState = () =>
  new Task((reject, resolve) =>
    Spotify.getState((err, state) => err ? reject(err) : resolve(state)))

export const jumpTo = (nb) =>
  new Task((reject, resolve) =>
    Spotify.jumpTo(nb, () => resolve(nb)))

export const play = () =>
  new Task((reject, resolve) =>
    Spotify.play(() => resolve(true)))

export const pause = () =>
  new Task((reject, resolve) =>
    Spotify.pause(() => resolve(true)))

export const playPause = () =>
  new Task((reject, resolve) =>
    Spotify.playPause(() => resolve(true)))

export const next = () =>
  new Task((reject, resolve) =>
    Spotify.next(() => resolve(true)))

export const previous = () =>
  new Task((reject, resolve) =>
    Spotify.previous(() => resolve(true)))


export const volumeUp = () =>
  new Task((reject, resolve) =>
    Spotify.volumeUp(() => resolve(true)))

export const volumeDown = () =>
  new Task((reject, resolve) =>
    Spotify.volumeDown(() => resolve(true)))

export const setVolume = (nb) =>
  new Task((reject, resolve) =>
    Spotify.setVolume(nb, () => resolve(nb)))

export const muteVolume = () =>
  new Task((reject, resolve) =>
    Spotify.muteVolume(() => resolve(true)))

export const unmuteVolume = () =>
  new Task((reject, resolve) =>
    Spotify.unmuteVolume(() => resolve(true)))

export const isRunning = () =>
  new Task((reject, resolve) =>
    Spotify.isRunning((err, isRunning) => err ? reject(err) : resolve(isRunning)))

export const isRepeating = () =>
  new Task((reject, resolve) =>
    Spotify.isRepeating((err, isRepeating) => err ? reject(err) : resolve(isRepeating)))

export const isShuffling = () =>
  new Task((reject, resolve) =>
    Spotify.isShuffling((err, isShuffling) => err ? reject(err) : resolve(isShuffling)))

export const setRepeating = (r) =>
  new Task((reject, resolve) =>
    Spotify.setRepeating(r, () => resolve(r)))

export const setShuffling = (s) =>
  new Task((reject, resolve) =>
    Spotify.setShuffling(s, () => resolve(s)))

export const toggleRepeating = () =>
  new Task((reject, resolve) =>
    Spotify.toggleRepeating(() => resolve(true)))

export const toggleShuffling = () =>
  new Task((reject, resolve) =>
    Spotify.toggleShuffling(() => resolve(true)))
