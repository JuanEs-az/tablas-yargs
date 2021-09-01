const { options, number } = require('yargs');
const { createTableFile } = require('./helpers/multiplicar');
require('colors')

const argv = require('./config/yargs')
const { base, limit, show, filename } = argv

createTableFile( base, { limit, filename, show } )
    .then( filename => console.log( (filename + ' creado con éxito').green ) )
    .catch( err => console.error( 'Something went wrong...'.red ) )