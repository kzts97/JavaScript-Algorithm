function solution(array) {
    //minNumer
    let arrayCnt =0;
    let newArray = [];
    while(arrayCnt < array.length) {
        let minNumber =1000;
    
    //배열에서 최소값을 찾는것.
    let cnt =0;
    while (cnt < array.length) {
        if( minNumber > array[cnt]) {
            minNumber = array[cnt];
        }
        cnt = cnt + 1;
    }

    //minNumber <- 최소값
    newArray.push(minNumber);

    //기존배열에서 꺼내고, 기존배열에서 삭제.
    let cnt2 =0;
    while(cnt2 < array.length) {
        if(minNumber === array[cnt2]) {
            array[cnt2] = 1000;
            break;
        }
        cnt2 =cnt2 +1;       
    }
    arrayCnt = arrayCnt + 1;
    }
    return newArray[Math.floor(array.length / 2)];
}
