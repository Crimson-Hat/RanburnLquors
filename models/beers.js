const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beersSchema = new Schema({
  BrandName: { type: String, required: true },
  AvailableSizes: { type: String, required: false },
  BeerStyle: { type: String, required: false },
  Abv: { type: String, required: false },
  Description: { type: String, required: false },
  ImgUrl:{ type: String, required: false }
});

const Beers = mongoose.model("Beers", beersSchema);

module.exports = Beers;