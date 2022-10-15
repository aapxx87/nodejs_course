// U7
const fs = require('fs')

// 1 - в качестве аргументов используем адрес файла, вторым параметром опредедяет кодировку символов. Нужно не только вызвать, но и сохранить в переменную результат выполенния функции
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn);


// 2 - создаем переменную в которую кладем строку, которую хотим записать
const textOut = `This is what we know about avocado: ${textIn} \n ${Date.now()}`

// 3 - первым аргументов указывам файл куда хотим записать, вторым сам текст или переменную, которая его содержит
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written');



