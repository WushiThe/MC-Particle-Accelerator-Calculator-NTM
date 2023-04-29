
import * as math from 'math';
import * as os from 'os';
var Chlorophyte, Gold, Mese, Neodymium, Schrabidate, Schrabidium, Starmetal, Superconducting, Tungsten, acceleratorLength, acceleratorStrength, coilAmmount, coilConsumption, coilConsumptionn, coilStrength, coilTypeSTR, desiredPower, powerConsumption, powerMaterial, roundCorners, secondaryLength;
Superconducting = 10;
Gold = 25;
Neodymium = 50;
Tungsten = 100;
Schrabidium = 250;
Schrabidate = 500;
Starmetal = 1000;
Chlorophyte = 2500;
Mese = 10000;
powerMaterial = 0;
coilConsumption = 0;
coilStrength = 0;
acceleratorLength = 0;
roundCorners = 0;
desiredPower = 0;
powerMaterial = Number.parseInt(input("Find power, Find size.(1,0)\n"));

if (powerMaterial === 0) {
  acceleratorLength = Number.parseInt(input("How long is the particle accelerator?\n"));
  coilTypeSTR = input("What type of coil?\n").toString();
  roundCorners = Number.parseInt(input("Round corners?(1,0)\n"));
}

if (powerMaterial === 1) {
  desiredPower = Number.parseInt(input("How strong should the accelerator be?\n"));
  coilTypeSTR = input("What type of coil?\n").toString();
  roundCorners = Number.parseInt(input("Round corners?(1,0)\n"));
}

if (coilTypeSTR === "Superconducting") {
  coilStrength = 10;
  coilConsumption = 0.1;
}

if (coilTypeSTR === "Gold") {
  coilStrength = 25;
  coilConsumptionn = 0.25;
}

if (coilTypeSTR === "Neodymium") {
  coilStrength = 50;
  coilConsumption = 0.5;
}

if (coilTypeSTR === "Tungsten") {
  coilStrength = 100;
  coilConsumption = 1;
}

if (coilTypeSTR === "Schrabidium") {
  coilStrength = 250;
  coilConsumption = 2.5;
}

if (coilTypeSTR === "Schrabidate") {
  coilStrength = 500;
  coilConsumption = 5;
}

if (coilTypeSTR === "Starmetal") {
  coilStrength = 1000;
  coilConsumption = 10;
}

if (coilTypeSTR === "Chlorophyte") {
  coilStrength = 2500;
  coilConsumption = 25;
}

if (coilTypeSTR === "Mese") {
  coilStrength = 10000;
  coilConsumption = 100;
}

if (powerMaterial === 0) {
  acceleratorStrength = (acceleratorLength * 4 + 12) * 8 * coilStrength;

  if (roundCorners === 1) {
    coilAmmount = math.ceil(acceleratorLength * 8 * 4 + 84);
  } else {
    coilAmmount = math.ceil(acceleratorLength * 8 * 4 + 108 - 24);
  }

  powerConsumption = math.ceil(coilAmmount * coilConsumption);
  console.log("The strength is", acceleratorStrength);
  console.log("It needs", coilAmmount, "coils");
  console.log("It consumes", powerConsumption, "MHe (Innacurate)");
}

if (powerMaterial === 1) {
  acceleratorLength = (desiredPower / coilStrength / 8 - 12) / 4;

  if (roundCorners === 1) {
    coilAmmount = acceleratorLength * 8 * 4 + 84;
  } else {
    coilAmmount = acceleratorLength * 8 * 4 + 108 - 24;
  }

  powerConsumption = coilAmmount * coilConsumption;
  secondaryLength = math.ceil(acceleratorLength);
  console.log("It is", secondaryLength, "blocks long");
  console.log("It needs", coilAmmount, "coils");
  console.log("It consumes", powerConsumption, "MHe (Innacurate)");
}
