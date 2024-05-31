const baseUrl = 'https://swapi.dev/api/planets/';
// urls for each planet
const planets = [];
for (let i = 1; i <= 10; i++) {
	planets.push(baseUrl.concat(i));
}
// fetch for every url of planet
const fetchPlanets = planets.map((planet) => fetch(planet));

const namesOfPlanets = await Promise.all(fetchPlanets)
	.then((responses) => {
		return Promise.all(
			responses.map((response) => {
				return response.json();
			}),
		).then((data) => {
			const names = data.map((planet) => planet.name);
			return names;
		});
	})
	.catch((error) => {
		console.log(error);
	});
console.log(namesOfPlanets);
