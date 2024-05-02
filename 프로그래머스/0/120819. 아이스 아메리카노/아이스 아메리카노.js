function solution(money) {
    let coffecnt = Math.floor(money/ 5500);
    let moneyLeft = money % 5500;

    return [coffecnt , moneyLeft];
}
