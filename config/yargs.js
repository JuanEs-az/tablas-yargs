const { intersection } = require('../helpers/utils')
module.exports = require('yargs')
            .options({
                'b':{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                },
                'l':{
                    alias: 'limit',
                    type: 'number',
                    default: 10
                },
                'f':{
                    alias: 'filename',
                    type: 'string'
                },
                's': {
                    alias: 'show',
                    type: 'boolean',
                    default: false
                }
            })
            .check(( {base, filename, limit}, options ) => {
                if( isNaN(base) ) throw 'la base tiene que ser un número';
                if( filename && intersection( filename.split(''), '&%$#=?¿'.split('') ).length > 0 ) throw 'filename no puede contener carácteres especiales'
                if( limit < 0 ) throw 'el limite debe ser positivo';

                return true;
            })
            .argv;
