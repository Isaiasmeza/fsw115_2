let people = document.getElementById("people")
let planets = document.getElementById("planets")
let starShips= document.getElementById("starships")
async function Data() {
    try {
        const swPeople = await axios.get("https://swapi.dev/api/people")
        const swPlanets = await axios.get("https://swapi.dev/api/planets")
        const swStarShips = await axios.get("https://swapi.dev/api/starships")
        makePeopleu1(swPeople)
        makePlanetsu1(swPlanets)
        makeStarShipsu1(swStarShips)
    }
    catch (error) {
        console.log(error)
    }
}
Data()
let makePeopleu1 = (apiData) => {
    let peopleData = apiData.data.results
    let head = document.createElement("h2")
    head.innerHTML = "People"
    people.appendChild(head)
    peopleData.map(function (person) {
        let list = document.createElement("li")
        list.innerHTML = person.name
        people.appendChild(list)
    })
    console.log("welp")
}
let makePlanetsu1 = (apiData) => {
    let PlanetsData = apiData.data.results
    let header = document.createElement("h2")
    header.innerHTML = "Planets"
    planets.appendChild(header)
    PlanetsData.map(function (planet) {
        let list = document.createElement("li")
        list.innerHTML = planet.name
        planets.appendChild(list)
    })
}
let makeStarShipsu1 = (apiData) => {
    let StarshipsData = apiData.data.results
    let header = document.createElement("h2")
    header.innerHTML = "Starships"
    starShips.appendChild(header)
    StarshipsData.map(function (Starships) {
        let list = document.createElement("li")
        list.innerHTML = Starships.name
        starShips.appendChild(list)
    })
    
}