const georgiaCities = [
  "Suches", "Rossville", "Scottdale", "Naylor", "Trion",
  "Newington", "Morrow", "Toccoa", "Rydal", "Register",
  "Townsend", "Tiger", "Powder Springs", "Monticello", "Rockmart",
  "Taylorsville", "Patterson", "Summerville", "Surrency", "Oglethorpe",
  "Pavo", "Rutledge", "Ray City", "Royston", "Milledgeville",
  "Pine Mountain", "Milan", "Port Wentworth", "Stockbridge", "Thomson",
  "Midland", "Savannah", "Pendergrass", "Reynolds", "Talmo",
  "Millwood", "Swainsboro", "Richland", "Ranger", "Nicholls",
  "Mount Airy", "Nahunta", "Midville", "Sharpsburg", "Odum",
  "Pembroke", "Sylvester", "Mount Zion", "Social Circle", "Metter",
  "Pooler", "Richmond Hill", "Norcross", "Sylvania", "Quitman",
  "Riverdale", "Ocilla", "Molena", "Rising Fawn", "Stone Mountain",
  "Roopville", "Tifton", "Tignall", "Pineview", "Rincon",
  "Senoia", "Statesboro", "Shiloh", "Statham", "Rentz",
  "Trenton", "Silver Creek", "Rock Spring", "Newborn", "Montezuma",
  "Midway", "Pinehurst", "Resaca", "Murrayville", "Sycamore",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < georgiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(georgiaCities[i]);
}

module.exports = { batches };
