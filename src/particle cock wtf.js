const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const math = require('mathjs');

const Superconducting = 10;
const Gold = 25;
const Neodymium = 50;
const Tungsten = 100;
const Schrabidium = 250;
const Schrabidate = 500;
const Starmetal = 1000;
const Chlorophyte = 2500;
const Mese = 10000;

let powerMaterial = 0;
let coilConsumption = 0;
let coilStrength = 0;
let acceleratorLength = 0;
let roundCorners = 0;
let desiredPower = 0;

function newProgram() {
  powerMaterial = parseInt(readline.question("Find power, Find size.(1,0)\n"));
}

if (powerMaterial == 0) {
  readline.question("How long is the particle accelerator?\n", (input) => {
    acceleratorLength = parseInt(input);
    readline.question("What type of coil?\n", (coilTypeSTR) => {
      readline.question("Round corners?(1,0)\n", (input) => {
        roundCorners = parseInt(input);
        if (coilTypeSTR === "Superconducting") {
          coilStrength = 10;
          coilConsumption = 0.1;
        } else if (coilTypeSTR === "Gold") {
          coilStrength = 25;
          coilConsumption = 0.25;
        } else if (coilTypeSTR === "Neodymium") {
          coilStrength = 50;
          coilConsumption = 0.5;
        } else if (coilTypeSTR === "Tungsten") {
          coilStrength = 100;
          coilConsumption = 1;
        } else if (coilTypeSTR === "Schrabidium") {
          coilStrength = 250;
          coilConsumption = 2.5;
        } else if (coilTypeSTR === "Schrabidate") {
          coilStrength = 500;
          coilConsumption = 5;
        } else if (coilTypeSTR === "Starmetal") {
          coilStrength = 1000;
          coilConsumption = 10;
        } else if (coilTypeSTR === "Chlorophyte") {
          coilStrength = 2500;
          coilConsumption = 25;
        } else if (coilTypeSTR === "Mese") {
          coilStrength = 10000;
          coilConsumption = 100;
        }
        const acceleratorStrength = ((((acceleratorLength * 4) + 12) * 8) * coilStrength);
        let coilAmmount = 0;
        if (roundCorners === 1) {
          coilAmmount = math.ceil(((acceleratorLength * 8) * 4) + 84);
        } else {
          coilAmmount = math.ceil(((acceleratorLength * 8) * 4) + 108 - 24);
        }
        const powerConsumption = math.ceil((coilAmmount * coilConsumption));
        console.log("The strength is", acceleratorStrength);
        console.log("It needs", coilAmmount, "coils");
        console.log("It consumes", powerConsumption, "MHe (Innacurate)");
        readline.close();
      });
    });
  });
}

if (powerMaterial == 1) {
  readline.question("How strong should the accelerator be?\n", (input) => {
    desiredPower = parseInt(input);
  })}
