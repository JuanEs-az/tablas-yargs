const fs = require( 'fs' );
require('colors')

const printTable = ( n, limit = 10 ) => {
    let output = '';
    let colorOutput = ''
    const colortitle = `TABLA DEL NUMERO: ${n}`.rainbow;
    const title = `TABLA DEL NUMERO: ${n}`;
    for( let i = 1; i <= limit; i++ ){
        colorOutput += `${ n } ${ 'x'.green.bold } ${ i } = ${ (n * i + '').yellow }\n`;
        output += `${ n } x ${ i } = ${ n * i }\n`;
    }
    return {
        full: `${ title }\n\n${ output }`,
        colorFull: `${ colortitle }\n\n${ colorOutput }`

    };
};
const createTableFile = async( n, { limit = 10 ,filename = `tabla-${ n }`, show = false }) => {
    try{
        const table = printTable(n, limit);
        fs.writeFileSync( 'data/' + filename + '.txt' , table.full );
        if ( show ) console.log( table.colorFull );
        
        return filename;
    }catch( err ){
        throw err;
    }
}

module.exports = {
    createTableFile, 
    printTable
}