const arrr = [
  { rum: 13, grog: 5 },
  { ace: 7, grog: 9 },
  { rum: 8, grog: 11 },
  { rum: 20, ace: 2 },
  { rum: 4, grog: 8 },
];

const calculateShots = (arr) =>
  arr.reduce((prev, { rum = 0, grog = 0 }) => prev + rum + grog, 0);

const alcoholShots = calculateShots(arrr);

console.log(`Arrr the pirates took ${alcoholShots} shots`);
