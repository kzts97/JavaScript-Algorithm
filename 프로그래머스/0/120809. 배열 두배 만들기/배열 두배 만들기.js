function solution(numbers) {
    var answer = [];
    let cnt = 0;
for(let cnt=0; cnt < numbers.length; cnt = cnt+1){
    answer.push(numbers[cnt] * 2);
    console.log(cnt);
}
    
    return answer;
}