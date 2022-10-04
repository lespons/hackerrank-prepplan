function sockMerchant(ar: number[]): number {
    // Write your code here

    const sockMap = ar.reduce((resultMap, currentVale) => {

        if (!resultMap[currentVale]) {
            resultMap[currentVale] = 0;
        }
        resultMap[currentVale] += 1;
        return resultMap;
    }, {} as { [sockColor: number]: number });

    return Object.values(sockMap).reduce((pairs, currentValue) => pairs + Math.floor(currentValue / 2), 0)
}


console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));