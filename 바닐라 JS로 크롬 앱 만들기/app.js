const calculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    div: function(a,b){
        return a/b;
    }
};

const plusNum = calculator.add(3,4);
const minusNum = calculator.minus(3,4);
const divNum = calculator.div(3,4);

console.log(plusNum, minusNum, divNum);