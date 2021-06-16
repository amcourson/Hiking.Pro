let fs = require('fs')

let trails = JSON.parse(fs.readFileSync('./scripts/trails.json'))
let cities = JSON.parse(fs.readFileSync('./scripts/us_cities.json'))
let existingCities = [] //  JSON.parse(fs.readFileSync('./existingCities.json'))
let trailsWithNotExistCities = [] //  JSON.parse(fs.readFileSync('./trailsWithNotExistCities.json'))

console.log('')

for (let i = 0; i < cities.length; i++) {
    let foundOne = false
    for (let j = 0; j < trails.length; j++) {
        if (
            (trails[j].city == cities[i].name) &&
            (trails[j].region == cities[i].state)
        ) {
            if (!foundOne) {
                existingCities.push(cities[i])
                foundOne = true
            }
            trails.splice(j, 1)
        }
    }
}
trailsWithNotExistCities = trails

for (let i = 0; i < trailsWithNotExistCities.length; i++) {
    for (let j = 0; j < cities.length; j++) {
        if (
            (trailsWithNotExistCities[i].city == cities[j].name) &&
            (trailsWithNotExistCities[i].region == cities[j].state)
        ) {
            console.log('WHAT.')
            console.log(cities[j], trailsWithNotExistCities[i])
        }
    }
}

fs.writeFileSync('trailsWithNotExistCities.json', JSON.stringify(trailsWithNotExistCities))
fs.writeFileSync('existingCities.json', JSON.stringify(existingCities))