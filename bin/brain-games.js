#!/usr/bin/env node
import cli from '../src/cli.js'
import brainEven from './brain-even.js'

console.log('Welcome to the Brain Games!')

const user = cli()
brainEven(user)
