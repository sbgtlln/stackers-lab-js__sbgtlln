function sumOfTwoSmallestPositive(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    const smallest1 = sortedArr.find(num => num > 0);
    const smallest2 = sortedArr.find(num => num > smallest1);

    return smallest1 + smallest2;
}


