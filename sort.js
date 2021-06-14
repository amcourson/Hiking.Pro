let fs = require('fs')

let trails = JSON.parse(fs.readFileSync('./scripts/trails.json'))
let cities = JSON.parse(fs.readFileSync('./scripts/us_cities.json'))
let existingCities = []

function aincludes(arr, val) {
    if (arr.length == 0) return false
    for (let e of arr) {
        if ((e.city == val.city && e.region == val.region)) {
            return true
        }
    }
    return false
}

for (let trail of trails) {
    if (!aincludes(existingCities, { city: trail.city, region: trail.region })) {
        existingCities.push({ city: trail.city, region: trail.region })
    }
}

let saveCities = []
let notExistCities = []

for (let i in cities) {
    if (aincludes(existingCities, { city: cities[i].name, region: cities[i].state })) {
        saveCities.push(cities[i])
    } else {
        notExistCities.push(cities[i])
    }
}

console.log('')