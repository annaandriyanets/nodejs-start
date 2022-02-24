const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () =>{
    console.log('DB connected');
};

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.removeListener('connected', logDbConnection); 
//такое же как и выше (отключает одного лисенера)
//myEmmiter.off('connected', logDbConnection);
//отключает всех лисенеров
//myEmmiter.removeAllListeners('connected') 
myEmmiter.emit('connected');

myEmmiter.on('msg', (data) => { // on это повесить на какой-то эвент какую-то функцию
    console.log(`получил: ${data}`);
})
myEmmiter.msg('Привет! получи мое сообщение');

myEmmiter.once('off', () => {
    console.log('я вызвался 1 раз и не больше')
});
myEmmiter.emit('off');
myEmmiter.emit('off');//выведется 1 раз т.к. once для единственной передачи

console.log(myEmmiter.getMaxListeners());//по умолчанию число лисенеров 10
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());//а тут уже покажет 1, а не 10

console.log(myEmmiter.listenerCount('msg'));//посмотреть сколько лисенеров на этом эвенте
console.log(myEmmiter.listenerCount('off'))
console.log(myEmmiter.listeners('msg'))//выведет массив лисенеров (тут будет сейчас в массиве function(annonymous). Новые добавляются в конец и обрабатываются после тех кто объявлен раньше)

myEmmiter.prependListener('msg', ()=> { // в массив добаляет вначало новых лисенеров, нежели тот что был выше
    console.log('prepend')
})

 console.log(myEmmiter.eventNames()) //выведет тек событие на кот мы подписываемся 'msg'


 myEmmiter.on('error',(err) => {
     console.log(`произошла ошибка : ${err.message}`)
 })

 myEmmiter.emit('error', new Error ('BOOM!'))


