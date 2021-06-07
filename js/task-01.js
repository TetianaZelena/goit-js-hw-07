 const catigoriesAll = document.querySelectorAll('.item');
 console.log(catigoriesAll)
 console.log(`В списке ${catigoriesAll.length} категории.`)



const textTitle = [...catigoriesAll]
.map (element=>`Категория: ${element.children[0]
.textContent} Количество элементов: ${element.children[1].children.length}`)
.join('\n');
console.log (textTitle)
 

