const mongoose = require("mongoose");
const db = require("../models");


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
    "Volume": "750ml",
    "Abv": "43%",
    "Category": "Spirits",
    "Type": "Whiskey",
    "SubType": "Single Malt",
    "Country": "Indian",
    "Price": "0",
    "Description": "Rampur Distillery was the original name for Radico Khaitan, India's fourth largest spirits company. It has been making whisky for more than half a century, and started producing malted barley for its blends in 1990, but only launched its first single malt for export in 2016. This is a creamy and malty whisky with notes of vanilla, apricot and apple."
  },
  {
    "ProductName": "Clontarf",
    "Volume": "1000ml",
    "Abv": "40%",
    "Category": "Spirits",
    "Type": "Whiskey",
    "SubType": "Irish Whiskey",
    "Country": "Ireland",
    "Price": "0",
    "Description": "Ireland- Made with the finest grains and pure Irish spring water. It is triple distilled and aged in bourbon casks. Light toffee and vanilla fills the nose a pallet. Finishes round and slightly spicy."
  },
  {
    "ProductName": "Amrut Fusion",
    "Volume": "750ml",
    "Abv": "50%",
    "Category": "Spirits",
    "Type": "Whiskey",
    "SubType": "Single Malt",
    "Country": "Indian",
    "Price": "0",
    "Description": "India- Rich, barley and fruit nose with citrus, spices, a creamy sweetness and a hint of peat. Palate is oaky, rich, with gentle peat, coffee and dark chocolate notes. Long, spicy sweet finish with a touch of citrus."
  },
  {
    "ProductName": "Hine Rare VSOP",
    "Volume": "750ml",
    "Abv": "40%",
    "Category": "Spirits",
    "Type": "Brandy & Cognac",
    "SubType": "Cognac",
    "Country": "France",
    "Price": "0",
    "Description": "Cognac, France- The most delicate of Hine's Cognacs, blended from grapes from the two finest regions. Displaying the expertise of the famed Hine Cellar Masters, this blend of over 25 Cognacs features fruity aromas on the bouquet and a long mellow taste on the finish."
  },
  {
    "ProductName": "Mejor Tequila Pink",
    "Volume": "750ml",
    "Abv": "40%",
    "Category": "Spirits",
    "Type": "Tequila",
    "SubType": "Blanco/Silver",
    "Country": "Mexico",
    "Price": "0",
    "Description": "Mexico- Pink is fashioned to blend the modern luxury of Mejor tequila with the refined American cocktail culture. Pink can be enjoyed by all who appreciate the finest in spirits, from the most discriminating tequila connoisseur to the non-traditional tequila drinkers alike."
  },
  {
    "ProductName": "Tito's Handmade Vodka",
    "Volume": "750ml",
    "Abv": "40%",
    "Category": "Spirits",
    "Type": "Vodka",
    "SubType": "",
    "Country": "United States",
    "Price": "0",
    "Description": "USA- Designed to be savored by spirit connoisseurs. Micro-distilled in an old-fashioned pot still to provide more control over the distillation process and resulting in a spectacularly clean product. Only the heart of the run is taken, leaving behind residual higher and lower alcohols."
  }
];
const winesSeed = [
  {
    "FamilyName": "Collier Creek",
    "Country": "USA",
    "Size": "750 ml",
    "Types": "Cabernet Sauvignon, Pinot Noir, Zinfandel Chardonnay",
    "Description": "Collier Creek is really more of a state of mind, a paddle away from memory lane, and just around the creek bend from the past - A time when farmland ran as far as the eye could see. Nestled between the gold country of the Sierra Foothills and the San Francisco Delta waters lie the heart of the Lodi Appellation, where these fine wines are grown and produced.",
    "ImgUrl": ""
  },
  {
    "FamilyName": "Papi",
    "Country": "Chile",
    "Size": "750ml or 1.5 L",
    "Types": "Cabernet Sauvignon, Merlot, Pinot Noir",
    "Description": "Fine Chilean wines start with the finest Chilean grapes, and that’s why we choose only those from the most renowned grape growing region of Central Valley. Our renowned wines are the result of the perfect balance, character, and complexity due to our famous tradition and knowledge in the art of winemaking.",
    "ImgUrl": ""
  },
  {
    "FamilyName": "Josh",
    "Country": "USA",
    "Size": "750ml",
    "Types": "Cabernet Sauvignon, Melot",
    "Description": "",
    "ImgUrl": ""
  },
  {
    "FamilyName": "Zensa",
    "Country": "Italy",
    "Size": "750ml",
    "Types": "Pinot Grigio, Primitivo, Sparkling wine",
    "Description": "",
    "ImgUrl": ""
  },
  {
    "FamilyName": "Veuve du Vernay Brut",
    "Country": "France",
    "Size": "750ml",
    "Types": "Sparkling Wine",
    "Description": "",
    "ImgUrl": ""
  }
];
const beersSeed = [
  {
    "BrandName": "Harpoon The Craic",
    "AvailableSizes": "12oz 6pk Bottles",
    "BeerStyle": "Irish Red IPA",
    "Abv": "6.9%",
    "Description": "This hybrid ale combines two classic styles —IPA and Irish Red Ale—to create a unique and flavorful beer. Th­e malt combination commonly used in Irish Red Ales brings a toasted, malty flavor that balances the citrusy and fruity character of the hops.",
    "ImgUrl": ""
  },
  {
    "BrandName": "Guinness Draught",
    "AvailableSizes": "15oz 4pk cans and 11oz 6pk Bottles",
    "BeerStyle": "Stout",
    "Abv": "4.2%",
    "Description": "Ireland- Irish Dry Stout- Pours to a beautiful brown color with a creamy tan head. Smooth roasted malt and coffee flavors are balanced by some hopping, and the mouthfeel is as silky as you could ask for. Only 125 calories per 12 ounce serving.",
    "ImgUrl": ""
  },
  {
    "BrandName": "Guinness Foreign Extra Stout",
    "AvailableSizes": "12oz 4pk Bottles",
    "BeerStyle": "Stout",
    "Abv": "7.5%",
    "Description": "Ireland- Foreign / Export Stout- 7.5% ABV. Black color with ruby highlights. Aromas of toffee, toasted malts and dark fruit. The full body delivers a hoppier taste than regular Guinness and a roasted barley bitterness. Dark fruit character. Heavy mouthfeel. Dry and nutty in the finish.",
    "ImgUrl": ""
  },
  {
    "BrandName": "Guinness Extra Stout",
    "AvailableSizes": "11oz 6pk Bottles",
    "BeerStyle": "Stout",
    "Abv": "5%",
    "Description": "Ireland- Irish Dry Stout- This beer icon is pitch black in color with roasted malt aromas. It has a rich, creamy mouth feel without being too heavy. The hops provide a nice balance to the malts, allowing a slight sweetness to show on the finish.",
    "ImgUrl": ""
  },
  {
    "BrandName": "Smithwick's Irish Ale",
    "AvailableSizes": "11oz 6pk Bottles",
    "BeerStyle": "Irish Red Ale",
    "Abv": "4.5%",
    "Description": "Ireland- Irish Red Ale- Smithwick's Irish Ale is a copper colored ale with a thick, pillowy head. The aroma is sweet with malty caramel notes. It has a very clean taste with great hop flavors.",
    "ImgUrl": ""
  }
];

db.Spirits
  .remove({})
  .then(() => db.Spirits.collection.insertMany(spiritsSeed))
  .then(data => {
    console.log(data.result.n + " Spirits inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  })
  .then(db.Beers
    .remove({})
    .then(() => db.Beers.collection.insertMany(beersSeed))
    .then(data => {
      console.log(data.result.n + " Beers inserted!");
    }))
  .catch(err => {
    console.error(err);
  })
  .then(db.Wines
    .remove({})
    .then(() => db.Wines.collection.insertMany(winesSeed))
    .then(data => {
      console.log(data.result.n + " Wines inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
  );

  // .then(db.Deals
  //   .remove({})
  //   .then(() => db.Deals.collection.insertMany(dealsSeed))
  //   .then(data => {
  //     console.log(data.result.n + " Deals inserted!");
  //     process.exit(0);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  //   })
  // )


