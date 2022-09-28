function townPopulation(list) {

    const res = {}

    for (const town of list) {
        let tokens = town.split('<->')
        let name = tokens[0]
        let population = +tokens[1]
        if (res[name] != undefined) {
            population += res[name]
        }
        res[name] = population
    }
    for (let [name, pop] of Object.entries(res)) {
        console.log(`${name}: ${pop}`);
    }
}

townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])