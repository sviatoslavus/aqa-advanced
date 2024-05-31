
const baseUrl = 'https://swapi.dev/api/people/14'
//  2.1 Promise
const starShips = await fetch(baseUrl)
.then(res => res.json())
.then(data =>{
    return data.starships
}).catch(error =>{
    console.log('OOPS', error);
})



const fetchStarships = starShips.map(starship => fetch(starship))

const namesOfStarships = await Promise.all(fetchStarships)
.then(responses => { 
    return Promise.all(responses.map(response =>{
        return response.json()
    }))
    .then(data => {
        const names = data.map(planet => planet.name)
        return names
    })
}).catch(error => {
    console.error("OOPS2", error);
})
console.log(namesOfStarships); 

// 2.2 async/await
async function getStarshipsForPeople(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        
       
        const namesOfStarships = []
        for(const starshipUrl of data.starships){
            const starshipResponse = await fetch(starshipUrl);
            const starshipData = await starshipResponse.json()
            namesOfStarships.push(starshipData.name)
        }
       
        console.log(namesOfStarships); 
    }
    catch(error){
        console.log("OOPS", error);
    }
}

getStarshipsForPeople(baseUrl)