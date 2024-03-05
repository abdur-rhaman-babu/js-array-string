const products = [
"laptop NovaBook Pro Ryzen Edition",
"StellarBook Ultra Intel core i7 Edition",
"QuantumEdge X AMD Ryzen 9 Edition",
"Laptop TitanBook Fusion Intel Core i9 Edition",
"ZenithBook Elite AMD Ryzen 7 Edition",
"Laptop InfinityNote Pro Intel Core i5 Edition",
"QuantumTower Ryzen 9 Edition",
"InfinityStation Intel Core i7 Edition",
"NexusDesktop AMD Ryzen 7 Edition",
"TitanForge Intel core i9 Edition",
]

const searching = 'laptop';
const output = [];
for ( product of products){
    if ( product.toLowerCase().indexOf(searching.toLowerCase()) !== -1){
        // output.push(product)
    }
}
console.log(output)

for ( product of products){
    if ( product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product)
    }
}
console.log(output)

for ( product of products){
    if ( product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}
console.log(output)


