#!/usr/bin/env node

import gameEven from '../src/games/gameEven.js';
import startGame from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
startGame(gameEven, description);
