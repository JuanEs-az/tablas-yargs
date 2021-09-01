const intersection = ( a1 , a2 ) => {
    const result = []
    a1.forEach(element => {
        if( a2.includes( element ) && !result.includes( element ) ) result.push( element )
    
    });
    return result
}

module.exports = {
    intersection
}