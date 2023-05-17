var num = [5, 2, 8, 6, 3, 7]
num.sort()

console.log(`Esses são os valores dentro do Vetor:`)
    for(c = 0;c <= num.length; c = c+1) {
        console.log(`A posição  ${c} do vetor tem o valor ${num[c]} `)
    }