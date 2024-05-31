const baseUrl = 'https://swapi.dev/api/films/3'


const residents = []


// console.log(planets);
async function getResidents(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        const planets = await data.planets
        for(const planet of planets){
            const responsePlanet = await fetch(planet)
            const planetData = await responsePlanet.json()
            // console.log(planetData.name, planetData.residents);
            const planetObj = {
                name: planetData.name,
                residents: []
            }
            for(const resident of planetData.residents){
                const responseResident = await fetch(resident)
                const residentData = await responseResident.json()
                planetObj.residents.push(residentData.name)
                // console.log(residentData.name);
            }
            residents.push(planetObj)
        }
        console.log(residents);
    } catch(error){
        console.log(error);
    }
    
}
getResidents(baseUrl)
