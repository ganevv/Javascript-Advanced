function fruit(fruit, weightInGrams, price) {

    let weight = weightInGrams / 1000
    let money = price * weight

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

fruit('orange', 2500, 1.80)