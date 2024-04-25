function solution(n) {
    var answer =0;
    let cnt = 1;
    while(true){
        if(cnt *6 % n ===0 ){
            return cnt;
        }
        cnt = cnt +1;
        
    }
    return answer;
}