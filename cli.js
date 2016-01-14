#!/usr/bin/env node
'use strict';

var meow = require('meow')
  , passwordExtension = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ password-extension [input]',
    '',
    'Options',
    '  --flag  Description (default: false)',
    '',
    'Examples',
    '  $ password-extension',
    '  unicorns',
    '  $ password-extension ponies',
    '  ponies'
  ]
}, {
  boolean: ['flag'],
  string: ['format'],
  default: {
    format: 'text'
  }
})

console.log(passwordExtension(cli.input[0] || 'unicorns'))
