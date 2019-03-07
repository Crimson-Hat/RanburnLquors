const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/radburn"
);

const dealsSeed = [
  {
    "id": 1,
    "name": "Collier Creek Cabernet Sauvignon",
    "image": "https://via.placeholder.com/150",
    "type": "Red Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 2,
    "name": "Collier Creek Pinot Noir",
    "image": "https://via.placeholder.com/150",
    "type": "Red Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 3,
    "name": "Collier Creek Chardonnay",
    "image": "https://via.placeholder.com/150",
    "type": "White Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 4,
    "name": "J.Moreau & Fils Vouvray",
    "image": "https://via.placeholder.com/150",
    "type": "White Wine",
    "price": "$16.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$21.99"
  },
  {
    "id": 5,
    "name": "Jack Daniels",
    "image": "https://via.placeholder.com/150",
    "type": "Bourbon",
    "price": "$30.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$40.00"
  },
  {
    "id": 6,
    "name": "Bulleit Bourbon",
    "image": "https://via.placeholder.com/150",
    "type": "Bourbon",
    "price": "$34.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$42.99"
  },
  {
    "id": 7,
    "name": "Tito's Vodka",
    "image": "https://via.placeholder.com/150",
    "type": "Vodka",
    "price": "$24.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$29.99"
  },
  {
    "id": 8,
    "name": "The Macellan 12yr Double Cask",
    "image": "https://via.placeholder.com/150",
    "type": "Single Malt-Scotch",
    "price": "$63.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$75.00"
  }
];
const spiritsSeed = [
  {
    "ProductName": "Rampur",
    "Volume": "750",
    "Abv": "43",
    "Category": "Spirits",
    "Type": "Whiskey",
    "Sub-Type": "Single Malt",
    "Country": "Indian",
    "Price": "0",
    "Description": "Rampur Distillery was the original name for Radico Khaitan, India's fourth largest spirits company. It has been making whisky for more than half a century, and started producing malted barley for its blends in 1990, but only launched its first single malt for export in 2016. This is a creamy and malty whisky with notes of vanilla, apricot and apple."
  },
  {
    "ProductName": "Clontarf",
    "Volume": "1000",
    "Abv": "40",
    "Category": "Spirits",
    "Type": "Whiskey",
    "Sub-Type": "Irish Whiskey",
    "Country": "Ireland",
    "Price": "0",
    "Description": "Ireland- Made with the finest grains and pure Irish spring water. It is triple distilled and aged in bourbon casks. Light toffee and vanilla fills the nose a pallet. Finishes round and slightly spicy."
  },
  {
    "ProductName": "Amrut Fusion",
    "Volume": "750",
    "Abv": "50",
    "Category": "Spirits",
    "Type": "Whiskey",
    "Sub-Type": "Single Malt",
    "Country": "Indian",
    "Price": "0",
    "Description": "India- Rich, barley and fruit nose with citrus, spices, a creamy sweetness and a hint of peat. Palate is oaky, rich, with gentle peat, coffee and dark chocolate notes. Long, spicy sweet finish with a touch of citrus."
  },
  {
    "ProductName": "Hine Rare VSOP",
    "Volume": "750",
    "Abv": "40",
    "Category": "Spirits",
    "Type": "Brandy & Cognac",
    "Sub-Type": "Cognac",
    "Country": "France",
    "Price": "0",
    "Description": "Cognac, France- The most delicate of Hine's Cognacs, blended from grapes from the two finest regions. Displaying the expertise of the famed Hine Cellar Masters, this blend of over 25 Cognacs features fruity aromas on the bouquet and a long mellow taste on the finish."
  },
  {
    "ProductName": "Mejor Tequila Pink",
    "Volume": "750",
    "Abv": "40",
    "Category": "Spirits",
    "Type": "Tequila",
    "Sub-Type": "Blanco/Silver",
    "Country": "Mexico",
    "Price": "0",
    "Description": "Mexico- Pink is fashioned to blend the modern luxury of Mejor tequila with the refined American cocktail culture. Pink can be enjoyed by all who appreciate the finest in spirits, from the most discriminating tequila connoisseur to the non-traditional tequila drinkers alike."
  },
  {
    "ProductName": "Tito's Handmade Vodka",
    "Volume": "750",
    "Abv": "40",
    "Category": "Spirits",
    "Type": "",
    "Sub-Type": "",
    "Country": "United States",
    "Price": "0",
    "Description": "USA- Designed to be savored by spirit connoisseurs. Micro-distilled in an old-fashioned pot still to provide more control over the distillation process and resulting in a spectacularly clean product. Only the heart of the run is taken, leaving behind residual higher and lower alcohols."
  }
]
db.Spirits
  .remove({})
  .then(() => db.Spirits.collection.insertMany(spiritsSeed))
    .then(data => {
      console.log(data.result.n + " spirits inserted!");
      // process.exit(0);
    })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  }).
    then(db.Deals
      .remove({})
      .then(() => db.Deals.collection.insertMany(dealsSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      })
    )