const georgiaCities = [
  "Nashville", "Millen", "Talking Rock", "Thomaston", "Sautee Nacoochee",
  "Kingston", "Grovetown", "Eastman", "Leesburg", "Helen",
  "Flintstone", "Fortson", "Mcdonough", "Franklin Springs", "Fort Oglethorpe",
  "Ludowici", "Lenox", "Flowery Branch", "Mccaysville", "Fairmount",
  "Lilburn", "Greenville", "Lithonia", "Kingsland", "Hampton",
  "Mcrae Helena", "Good Hope", "Hull", "Lagrange", "Lake Park",
  "Haddock", "Lakemont", "Lookout Mountain", "Hoschton", "Jekyll Island",
  "Jasper", "Ellijay", "Union City", "Unadilla", "Vienna",
  "Winston", "Whigham", "Woodbine", "Winder", "Winterville",
  "Wrightsville", "Waynesboro", "Zebulon", "Tybee Island", "Uvalda",
  "West Point", "Twin City", "Willacoochee", "Villa Rica", "Waverly Hall",
  "Waco", "Tunnel Hill", "White Plains", "Tucker", "Warner Robins",
  "Yatesville", "Waynesville", "Perry", "Peachtree Corners", "Palmetto",
  "Plainville", "Morganton", "Moreland", "Rome", "Whitesburg",
  "Oxford", "Rocky Face", "Milner", "Williamson", "Pearson",
  "Saint Marys", "Springfield", "Rex", "Thomasville", "Menlo",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < georgiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(georgiaCities[i]);
}

module.exports = { batches };
