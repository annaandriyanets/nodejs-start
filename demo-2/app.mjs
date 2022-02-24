// import {characters, greet} from '/.characters.mjs';

// for (const c of characters){
//     greet(c);
// }


//2)
// import * as char from '/.characters.mjs';

// for (const c of char.charcharacters){
//     char.greet(c);
// }

//3)
// import log, {characters, greet} from '/.characters.mjs';

// log();

//4)
// import log, * as char from '/.characters.mjs';

// log();

// for (const c of char.charcharacters){
//      char.greet(c);

//5)
// import log, {characters, greet as hello} from '/.characters.mjs';

// log();
 
// for (const c of charcharacters){
//     helo(c);
// }

//6) асинхронный импорт
async function main() {
    const {charcharacters, greet} = await import ('./characters.mjs')
    for (const c of charcharacters){
         greet(c);  
    }
}
 main();

 