function greatestCommonDivisorGCD(a, b) {

    if (b) {
        return greatestCommonDivisorGCD(b, a % b)
    } else {
        console.log(a);
    }
}

greatestCommonDivisorGCD(15, 5)