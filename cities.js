const georgiaCities = [
  "Woodstock", "Cumming", "Calhoun", "Suwanee", "Peachtree City",
  "Bremen", "Acworth", "Atlanta", "Lawrenceville", "Baconton",
  "Athens", "Albany", "Donalsonville", "Cobb", "Broxton",
  "Canon", "Cedartown", "Blue Ridge", "Chula", "Colbert",
  "Allenhurst", "Armuchee", "Douglasville", "Crawford", "Buchanan",
  "Appling", "Collins", "Dallas", "Climax", "Chickamauga",
  "Americus", "Bowdon", "Bishop", "Bellville", "Doerun",
  "Buena Vista", "Clermont", "Douglas", "Brooklet", "Ambrose",
  "Dublin", "Bowman", "Bethlehem", "Dawsonville", "Cleveland",
  "Claxton", "Alapaha", "Dacula", "Ashburn", "Brunswick",
  "Baldwin", "Cuthbert", "Clarkesville", "Adrian", "Dixie",
  "Blairsville", "Barnesville", "Covington", "Cornelia", "Augusta",
  "Bonaire", "Camilla", "Alma", "Crandall", "Avondale Estates",
  "Adel", "Cairo", "Bainbridge", "Cusseta", "Box Springs",
  "Conyers", "Adairsville", "Blackshear", "Cochran", "Buford",
  "Commerce", "Darien", "Decatur", "Auburn", "Chatsworth",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < georgiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(georgiaCities[i]);
}

module.exports = { batches };
