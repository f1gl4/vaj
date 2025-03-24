// 1. display (console.log) all names of vehicles from local file data/vehicles.json (folder data, file vehicles.json) (you can use FS readFileSync)
// How to use readFileSync can be found here https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/
import fs from 'fs';


const data = fs.readFileSync('./data/vehicles.json',
    { encoding: 'utf8', flag: 'r' });

const vehicles = JSON.parse(data);

vehicles.forEach(vehicle => {
    console.log(vehicle.name);
});
