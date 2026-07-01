const georgiaCities = [
  "Chauncey", "Bogart", "Carnesville", "Clarkston", "Dudley",
  "Clayton", "Carrollton", "Alpharetta", "Alamo", "Dexter",
  "Columbus", "Aragon", "Canton", "Dalton", "Alston",
  "Clyo", "Cordele", "Cataula", "Ball Ground", "Buckhead",
  "Byron", "Bowdon Junction", "Cartersville", "Arnoldsville", "Conley",
  "Danielsville", "Abbeville", "Allentown", "Butler", "Dillard",
  "Alto", "Bartow", "Cohutta", "Cobbtown", "Dahlonega",
  "Dawson", "Blakely", "Centerville", "Colquitt", "Austell",
  "Demorest", "Baxley", "Brooks", "Braselton", "Newnan",
  "Saint Simons Island", "Smyrna", "Ringgold", "Snellville", "Roswell",
  "Marietta", "Jesup", "Eatonton", "Franklin", "Manor",
  "Harlem", "Hahira", "Jonesboro", "Manchester", "Mansfield",
  "Hillsboro", "Louisville", "Gray", "Ellerslie", "Greensboro",
  "Jefferson", "Epworth", "Hardwick", "Juliette", "Hawkinsville",
  "Lincolnton", "Hamilton", "Jenkinsburg", "Glennville", "Martin",
  "Gillsville", "Lakeland", "Locust Grove", "Maysville", "Gibson",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < georgiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(georgiaCities[i]);
}

module.exports = { batches };
