function findPrimaryDiagonal(arr: number[][]): number[] {
    let diagonal: number[] = [];

    let j = 0;
    for (const row of arr) {
        let jj = j;
        let ii = 0;
        const possibleDiagonal = [];
        while (ii < row.length && jj < arr.length) {
            possibleDiagonal.push(arr[jj][ii]);
            jj++;
            ii++;
        }

        if (possibleDiagonal.length > diagonal.length) {
            diagonal = possibleDiagonal;
        }
        j++;
    }

    return diagonal;
}

function findInverseDiagonal(arr: number[][]): number[] {
    let diagonal: number[] = [];

    let j = 0;
    for (const row of arr) {
        let jj = j;
        let ii = row.length - 1;
        const possibleDiagonal = [];
        while (ii >= 0 && jj < arr.length) {
            possibleDiagonal.push(arr[jj][ii]);
            jj++;
            ii--;
        }

        if (possibleDiagonal.length > diagonal.length) {
            diagonal = possibleDiagonal;
        }
        j++;
    }

    return diagonal;
}

function calcSum(arr: number[]): number {
    return arr.reduce((summ, value) => summ + value, 0)
}

function diagonalDifference(arr: number[][]): number {
    return Math.abs(calcSum(findPrimaryDiagonal(arr)) - calcSum(findInverseDiagonal(arr)));
}

const arr1: number[][] = [
    [3],
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
console.log(diagonalDifference(arr1))