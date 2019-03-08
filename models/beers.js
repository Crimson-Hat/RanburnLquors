const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beersSchema = new Schema({
  BrandName: { type: String, required: true },
  AvaibleSizes: { type: String, required: false },
  BeerStyle: { type: String, required: false },
  Abv: { type: String, required: false },
  Description: { type: String, required: false },
  ImgUrl:{ type: String, required: false }
});

const beers = mongoose.model("beers", beersSchema);

module.exports = beers;