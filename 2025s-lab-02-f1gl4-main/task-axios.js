// How to use axios - check the presentation https://github.com/vsb-vaj/#presentations
import fs from "fs"
import axios from "axios"
// use this API
const apiUrl = "https://swapi.dev/api/planets/";
// TASKS:
// 1. create function downloadPlanets, which will download the data and return data.results
// 2. create function parsePlanets for extraction names of planets and return sorted array of planet names
// 3. create function savePlanets to save array of strings into file (as param) named planets.txt (you can write file with https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)
// Example of write File sync in presentation https://github.com/vsb-vaj/#presentations
// You can't pass array to write file, so we need to transform it to string, like this planetsArray.toString()
// The output file should look like this Alderaan,Bespin,Coruscant,Dagobah,Endor,Hoth,Kamino,Naboo,Tatooine,Yavin IV

// 4. Use all these functions, call them and create new file with names of planets
// So, we will call downloadPlanets -> result send to parsePlanets -> result send to savePlanets

// function with no param, returns data.results from JSON
const downloadPlanets = async() => {
    const response = await axios.get(apiUrl);
      return response.data.results;
};

// function with one param - array of planets from donwloadPlanets
// return sorted array of planet names
const parsePlanets = (planets) => {
    return planets.map(planet => planet.name).sort();
};

// function with 2 params - fileName and array of planets
const savePlanets = (filename, planets) => {
    fs.writeFileSync(filename, planets.toString());
};

const planetsData = await downloadPlanets();
const planetNames = parsePlanets(planetsData);
savePlanets('planets.txt', planetNames);
console.log(planetNames);