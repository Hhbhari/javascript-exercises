const sumAll = function(...args) {
    if( typeof(args[0])!=='number' || typeof(args[1])!=='number' || args[0]<0 || args[1]<0 ){
        return 'ERROR';
    }
    else{
        let sum=0;
        for(let i=1;i<=Math.max(...args);i++){
            sum+=i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
