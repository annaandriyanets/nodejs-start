//const {a} = require ('./app.js');
console.log('загружено character.js')

/*let characters = [
    {name: 'Фродо', hasRing: false},
    {name: 'Бильбо', hasRing: false}
];

function stealRing(characters, owner) {
   return characters.map(c => {
        if (c.name == owner) {
            c.hasRing = true
        } else {
            c.hasRing = false
        }
    })
}
*/ 

//module.exports = {characters, stealRing}
module.exports = function log() {
    console.log('log')
}