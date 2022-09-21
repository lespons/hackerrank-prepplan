function twoArrays(k: number, A: number[], B: number[]): string {
    // Write your code here
    const sortedA = [...A].sort((a, b) => a - b);
    const sortedB = [...B].sort((a, b) => -a + b);

    for (let i = 0; i < A.length; i++) {
        if (sortedA[i] + sortedB[i] < k) {
            return "NO"
        }
    }

    return "YES"
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]))
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]))