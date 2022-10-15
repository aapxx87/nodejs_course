// U7
const fs = require('fs')



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

// 1 - первый аргумент - путь до файла; затем идут call-back, который принимает два аргумента: ошибку и сами данные
// fs.readFile('./txt/start.txt', 'utf-8', function (err, data) {

//   console.log(data);

// })

// console.log('will read file!');

// 2
fs.readFile('./txt/start.txt', 'utf-8', function (err, data1) {

  // допустим файла не существует, тогда вернем ошибку, можно просимулировать изменив имя файла
  if (err) return console.log('File do not exist!');


  // читаем файл и получаем из него значение (строка)
  // затем вставляем это значение в имя пути чтения следующего файла

  fs.readFile(`./txt/${data1}.txt`, 'utf-8', function (err, data2) {

    console.log(data2);

    // читаем еще один файл

    fs.readFile('./txt/append.txt', 'utf-8', function (err, data3) {

      console.log(data3);

      // пишем скомпилированный из предыдущих результатов файл 

      // когда мы записываем в файл, то у нас только ошибка, данных нет, так как мы ничего не считывам

      fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', function (err) {

        console.log('Your file has been written');

      })

    })

  })

})

console.log('will read file!');


