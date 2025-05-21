export const calcNums = (num1, num2, operator) => {
    switch(operator){
        case '+':
            return num1 + num2;
        
        case '-':
            return num1 - num2;
            
        case '*':
            return num1 * num2;
    }
}

export const generateMathOperator = () => { 
    const num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return '+'
        
        case 1:
            return '-'

        default:
            return '*'
    }
}

export const isEven = (num) => {
    if(num % 2 === 0){
        return true;
    } else{
        return false;
    }
}

export const gcd = (a, b) => {
    while (b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a
}

export const isPrime = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num !== 1
}

export const generateNumbers = () => {
    return Math.floor(Math.random() * 101);
}

export function genProgression(length = 10){
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const progressionArray = [];

    for(let i = 0; i < length; i++){
        progressionArray.push(num1 + i * num2);
    }
    
    return progressionArray;
}

export const hiddenNum = (arr) => {
    const positionPoints = Math.floor(Math.random() * arr.length)
    const newArr = arr.map((item, index) => (index !== positionPoints ? item : '..'))
  
    return [newArr, arr[positionPoints]]
}