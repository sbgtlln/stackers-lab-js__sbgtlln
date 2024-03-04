function increaseWithPosition(arr) {
    return arr.map((num, index) => {
        const sum = num + (index + 1);
        return sum % 10;
    });
}


