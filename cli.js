#!/usr/bin/env node
'use strict';
const alfyLink = require('./');

const npmGlobal = process.env.npm_config_global;

if (npmGlobal === '') {
	// Prevent linking if the script was part of a non-global npm (install) command
	process.exit(0);
}

// Only transform if `alfred-link` is called from `npm -g`
alfyLink({transform: npmGlobal}).catch(err => {
	console.error(err);
	process.exit(1);
});
