function generateDate() {
    const res = new Date();
    const timeAdded = Math.floor(Math.random() * 420_000_000_00);
    res.setTime(res.getTime() + timeAdded);
    return res;
}

function generateArray() {
    return new Array(42).fill(42).map(() => generateDate());
}

function shuffleArray(arr) {
    return arr.sort((a, b) => 0.5 - Math.random())
}

function pickArray() {
    const initialArray = generateArray();

    console.log({initialArray});

    const firstSlice = shuffleArray(initialArray).splice(0, 2);
    const secondSlice = shuffleArray(initialArray).splice(0, 3);
    const thirdSlice = shuffleArray(initialArray).splice(0, 7);

    console.log({firstSlice, secondSlice, thirdSlice, rest: initialArray});

    let slice;
    switch(Math.floor(Math.random() * 2) + 1) {
        case 1:
            slice = firstSlice;
            break;
        case 2:
            slice = secondSlice;
            break;
        case 3:
            slice = thirdSlice;
            break;
        default:
            // Should not happen
            slice = initialArray;
            break;
    }

    const result = shuffleArray(slice)[0];
    return result;
}
console.log("result", pickArray());
