#!/usr/bin/env node

import getUsername from '../src/cli.js';
import startGame from '../src/index.js';

const userName = getUsername();
startGame(userName, 'brain-progression');
