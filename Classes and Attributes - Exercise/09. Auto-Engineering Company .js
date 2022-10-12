function autoEngineeringCompany(arr) {

    let register = {}

    arr.forEach(element => {
        let [brand, model, qty] = element.split(' | ')

        if (!register[brand]) {
            register[brand] = {}
        }
        if (!register[brand][model]) {
            register[brand][model] = 0
        }
        register[brand][model] += +qty
    });

    for (const brand in register) {
        console.log(brand);
        Object.entries(register[brand])
            .forEach(el => console.log('###' + el[0] + ' -> ' + el[1]))
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100', 'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10'])