// console.log('init');
//
// setTimeout(() => {
//     console.log(performance.now(), 'таймер на 0 секунд')
// },0)
//
// console.log('final');
// сначала выполнилась макрозадача (синхронный код) с консоль лог, а потом микрозадача таймер

// console.log('init');
//
// setTimeout(() => {
//     console.log(performance.now(), 'таймер на 0 секунд')
// },0)
//
// setImmediate(() => {
//     console.log('immediate')
// })
//
// console.log('final');
//immediate выполняется в фазе check поэтому вывод ее консоль лог последний
//
// console.log('init');
//
// setTimeout(() => {
//     console.log(performance.now(), 'таймер на 0 секунд')
// },100)
//
// setImmediate(() => {
//     console.log('immediate')
// })
//
// console.log('final');
// из-за таймера в 100 мс его callback еще не попал в очередь и поэтому выполняется следующее,
// которое идет в check и потом возвращается и проходит заново всек фазы и находит таймер с истеченным временем


// const fs = require('fs');
//
// console.log('init');
//
// setTimeout(() => {
//     console.log(performance.now(), 'таймер на 0 секунд')
// },100)
//
// setImmediate(() => {
//     console.log('immediate')
// });
//
// fs.readFile(__filename, () => {
//     console.log('file readed');
// })
//
// console.log('final');
//чтение из файла работало дольше чем immediate
//
// const fs = require('fs');
//
// console.log('init');
//
// setTimeout(() => {
//     console.log(performance.now(), 'таймер на 0 секунд')
// },100)
//
// setImmediate(() => {
//     console.log('immediate')
// });
//
// fs.readFile(__filename, () => {
//     console.log('file readed');
// })
//
// setTimeout(() => {
//     for (let i = 0; i < 10000000000; i++) {
//
//     }
//     console.log('цикл окончен')
// },0)
//
// console.log('final');
//init
// final
// цикл окончен
// immediate
// 7557.977499999106 таймер на 0 секунд
// file readed
//перед выводом о том что цикл  окончен программа зависла и высчитывала весь цикл
// потому что он на нулевой задержке и ресурсоемкий


const fs = require('fs');

console.log('init');

setTimeout(() => {
    console.log(performance.now(), 'таймер на 100 секунд')
},100)

setImmediate(() => {
    console.log('immediate')
});

fs.readFile(__filename, () => {
    console.log('file readed');
})

setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {

    }
    console.log('цикл окончен')
    Promise.resolve().then(() => {
        console.log('promise2')
    });
    process.nextTick(() => console.log('tick2'))
},0)

Promise.resolve().then(() => {
    console.log('promise')
});

process.nextTick(() => console.log('tick'))

console.log('final');
//init
// final
// tick (между фазами event loop)(приоритет над промисами)
// promise(между фазами event loop)
// цикл окончен
// promise2(в таймере с циклом )
//tick2
// immediate
// 449.8749000001699 таймер на 100 секунд
// file readed