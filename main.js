function sum(string) {
    const firstString = string.slice().charAt(0);
    console.log(firstString)
    return firstString.toUpperCase();

}

function reverse(string){
    const splitted = string.split("")
    const reversed = splitted.reverse()
    return reversed.join("")
}

const calculator = {
    add: (n1, n2) => {
        return n1 + n2
    },
    sub: (n1, n2) => {
        return n1 - n2
    },
    mul: (n1, n2) => {
        return n1 * n2;
    },
    div: (n1, n2) => {
        return n1 / n2
    }
}

function arrayCal(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    const avera = sum / arr.length;

    const min = Math.min.apply(Math, arr) 
    const max = Math.max.apply(Math, arr) 
    return {
        avarage:avera,
        min:min,
        max:max,
        length: arr.length
    }
}

  module.exports = {sum, reverse, calculator, arrayCal};