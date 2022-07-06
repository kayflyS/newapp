function printEvens(array) {
    let newArray =[]
    for(let x = 0; x < array.length;x++){
        for(let j = 0; j < array[j].length; j++){
            if(array[x][j] % 2 === 0){
                newArray.push(array[x][j])
            }
        }
    }
    return newArray
}

    const theArr = [[2,3],[4,5,6],[7,8],[9,10,11,12,13]]
    console.log(printEvens(theArr));