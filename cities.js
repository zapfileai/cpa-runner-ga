const georgiaCities = [
  "Hephzibah", "Ellaville", "Eastanollee", "Fairburn", "Duluth",
  "Fitzgerald", "Hiawassee", "Forsyth", "Flovilla", "Guyton",
  "Homer", "Lithia Springs", "Kennesaw", "Garfield", "La Fayette",
  "Fort Benning", "Forest Park", "Folkston", "Kathleen", "Fayetteville",
  "Lindale", "Lula", "Elko", "Leary", "Georgetown",
  "Mableton", "Macon", "Madison", "Evans", "Jewell",
  "Hiram", "Harrison", "Lavonia", "Fort Stewart", "Fort Valley",
  "Hinesville", "Gordon", "Lyons", "Loganville", "Hazlehurst",
  "Ellenwood", "Grayson", "Ellabell", "East Dublin", "Girard",
  "Elberton", "Holly Springs", "Lizella", "Hartsfield", "Jackson",
  "East Ellijay", "Hartwell", "Gainesville", "Lumber City", "Jeffersonville",
  "Griffin", "Emerson", "Woodland", "Valdosta", "Waycross",
  "White", "Waleska", "Washington", "Warrenton", "Tyrone",
  "Ty Ty", "Wrens", "Watkinsville", "Vidalia", "Woodbury",
  "Young Harris", "Waverly", "Wildwood", "Monroe", "Warm Springs",
  "Oakwood", "Sandersville", "Pelham", "Pine Lake", "Meigs",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < georgiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(georgiaCities[i]);
}

module.exports = { batches };
