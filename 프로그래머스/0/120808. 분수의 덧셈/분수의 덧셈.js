function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;

    let minNumber; //작은수 구하기
    if(denum < num){ //분모< 분자 작을때 
        minNumber = denum;
    }else{
        minNumber = num;
    }
    
    while (true) {
        if(denum % minNumber === 0 ){
            if(num % minNumber === 0){
        //min number 은 최대공약수
            return [denum / minNumber, num / minNumber] //기약분수 
            }
        }
minNumber = minNumber -1;
    }
}
    //1.분모를 덧셈
    //2.분자,분모의 최대공약수로 나누기.
    //2-1.분자,분모 중 작은 수 찾기.
    //2-2.작은수를 분자,분모로 나누어보기.
    //2-2-1. 둘다 나누어 떨어지면 그 나눈수가 최대공약수
    //2-2-2.안 나누어떨어지면 작은수를 1줄이고 2-2로돌아가기.



