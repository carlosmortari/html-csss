var num = [5, 2, 8, 6, 3, 7]
num.sort()
/*
console.log(`Esses são os valores dentro do Vetor:`)
    for(c = 0;c <= num.length; c = c+1) {
        console.log(`A posição  ${c} do vetor tem o valor ${num[c]} `)
   }
   */

  /*  for(c = 0; c <= num.length; c = c+1) {
    console.log(`A posição ${c} do vetor tem o valor ${num[c]}`)
   }
   */

   for(c = 0; c < num.length; c++) {
    if( num[c]%2 == 1){
    console.log(`O valor ${num[c]} É impar`)
    }else {
        console.log(`O valor ${num[c]} É par`)
    }
   }
