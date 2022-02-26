// const start = performance.now();
// setTimeout(() =>{
//     console.log(performance.now() - start);
//     console.log('прошла секунда');
// },1000)


// function myFunc(arg) {
//     console.log(`аргумент => ${arg}`);
// }
//
// setTimeout(myFunc, 1500, 'классный');

// const timerId = setTimeout(() =>{
//     console.log('BOOM!');
// },5000);
//
// setTimeout(() =>{
//     clearTimeout(timerId);
//     console.log('очищено')
// }, 1000)

// const intervalID = setInterval(() => {
//     console.log(performance.now())
// },1000)
//
// setTimeout(() =>{
//     clearInterval(intervalID);
//     console.log('очищено')
// }, 5000)



// console.log('перед');
//
// setImmediate(() => {
//     console.log('после всего')
// })
//
// console.log('после');


const timerId = setTimeout(() =>{
    console.log('BOOM!');
},5000);

timerId.unref(); //удаляет ссылку еа таймер и ничего не выведется

setImmediate(() => {
    timerId.ref();//ссылку на таймер вернет
})