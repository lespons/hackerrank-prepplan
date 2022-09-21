function divideNumber(n: number): [number, number] {
    return [Math.floor(n / 2), n % 2 === 0 ? 0 : 1];
}

function calcBinary(n: number): number[] {
    const binary = new Array(32);
    binary.fill(0);

    const shortBinary = [];
    let dividedN = n;

    do {
        const [newDivisionResult, modal] = divideNumber(dividedN);
        dividedN = newDivisionResult;
        shortBinary.push(modal);
    } while (dividedN > 0)

    shortBinary.reverse();

    let index = binary.length - shortBinary.length;
    for (const n of shortBinary) {
        binary[index] = n;
        index++;
    }

    return binary;
}

function flipBinary(binary: number[]): number[] {
    return binary.map(n => n === 1 ? 0 : 1)
}

function calcDecimal(binary: number[]): number {
    return binary.reduce((result: number, binaryPart: number, index: number): number => {
        return result + binaryPart * Math.pow(2, binary.length - 1 - index);
    }, 0)
}

function flippingBits(n: number): number {
    // Write your code here
    return calcDecimal(flipBinary(calcBinary(n)));
}


console.log(flippingBits(35601423))