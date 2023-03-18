function myEach(collection, alert) {
    const values = Object.values(collection)
    for (const element of values ){
        alert(element)
    } 
    return collection
}

function myMap(collection, callback) {
    const values = Object.values(collection)
    const newCollection = values.map(callback)
    return newCollection 
}

function myReduce(collection, callback, acc){
    let values = Object.values(collection)
    console.log(values)
    console.log(typeof acc)
    if (acc === undefined){
        acc = values[0]
        values = values.slice(1)
    }
    for (let i = 0; i < values.length; i ++){
        acc = callback(acc, values[i], values)
    }
    return acc
}

function myFind (collection, predicate) {
    const values = Object.values(collection)
    return values.find(predicate)
}

function myFilter(collection, predicate) {
    const values = Object.values(collection)
    return values.filter(predicate)
}

function mySize(collection) {
    const values = Object.values(collection)
    return values.length 
}

function myFirst(array, n = 0 ) {
    if (n === 0){
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if (n <= array.length - 1) {
        return array.slice(array.length - n, array.length)
    }else {
        return array[array.length - 1]
    }
}

function myKeys(object){
    let array = Object.keys(object)
    return array
}

function myValues(object) {
    let array = Object.values(object)
    return array
}

function mySortBy(array, callback) {
    let newArray = [...array]
    newArray.sort((a, b) => {
        if (callback(a) < callback(b)) {
          return -1;
        }
        if (callback(a) > callback(b)) {
          return 1;
        }
        return 0;
      })
      
     return newArray
}

function myFlatten(array, boolean, newArr=[]){
    if (boolean ===  true ){
        newArr.push(...array.flat(1))
    }else {
        newArr.push(...array.flat(Infinity))
    }
    return newArr
}
