let fs = require('fs')

let cities = JSON.parse(fs.readFileSync('city_list.json'))
let newCities = []
cities.forEach(c => {
    if (c.country == 'US') newCities.push(c)
})

fs.writeFileSync('us_cities.json', JSON.stringify(newCities))