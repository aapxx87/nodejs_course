// U7
const fs = require('fs')

// 1
const http = require('http')









// ////////////////////////////////
// FILES

// ! Blocking, synchronous way

// U8
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);

// U8
const textOut = `This is what we know about avocado: ${textIn} \n ${Date.now()}`

// U8
fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written');



// ! Non-blocking, asunchronous way

// U10
// fs.readFile('./txt/start.txt', 'utf-8', function (err, data) {
//   console.log(data);
// })

// console.log('will read file!');

// U10
// fs.readFile('./txt/start.txt', 'utf-8', function (err, data1) {
//   if (err) return console.log('File do not exist!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', function (err, data2) {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', function (err, data3) {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', function (err) {
//         console.log('Your file has been written');
//       })
//     })
//   })
// })

// console.log('will read file!');





// ////////////////////////////////
// SERVER

// 2 - создание сервера, используем метод модуля createServer()
// колбек в метода обладает двумя переменными: req, res

// сохраняем результат ответа метода в переменную

const server = http.createServer(function (req, res) {

  // console.log(req);

  // res - то есть отклик мы отдаем наружу
  // end - это самый простой метод, который отдает самый простой ответ от сервера
  res.end('Hello from the server!')

})

// теперь мы должны начать слушать сервер. Первым параметрмо идет порт сервера, вторым локал хост, в конце можем добавить колл бек которы будет консолить что сервер запущен
server.listen(8000, '127.0.0.1', function () {
  console.log('Listening to requests on port 8000');
})

