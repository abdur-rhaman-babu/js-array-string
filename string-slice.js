// split, join, slice, substr, substring
const sentence = 'Amar Sonar Bangla Ami Toamy Valobasi';
const result = sentence.split(' ')
// const result = sentence.split('a')


// slice 
const slice = sentence.slice(5,10)
const index = sentence.indexOf('A')
// console.log(index)
// console.log(slice)

// substr
const substrs = sentence.substr(5,5)
// console.log(substrs)
const substring = sentence.substring(5,9)
// console.log(substring)

// join
const joins = result.join(', ')
console.log(joins)

// concat 
const first = 'Hello';
const second = 'World'
const concats = first.concat(second).concat('ami')
console.log(concats)

