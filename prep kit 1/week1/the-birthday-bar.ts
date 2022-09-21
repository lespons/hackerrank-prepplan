function birthday(s: number[], d: number, m: number): number {

    let divideCount = 0;
    for (let i = 0; i <= s.length - m; i++) {

        let summ = 0;
        for (let j = 0; j < m; j++) {
            summ += s[i + j];
        }

        if (summ === d) {
            divideCount++;
        }
    }
    return divideCount;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
console.log(birthday([4], 4, 1))