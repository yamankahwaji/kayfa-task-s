function analyzeRange(start, end) {
    if (start > end) {
        return "Invalid range";
    }

    let x = 0;
    let e = 0;
    let y = 0;
    let z = 0;

    for (let i = start; i <= end; i++) {   
        z += i;

        if (i % 2 === 0) {
            x++;
            y += i;
        } else {
            e++;
        }
    }

    return `Range: ${start} to ${end} | Even Count: ${x}, Odd Count: ${e}, Even Sum: ${y}, Total Sum: ${z}`;
}

let result = analyzeRange(1, 10);
console.log(result); 

let invalidResult = analyzeRange(10, 1);
console.log(invalidResult);